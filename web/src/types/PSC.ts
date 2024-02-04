
export interface PersonalSecurityChecklist {
  sections: Section[],
}

export interface Section {
  title: string,
  slug: string,
  description: string,
  intro: string,
  icon: string,
  color: string,
  checklist: Checklist[],
  furtherLinks?: FurtherLink[],
}

export type Priority = 'recommended' | 'optional' | 'advanced';

export interface Checklist {
  point: string,
  priority: Priority,
  details: string,
}

export interface FurtherLink {
  title: string,
  url: string,
  description: string,
}
