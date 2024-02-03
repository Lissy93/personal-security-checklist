import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "../components/furniture/hero";
import SectionLinkGrid from "../components/psc/section-link-grid";

import { data } from '../mock-data';

export default component$(() => {
  return (
    <>
      <Hero />
      <SectionLinkGrid sections={data} />
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
