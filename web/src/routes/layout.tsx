import { component$, useContextProvider, Slot } from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";
import jsyaml from "js-yaml";

import Navbar from "~/components/furniture/nav";
import Footer from "~/components/furniture/footer";
import { ChecklistContext } from "~/store/checklist-context";
import type { Sections } from "~/types/PSC";

export const useChecklists = routeLoader$(async () => {
  const remoteUrl = 'https://gist.githubusercontent.com/Lissy93/0c26e4255b6fabc2c027ac72a4428aeb/raw/4ccdbc71e0fffdef53472cf98acbe40b0acf982b/personal-security-checklist.yml';
  // TODO: Update this URL to point to the Git repository
  return fetch(remoteUrl)
    .then((res) => res.text())
    .then((res) => jsyaml.load(res) as Sections)
    .catch(() => []);
});

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  const checklists = useChecklists();
  useContextProvider(ChecklistContext, checklists);

  return (
    <>
      <Navbar />
      <main class="bg-base-100 min-h-full">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
