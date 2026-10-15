import * as jsyaml from 'js-yaml';

import type { Sections } from '~/types/PSC';
import checklistYaml from '../../../personal-security-checklist.yml?raw';

const checklists = jsyaml.load(checklistYaml) as Sections;

export default checklists;
