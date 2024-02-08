import { component$ } from "@builder.io/qwik";

import type { Section } from '../../types/PSC';
import Icon from '../core/icon';

import styles from './psc.module.css';

export default component$((props: { sections: Section[] }) => {
  return (
    <div class={[styles.container, 'grid',
      'mx-auto mt-8 px-4 gap-7', 'xl:px-10 xl:max-w-7xl',
      'transition-all', 'max-w-6xl w-full']}>
      {props.sections.map((section: Section) => (                   
        <a key={section.slug}
          href={`/checklist/${section.slug}`}
          class={['card card-side bg-front bg-opacity-25 shadow-md transition-all px-2',
          `outline-offset-2 outline-${section.color}-400`,
          `hover:outline hover:outline-10 hover:outline-offset-4 hover:bg-opacity-15 hover:bg-${section.color}-600`]}
        >
          <div class="flex-shrink-0 flex flex-col py-4 h-auto items-stretch justify-evenly">
            <Icon icon={section.icon || 'star'} color={section.color} />
            <p class={`text-${section.color}-400 pt-2 pb-0 px-0 mx-0 my-0`}>0/{section.checklist.length} Done</p>
          </div>
          <div class="card-body flex-grow py-2 pl-4 pr-0">
            <h2 class={`card-title text-${section.color}-400 hover:text-${section.color}-500`}>{section.title}</h2>
            <p class="p-0">{section.description}</p>
            
            {/* <div class="card-actions justify-end">
              <button class={`btn text-base-100 bg-${section.color}-400 hover:bg-${section.color}-600`}>View Checklist</button>
            </div> */}
          </div>
        </a>
      ))}
    </div>
  );
});
