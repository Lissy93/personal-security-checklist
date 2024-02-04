import { component$ } from "@builder.io/qwik";

import { data } from '../../mock-data';

export default component$(() => {
  return (
    <main class="p-8">
      <div class="join join-vertical w-full">
        {data.map((section, index) => (
          <div key={index} class="collapse collapse-plus bg-base-200 join-item">
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
