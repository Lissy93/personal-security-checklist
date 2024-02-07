import { $, component$, useSignal, useOnWindow, useContext } from "@builder.io/qwik";

import { useLocalStorage } from "~/hooks/useLocalStorage";
import { ChecklistContext } from "~/store/checklist-context";
import type { Priority, Sections, Section } from '~/types/PSC';

/**
 * Component for client-side user progress metrics.
 * Combines checklist data with progress from local storage,
 * calculates percentage completion for each priority level,
 * and renders some pretty pie charts to visualize results
 */
export default component$(() => {

  // All checklist data, from store
  const checklists = useContext(ChecklistContext);
  // Completed items, from local storage
  const [checkedItems] = useLocalStorage('PSC_PROGRESS', {});
  // Store to hold calculated progress results
  const totalProgress = useSignal({ completed: 0, outOf: 0 });

  /**
   * Calculates the users progress over specified sections.
   * Given an array of sections, reads checklists in each,
   * counts total number of checklist items
   * counts the number of completed items from local storage
   * and returns the percentage of completion
   */
  const calculateProgress = $((sections: Sections): { completed: number, outOf: number } => {
    if (!checkedItems.value || !sections.length) {
      return { completed: 0, outOf: 0 };
    }
    const totalItems = sections.reduce((total: number, section: Section) => total + section.checklist.length, 0);
    let totalComplete = 0;
    sections.forEach((section: Section) => {
      section.checklist.forEach((item) => {
        const id = item.point.toLowerCase().replace(/ /g, '-');
        const isComplete = checkedItems.value[id];
        if (isComplete) {
          totalComplete++;
        }
      });
    });
    return { completed: totalComplete, outOf: totalItems };
    // return Math.round((totalComplete / totalItems) * 100);
  });

  /**
   * Filters the checklist items in a given array of sections,
   * so only the ones of a given priority are returned
   * @param sections - Array of sections to filter
   * @param priority - The priority to filter by
   */
  const filterByPriority = $((sections: Sections, priority: Priority): Sections => {
    const normalize = (pri: string) => pri.toLowerCase().replace(/ /g, '-');
    return sections.map(section => ({
      ...section,
      checklist: section.checklist.filter(item => normalize(item.priority) === normalize(priority))
    }));
  });

  /**
   * Draws a completion chart using ProgressBar.js
   * Illustrating a given percent rendered to a given target element
   * @param percentage - The percentage of completion (0-100)
   * @param target - The ID of the element to draw the chart in
   * @param color - The color of the progress chart, defaults to Tailwind primary
   */
  const drawProgress = $((percentage: number, target: string, color?: string) => {
    // Get a given color value from Tailwind CSS variable
    const getCssVariableValue = (variableName: string, fallback = '') => {
      return getComputedStyle(document.documentElement)
        .getPropertyValue(variableName)
        .trim()
      || fallback;
    }
    // Define colors and styles for progress chart
    const primaryColor = color || 'hsl(var(--pf, 220, 13%, 69%))';
    const foregroundColor = 'hsl(var(--nc, 220, 13%, 69%))';
    const red = `hsl(${getCssVariableValue('--er', '0 91% 71%')})`;
    const green = `hsl(${getCssVariableValue('--su', '158 64% 52%')})`;
    const labelStyles = {
      color: foregroundColor, position: 'absolute', right: '0.5rem',  top: '2rem'
    };
    // Animations to occur on each step of the progress bar
    const stepFunction = (state: any, bar: any) => {
      const value = Math.round(bar.value() * 100);
      bar.path.setAttribute('stroke', state.color);
      bar.setText(value ? `${value}%` : '');
      if (value >= percentage) {
        bar.path.setAttribute('stroke', primaryColor);
      }
    };
    // Define config settings for progress chart
    const progressConfig = {
      strokeWidth: 6,
      trailWidth: 3,
      color: primaryColor,
      trailColor: foregroundColor,
      text: { style: labelStyles },
      from: { color: red },
      to: { color: green },
      step: stepFunction,
    };
    // Initiate ProgressBar.js passing in config, to draw the progress chart
    import('progressbar.js').then((ProgressBar) => {
      const line = new ProgressBar.SemiCircle(target, progressConfig);
      line.animate(percentage / 100);
    });
  });

  /**
   * Given a priority, filters the checklist, calculates data, renders chart
   * @param priority - The priority to filter by
   * @param color - The color override for the chart
   */
  const makeDataAndDrawChart = $((priority: Priority, color?: string) => {
    filterByPriority(checklists.value, priority)
    .then((sections: Sections) => {
      calculateProgress(sections)
        .then((progress) => {
          const { completed, outOf } = progress;
          const percent = Math.round((completed / outOf) * 100)
          drawProgress(percent, `#${priority}-container`, color)
        })
    });
  });

  /**
   * When the window has loaded (client-side only)
   * Initiate the filtering, calculation and rendering of progress charts
   */
  useOnWindow('load', $(() => {

    calculateProgress(checklists.value)
      .then((progress) => {
        totalProgress.value = progress;
    })

    makeDataAndDrawChart('recommended', 'hsl(var(--su, 158 64% 52%))');
    makeDataAndDrawChart('optional', 'hsl(var(--wa, 43 96% 56%))');
    makeDataAndDrawChart('advanced', 'hsl(var(--er, 0 91% 71%))');
  }));

  const items = [
    { id: 'recommended-container', label: 'Essential' },
    { id: 'optional-container', label: 'Optional' },
    { id: 'advanced-container', label: 'Advanced' },
  ];

  // Beware, some god-awful markup ahead (thank Tailwind for that!)
  return (
  <div class="flex justify-center flex-col w-full items-center">
    <div class="mb-4">
      <div class="rounded-box bg-neutral-content bg-opacity-5 w-96 p-4">
        <h3 class="text-primary text-2xl">Your Progress</h3>
        <p class="text-lg">
          You've completed <b>{totalProgress.value.completed} out of {totalProgress.value.outOf}</b> items
        </p>
        <progress
          class="progress w-80"
          value={totalProgress.value.completed}
          max={totalProgress.value.outOf}>
        </progress>
      </div>
    </div>
    <div class="carousel rounded-box mb-8">
    {items.map((item) => (
      <div
        key={item.id}
        class="flex flex-col justify-items-center carousel-item w-20 p-4
              bg-neutral-content bg-opacity-5 mx-2.5 rounded-box">
        <div class="relative" id={item.id}></div>
        <p class="text-center">{item.label}</p>
      </div>
      ))}
    </div>
  </div>
  );
});

