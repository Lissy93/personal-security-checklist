
export interface PersonalSecurityChecklist {
  sections: Section[],
}

export type Sections = Section[];

export interface Section {
  title: string,
  slug: string,
  description: string,
  intro: string,
  icon: string,
  color: string,
  checklist: Checklist[],
  softwareLinks?: Link[],
  helpfulTools?: Link[],
  furtherResources?: Link[],
}

export type Priority = 'essential' | 'optional' | 'advanced';

export interface Checklist {
  point: string,
  priority: Priority,
  details: string,
}

export interface Link {
  title: string,
  url: string,
  description?: string,
}
