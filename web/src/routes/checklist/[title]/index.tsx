import { component$, useContext } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { marked } from 'marked';

import Icon from '~/components/core/icon';
import { ChecklistContext } from '~/store/checklist-context';
import { useChecklist } from '~/store/local-checklist-store';
import type { Section } from "~/types/PSC";
import Table from '~/components/psc/checklist-table';

export default component$(() => {

  const checklists = useContext(ChecklistContext);
  const localChecklist = useChecklist();

  const loc = useLocation();
  const slug = loc.params.title;

  const section: Section | undefined = (localChecklist.checklist.checklist || checklists.value)
    .find((item: Section) => item.slug === slug);

  const parseMarkdown = (text: string | undefined): string => {
    return marked.parse(text || '', { async: false }) as string || '';
  };
  
  return (
    <div class="md:my-8 md:px-16 sm:px-2 rounded-md">
    <article class="bg-back p-8 mx-auto w-full max-w-[1200px] rounded-lg shadow-md">
      <h1 class={['gap-2 text-5xl font-bold capitalize flex']}>
        <Icon height={36} width={36} icon={section?.icon || 'star'}  />
        {section?.title}
      </h1>
      <p class="py-2" dangerouslySetInnerHTML={parseMarkdown(section?.intro)}></p>

      <div class="overflow-x-auto">
        {section && (<Table section={section} />)}
      </div>

    </article>
    </div>
  );
});

