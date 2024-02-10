
import { $, useStore, useOnWindow } from '@builder.io/qwik';
import jsyaml from 'js-yaml';
import type { Sections } from '~/types/PSC';

export const useChecklist = () => {
  const state = useStore<{ checklist: Sections | null }>({ checklist: null });

  const fetchChecklist = $(async () => {
    const localUrl = '/personal-security-checklist.yml';
    return fetch(localUrl)
      .then((res) => res.text())
      .then((yamlText) => {
        return jsyaml.load(yamlText);
      });
  });

  useOnWindow('load', $(() => {
    fetchChecklist().then((checklist) => {
      state.checklist = checklist as Sections;
    });
  }));

  const setChecklist = $((newChecklist: Sections) => {
    state.checklist = newChecklist;
  });

  return { checklist: state, setChecklist };
};
