import { $, component$, useTask$, useSignal, useOnWindow, useContext } from "@builder.io/qwik";

import type { Priority, Sections, Section } from '../../types/PSC';
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { ChecklistContext } from "~/store/checklist-context";

export default component$(() => {

  const checklists = useContext(ChecklistContext);

  const totalProgress = useSignal(0);

  const STORAGE_KEY = 'PSC_PROGRESS';
  const [checkedItems] = useLocalStorage(STORAGE_KEY, {});

  /**
   * Given an array of sections, returns the percentage completion of all included checklists.
   */
  const calculateProgress = $((sections: Sections): number => {
    if (!checkedItems.value || !sections.length) {
      return 0;
    }
    const totalItems = sections.reduce((total: number, section: Section) => total + section.checklist.length, 0);
    let totalComplete = 0;
    sections.forEach((section: Section) => {
      section.checklist.forEach((item) => {
        const id = item.point.toLowerCase().replace(/ /g, '-');
        const isComplete = checkedItems.value[id];
        if (isComplete) {
          totalComplete++;
        }
      });
    });
    return Math.round((totalComplete / totalItems) * 100);
  });

  useOnWindow('load', $(() => {
    calculateProgress(checklists.value)
      .then(percentage => {
        totalProgress.value = percentage;
      });
  }));

  return (
   <div>
    <p>{totalProgress}</p>
   </div>
  );
});

