import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import Navbar from "../components/furniture/nav";
import Footer from "../components/furniture/footer";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <main class="bg-base-100">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
