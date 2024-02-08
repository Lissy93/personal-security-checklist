import { component$ } from "@builder.io/qwik";

import Icon from "~/components/core/icon";
import type { Priority, Section } from '../../types/PSC';
import { marked } from "marked";
import { useLocalStorage } from "~/hooks/useLocalStorage";

export default component$((props: { section: Section }) => {

  const [completed, setCompleted] = useLocalStorage('PSC_PROGRESS', {});
  const [ignored, setIgnored] = useLocalStorage('PSC_IGNORED', {});

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

  const isIgnored = (pointId: string) => {
    return ignored.value[pointId] || false;
  };
  

  const isChecked = (pointId: string) => {
    if (isIgnored(pointId)) return false;
    return completed.value[pointId] || false;
  };

  return (
    <>

    <div class="collapse rounded-none">
      <input type="checkbox" /> 
      <div class="collapse-title flex justify-end font-bold">
        <button class="btn btn-sm hover:bg-primary"><Icon width={16} height={16} icon="filters"/>Filters</button>
      </div>
      <div class="collapse-content flex flex-wrap justify-between bg-base-100 rounded px-4 pt-1 !pb-1"> 
        {/* Filter by completion */}
        <div class="flex justify-end items-center gap-1">
          <p class="font-bold text-sm">Show</p>
          <label class="p-2 rounded hover:bg-front transition-all cursor-pointer flex gap-2">
            <span class="text-sm">All</span> 
            <input type="radio" name="show-all" class="radio radio-sm checked:radio-info" checked />
          </label>
          <label class="p-2 rounded hover:bg-front transition-all cursor-pointer flex gap-2">
            <span class="text-sm">Remaining</span> 
            <input type="radio" name="show-remaining" class="radio radio-sm checked:radio-error" />
          </label>
          <label class="p-2 rounded hover:bg-front transition-all cursor-pointer flex gap-2">
            <span class="text-sm">Completed</span> 
            <input type="radio" name="show-completed" class="radio radio-sm checked:radio-success" />
          </label>
        </div>
        {/* Filter by level */}
        <div class="flex justify-end items-center gap-1">
          <p class="font-bold text-sm">Filter</p>
          <label class="p-2 rounded hover:bg-front transition-all cursor-pointer flex gap-2">
            <span class="text-sm">Basic</span> 
            <input type="checkbox" checked class="checkbox checkbox-sm checked:checkbox-success" />
          </label>
          <label class="p-2 rounded hover:bg-front transition-all cursor-pointer flex gap-2">
            <span class="text-sm">Optional</span> 
            <input type="checkbox" checked class="checkbox checkbox-sm checked:checkbox-warning" />
          </label>
          <label class="p-2 rounded hover:bg-front transition-all cursor-pointer flex gap-2">
            <span class="text-sm">Advanced</span> 
            <input type="checkbox" checked class="checkbox checkbox-sm checked:checkbox-error" />
          </label>
        </div>
      </div>
    </div>



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
        {props.section.checklist.map((item, index) => {
          const badgeColor = getBadgeClass(item.priority);
          const itemId = generateId(item.point);
          const isItemCompleted = isChecked(itemId);
          const isItemIgnored = isIgnored(itemId);
          return (
            <tr key={index} class={[
              'rounded-sm transition-all',
              isItemCompleted ? `bg-${badgeColor} bg-opacity-10` : '',
              isItemIgnored? 'bg-neutral bg-opacity-15' : '',
              !isItemIgnored && !isItemCompleted ? `hover:bg-opacity-5 hover:bg-${badgeColor}` : '',
              ]}>
              <td class="text-center">
                <input
                  type="checkbox"
                  class={`checkbox checked:checkbox-${badgeColor} hover:checkbox-${badgeColor}`}
                  id={`done-${itemId}`}
                  checked={isChecked(itemId)}
                  disabled={isIgnored(itemId)}
                  onClick$={() => {
                    const data = completed.value;
                    data[itemId] = !data[itemId];
                    setCompleted(data);
                  }}
                />
                <label for={`ignore-${itemId}`} class="text-small block opacity-50 mt-2">Ignore</label>
                <input
                  type="checkbox"
                  id={`ignore-${itemId}`}
                  class={`toggle toggle-xs toggle-${badgeColor}`}
                  checked={isIgnored(itemId)}
                  onClick$={() => {
                    const ignoredData = ignored.value;
                    ignoredData[itemId] = !ignoredData[itemId];
                    setIgnored(ignoredData);

                    const completedData = completed.value;
                    completedData[itemId] = false;
                    setCompleted(completedData);
                  }}
                />
              </td>
              <td>
                <label
                  for={`done-${itemId}`}
                  class={`text-base font-bold ${isIgnored(itemId) ? 'line-through' : 'cursor-pointer'}`}>
                  {item.point}
                </label>
              </td>
              <td>
                <div class={`badge gap-2 badge-${badgeColor}`}>
                  {item.priority}
                </div>
              </td>
              <td dangerouslySetInnerHTML={parseMarkdown(item.details)}></td>
            </tr>
          )}
        )}
      </tbody>
    </table>
    </>
  );
});
