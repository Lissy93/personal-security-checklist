import os
import sys
import json
import yaml
import difflib
import logging
from jsonschema import Draft7Validator, FormatChecker, SchemaError

# Configure Logging
logging.basicConfig(level=logging.INFO, format='%(message)s')
logger = logging.getLogger(__name__)

project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
yaml_file_path = os.path.join(project_root, 'personal-security-checklist.yml')
schema_file_path = os.path.join(project_root, 'lib', 'schema.json')

# Keys used to name a list entry in error messages, in order of preference
label_keys = ('title', 'point')


def read_file(file_path):
    logger.info(f"Reading {os.path.relpath(file_path, project_root)}...")
    with open(file_path, 'r') as file:
        return file.read()

def plural(count, noun):
    return f"{count} {noun}{'' if count == 1 else 's'}"

def shorten(text, limit=160):
    """Keep both ends of a message, so a huge offending value can't bury the complaint."""
    return text if len(text) <= limit else f"{text[:limit // 2]} […] {text[-limit // 2:]}"

def find_line(node, path):
    """Best-effort 1-based YAML line for a path, by walking the composed node tree."""
    for key in path:
        if isinstance(key, int) and isinstance(node, yaml.SequenceNode):
            node = node.value[key]
        elif isinstance(node, yaml.MappingNode):
            node = next((value for name, value in node.value if name.value == key), node)
        else:
            break
    return node.start_mark.line + 1 if node is not None else 1

def label_of(node):
    if isinstance(node, dict):
        return next((node[key] for key in label_keys if isinstance(node.get(key), str)), None)
    return None

def describe_path(data, path):
    """Turn a path into a breadcrumb, such as 'Email › checklist › Use a Custom Domain › priority'."""
    crumbs, node = [], data
    for key in path:
        node = node[key]
        crumbs.append((label_of(node) or f"#{key}") if isinstance(key, int) else str(key))
    return ' › '.join(crumbs) or 'the document root'

def explain(error):
    """Yield a (path, message) pair per problem, naming each unexpected property individually."""
    if error.validator != 'additionalProperties':
        yield list(error.absolute_path), shorten(error.message)
        return
    allowed = sorted(error.schema.get('properties', {}))
    for key in sorted(set(error.instance) - set(allowed)):
        closest = difflib.get_close_matches(key, allowed, n=1)
        hint = f"did you mean '{closest[0]}'?" if closest else f"expected one of: {', '.join(allowed)}"
        yield list(error.absolute_path) + [key], f"Unexpected property '{key}' — {hint}"

def find_problems(data, nodes, schema):
    validator = Draft7Validator(schema, format_checker=FormatChecker())
    problems = [
        (find_line(nodes, path), describe_path(data, path), message)
        for error in validator.iter_errors(data)
        for path, message in explain(error)
    ]
    return sorted(problems)

def fail(summary, error):
    logger.error(f"\n✗ {summary}:\n  {error}")
    return 1

def report(problems, file_name):
    for line, location, message in problems:
        logger.error(f"\n{file_name}:{line}\n  at: {location}\n  {message}")
    logger.error(f"\n✗ Validation failed — {plural(len(problems), 'problem')} found")

def main():
    file_name = os.path.basename(yaml_file_path)
    try:
        content = read_file(yaml_file_path)
        data, nodes = yaml.safe_load(content), yaml.compose(content)
    except (OSError, yaml.YAMLError) as error:
        return fail(f"Could not read {file_name}", error)

    try:
        schema = json.loads(read_file(schema_file_path))
        Draft7Validator.check_schema(schema)
    except (OSError, ValueError, SchemaError) as error:
        return fail(f"Could not read {os.path.basename(schema_file_path)}", error)

    logger.info(f"Validating {file_name} against the schema...")
    problems = find_problems(data, nodes, schema)
    if problems:
        report(problems, file_name)
        return 1

    points = sum(len(section['checklist']) for section in data)
    logger.info(f"\n✓ {file_name} is valid — {plural(len(data), 'section')}, {plural(points, 'checklist item')}")
    return 0

if __name__ == "__main__":
    sys.exit(main())
