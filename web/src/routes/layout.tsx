import { component$, useContextProvider, Slot } from '@builder.io/qwik';
import { routeLoader$, type RequestHandler } from '@builder.io/qwik-city';

import Navbar from '~/components/furniture/nav';
import Footer from '~/components/furniture/footer';
import { ChecklistContext } from '~/store/checklist-context';
import checklistData from '~/data/checklist';

export const useChecklists = routeLoader$(() => checklistData);

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
