import os
import yaml
import logging

# Configure Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
yaml_file_path = os.path.join(project_root, 'personal-security-checklist.yml')
markdown_file_path = os.path.join(project_root, 'CHECKLIST.md')


def read_yaml(file_path):
    logger.info(f"Reading YAML file from {file_path}...")
    with open(file_path, 'r') as file:
        return yaml.safe_load(file)

def generate_markdown_section(section):
    markdown = f"## {section['title']}\n\n"
    markdown += f"{section['intro']}\n\n"
    markdown += "**Security** | **Priority** | **Details and Hints**\n"
    markdown += "--- | --- | ---\n"
    for item in section['checklist']:
        markdown += f"**{item['point']}** | {item['priority']} | {item['details']}\n"
    
    if 'softwareLinks' in section:
        software_links = [software for software in section['softwareLinks'] if 'title' in software and 'url' in software]
        if software_links:
            markdown += "\n### Recommended Software\n"
            for software in software_links:
                markdown += f"- [{software['title']}]({software['url']})\n"
    
    return markdown

def insert_markdown_content(md_file_path, new_content):
    start_marker, end_marker = "<!-- checklist-start -->", "<!-- checklist-end -->"
    logger.info(f"Inserting generated markdown into {md_file_path} between markers...")
    
    with open(md_file_path, 'r') as file:
        content = file.read()
    
    start_index = content.find(start_marker)
    end_index = content.find(end_marker, start_index)
    
    if start_index == -1 or end_index == -1:
        logger.error("Markers not found in the markdown file.")
        return
    
    updated_content = content[:start_index + len(start_marker)] + "\n" + new_content + "\n" + content[end_index:]
    
    with open(md_file_path, 'w') as file:
        file.write(updated_content)
    logger.info("Markdown content successfully inserted.")

def main():
    yaml_data = read_yaml(yaml_file_path)
    markdown_content = ""
    for section in yaml_data:
        markdown_content += generate_markdown_section(section) + "\n\n"
    insert_markdown_content(markdown_file_path, markdown_content)
    logger.info("Script completed successfully!")

if __name__ == "__main__":
    main()
