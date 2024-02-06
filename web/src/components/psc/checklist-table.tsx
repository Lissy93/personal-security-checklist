import { component$ } from "@builder.io/qwik";

import type { Priority, Section } from '../../types/PSC';
import { marked } from "marked";
import { useLocalStorage } from "~/hooks/useLocalStorage";

export default component$((props: { section: Section }) => {

  const STORAGE_KEY = 'PSC_PROGRESS';
  const [value, setValue] = useLocalStorage(STORAGE_KEY, {});

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

  const isChecked = (point: string) => {
    const pointId = generateId(point);
    return value.value[pointId] || false;
  };
  
  return (
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
        {props.section?.checklist.map((item, index) => (
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
  );
});
