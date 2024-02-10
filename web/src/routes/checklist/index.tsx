import { component$, useContext } from "@builder.io/qwik";

import { ChecklistContext } from '~/store/checklist-context';
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { useChecklist } from '~/store/local-checklist-store';
import type { Section } from "~/types/PSC";

export default component$(() => {
  const checklists = useContext(ChecklistContext);
  const localChecklist = useChecklist();

  const [completed, setCompleted] = useLocalStorage('PSC_PROGRESS', {});

  return (
    <main class="p-8">
      <div class="join join-vertical w-full">
        {(localChecklist.checklist.checklist || checklists.value).map((section: Section, index: number) => (
          <div key={index} class={['collapse collapse-plus bg-base-200 my-4', `border-double border-2 border-${section.color}-400`]}>
            <input type="radio" name="my-accordion-3" /> 
            <div class={['collapse-title text-xl font-medium']}>
              <h3>{section.title}</h3>
            </div>
            <div class="collapse-content"> 
              {
                section.checklist.map((item, index) => {
                  const pointId = item.point.toLowerCase().replace(/ /g, '-');
                  return (
                  <div key={index} class="flex justify-between">
                    <label class="flex items gap-2" for={`check-${index}`}>
                      <input
                        class="checkbox checkbox-sm"
                        id={`check-${index}`}
                        type="checkbox"
                        checked={completed.value[pointId] || false}
                        onClick$={() => {
                          const data = completed.value;
                          data[pointId] = !data[pointId];
                          setCompleted(data);
                        }}
                      />
                      <span class="tooltip tooltip-bottom" data-tip={item.details}>{item.point}</span>
                    </label>
                  </div>
                )
              })
              }
              <div class="card-actions justify-end">
                <a href={`/checklist/${section.slug}`}>
                  <button class={`btn text-base-100 bg-${section.color}-400 hover:bg-${section.color}-600`}>
                    View Full Checklist ➜
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
});
