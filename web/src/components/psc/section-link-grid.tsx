import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";

import { useLocalStorage } from "~/hooks/useLocalStorage";
import type { Checklist, Section } from '~/types/PSC';
import Icon from '~/components/core/icon';
import styles from './psc.module.css';

export default component$((props: { sections: Section[] }) => {

  // Create signals to store the number of items done or ignored per section
  const completions =  useSignal<number[]>();
  const done =  useSignal<number[]>();

  // Get the IDs of completed and ignore items from local storage
  const [checked] = useLocalStorage('PSC_PROGRESS', {});
  const [ignored] = useLocalStorage('PSC_IGNORED', {});

  /**
   * Get the percentage of completion for a given section
   * using completion data from local storage, and disregarding ignored items
   */
  const getPercentCompletion = $((section: Section): number => {
    const id = (item: Checklist) => item.point.toLowerCase().replace(/ /g, '-')
    const total = section.checklist.filter((item) => !ignored.value[id(item)]).length;
    const done = section.checklist.filter((item) => checked.value[id(item)]).length;
    return Math.round((done / total) * 100);
  });

  // On load (in browser only), calculate and set completion data for sections
  useOnWindow('load', $(async () => {
    // Percentage completion, per section
    completions.value = await Promise.all(props.sections.map(section => 
      getPercentCompletion(section),
    ));
    // Count of completed items, per section
    done.value = await Promise.all(props.sections.map(section => 
      section.checklist.filter(
        (item) => checked.value[item.point.toLowerCase().replace(/ /g, '-')],
      ).length
    ));
  }));

  return (
    <div class={[styles.container, 'grid',
      'mx-auto mt-8 px-4 gap-7', 'xl:px-10 xl:max-w-7xl',
      'transition-all', 'max-w-6xl w-full']}>
      {props.sections.map((section: Section, index: number) => (                   
        <a key={section.slug}
          href={`/checklist/${section.slug}`}
          class={[
            'card card-side bg-front bg-opacity-25 shadow-md transition-all px-2',
            `outline-offset-2 outline-${section.color}-400`,
            'hover:outline hover:outline-10 hover:outline-offset-4 hover:bg-opacity-15',
            `hover:bg-${section.color}-600`
          ]}
        >
          <div class="flex-shrink-0 flex flex-col py-4 h-auto items-stretch justify-evenly">
            <Icon icon={section.icon || 'star'} color={section.color} />
            {(done.value && done.value[index]) ? (
              <p class={`text-${section.color}-400 pt-2 pb-0 px-0 mx-0 my-0`}>
                {done.value[index]}/{section.checklist.length} Done
              </p>
            ) : (
              <p class={`text-${section.color}-400 pt-2 pb-0 px-0 mx-0 my-0`}>
                {section.checklist.length} Items
              </p>
            )}
          </div>
          <div class="card-body flex-grow py-2 pl-4 pr-0">
            <h2 class={`card-title text-${section.color}-400 hover:text-${section.color}-500`}>
              {section.title}
            </h2>
            <p class="p-0">{section.description}</p>
            {(completions.value && completions.value[index]) ? (
              <div
                class={['radial-progress absolute right-2 top-2 scale-75', `text-${section.color}-400`]}
                style={`--value:${completions.value[index]}; --size: 2.5rem;`}
                role="progressbar">
                  <span class="text-xs">{completions.value[index]}%</span>
              </div>
            ) : (
              <span class="absolute right-2 top-2 opacity-30 text-xs">
                Not yet started
              </span>
            )}
          </div>
        </a>
      ))}
    </div>
  );
});
