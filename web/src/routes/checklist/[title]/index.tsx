import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { marked } from 'marked';

import Icon from '../../../components/core/icon';
import { data } from '../../../mock-data';
import type { Section, Priority } from '../../../types/PSC';

export default component$(() => {
  const loc = useLocation();
  // const endpoint = useEndpoint<{ params: { title: string } }>();
  const slug = loc.params.title;

  const section: Section | undefined = data.find((item: Section) => item.slug === slug);

  // You can now use `title` to fetch data related to this checklist item
  // and render it below.

  const getBadgeClass = (priority: Priority, precedeClass: string = '') => {
    switch (priority) {
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

  return (
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
                  <input type="checkbox" class="checkbox" id={generateId(item.point)} />
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
  );
});

