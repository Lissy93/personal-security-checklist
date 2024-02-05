import { component$, useContext } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { marked } from 'marked';

import Icon from '~/components/core/icon';
import { ChecklistContext } from '~/store/checklist-context';
import { useLocalStorage } from '~/hooks/useLocalStorage';
import type { Section, Priority } from "~/types/PSC";

export default component$(() => {

  const checklists = useContext(ChecklistContext);

  const loc = useLocation();
  const slug = loc.params.title;

  const section: Section | undefined = checklists.value.find((item: Section) => item.slug === slug);

  const getBadgeClass = (priority: Priority, precedeClass: string = '') => {
    switch (priority.toLocaleLowerCase()) {
      case 'recommended':
        return `${precedeClass}success`;
      case 'optional':
        return `${precedeClass}warning`;
      case 'advanced':
        return `${precedeClass}error`;
      default:
        return `${precedeClass}neutral`;
    }
  };

  const generateId = (title: string) => {
    return title.toLowerCase().replace(/ /g, '-');
  };

  const parseMarkdown = (text: string | undefined): string => {
    return marked.parse(text || '', { async: false }) as string || '';
  };

  const STORAGE_KEY = 'PSC_PROGRESS';
  const [value, setValue] = useLocalStorage(STORAGE_KEY, {});

  const isChecked = (point: string) => {
    const pointId = generateId(point);
    return value.value[pointId] || false;
  };
  
  return (
    <div class="md:my-8 md:px-16 sm:px-2 rounded-md">
    <article class="bg-base-200 bg-opacity-25 p-8 mx-auto w-full max-w-[1200px] rounded-lg shadow-lg">
      <h1 class={['gap-2 text-5xl font-bold capitalize flex']}>
        <Icon height={36} width={36} icon={section?.icon || 'star'}  />
        {section?.title}
      </h1>
      <p class="py-2" dangerouslySetInnerHTML={parseMarkdown(section?.intro)}></p>

      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>Done?</th>
              <th>Advice</th>
              <th>Level</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {section?.checklist.map((item, index) => (
              <tr key={index} class={`rounded-sm hover:bg-opacity-5 hover:bg-${getBadgeClass(item.priority)}`}>
                <td>
                  <input
                    type="checkbox"
                    class="checkbox"
                    id={generateId(item.point)}
                    checked={isChecked(item.point)}
                    onClick$={() => {
                      const id = item.point.toLowerCase().replace(/ /g, '-');
                      const data = value.value;
                      data[id] = !data[id];
                      setValue(data);
                    }}
                  />
                </td>
                <td>
                  <label class="text-base font-bold" for={generateId(item.point)}>
                    {item.point}
                  </label>
                </td>
                <td>
                  <div class={`badge gap-2 ${getBadgeClass(item.priority, 'badge-')}`}>
                    {item.priority}
                  </div>
                </td>
                <td dangerouslySetInnerHTML={parseMarkdown(item.details)}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
    </div>
  );
});

