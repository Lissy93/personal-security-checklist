import { component$ } from "@builder.io/qwik";

import SectionLinkGrid from "../../components/psc/section-link-grid";

import { data } from '../../mock-data';

export default component$(() => {
  return (
    <main class="flex items-center justify-center min-h-[80vh]">
      <SectionLinkGrid sections={data} />
    </main>
  );
});
