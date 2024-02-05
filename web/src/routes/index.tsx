import { component$, useContext } from '@builder.io/qwik';
import { type DocumentHead } from "@builder.io/qwik-city";

import Hero from "../components/furniture/hero";
import SectionLinkGrid from "../components/psc/section-link-grid";

import { ChecklistContext } from '~/store/checklist-context';

export default component$(() => { 
  const checklists = useContext(ChecklistContext);
  
  return (
    <>
      <Hero />
      <SectionLinkGrid sections={checklists.value} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
