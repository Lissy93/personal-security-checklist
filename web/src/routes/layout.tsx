import { component$, useContextProvider, Slot } from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";

import Navbar from "../components/furniture/nav";
import Footer from "../components/furniture/footer";

import { ChecklistContext } from "../store/checklist-context";

import { type Sections } from "~/types/PSC";
import jsyaml from "js-yaml";


export const useChecklists = routeLoader$(async () => {
  const url = import.meta.env.DEV ? `http://localhost:5173/personal-security-checklist.yml` : '/personal-security-checklist.yml';
  return await fetch(url)
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
  useContextProvider(ChecklistContext, checklists)

  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <main class="bg-base-100 min-h-full">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
