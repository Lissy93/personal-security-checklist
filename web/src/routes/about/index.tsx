import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$(() => {
  return (
    <article class="bg-base-200 bg-opacity-25 p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-lg">
      <h3>About the Author</h3>
        <p>
          This project was originally started by me, Alicia Sykes- with a lot of help from the community.
        </p>
        <br />
        <p>
          I write apps which aim to help people escape big tech, secure their data,
          and protect their privacy. I have a particular interest in self-hosting,
          Linux and OSINT.
        </p>
        <br />
        <p>
          If this type of stuff interests you, I maintain several other repositories that you may also like:
        </p>
        <br />
        <ul>
          <li>Web-Check - OSINT tool for analysing any website</li>
          <li>Dashy - Dashboard app, for organising your self-hosted services</li>
          <li>Portainer-Templates - Compiled repository of 1-click Docker apps for self-hosting</li>
          <li>AdGuardian - CLI tool for monitoring your networks traffic and AdGuard DNS stats</li>
          <li>Bug-Bounties - Database of websites which accept responsible vulnerability discolsure</li>
          <li>Awesome Privacy - A list of privacy-respscting software and services</li>
          <li>Email Comparison - Objective comparison of private/secure mail providers</li>
          <li>Git-In - Tools and resources to help beginners get into open source</li>
        </ul>
        <p>For a full list of projects I've published, see <a href="https://apps.aliciasykes.com/">apps.aliciasykes.com</a>, or follow me on GitHub (I'm <a href="https://github.com/lissy93">Lissy93</a>).</p>

    </article>
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
