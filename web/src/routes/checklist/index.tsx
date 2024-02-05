import { component$, useContext } from "@builder.io/qwik";

import { ChecklistContext } from '~/store/checklist-context';
import type { Section } from "~/types/PSC";

export default component$(() => {
  const checklists = useContext(ChecklistContext);

  return (
    <main class="p-8">
      <div class="join join-vertical w-full">
        {checklists.value.map((section: Section, index: number) => (
          <div key={index} class={['collapse collapse-plus bg-base-200 my-4', `border-double border-2 border-${section.color}-400`]}>
            <input type="radio" name="my-accordion-3" /> 
            <div class={['collapse-title text-xl font-medium', `bg-${section.color}-400`]}>
              <h3 class="text-slate-700">{section.title}</h3>
            </div>
            <div class="collapse-content"> 
              <p>hello</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
});
