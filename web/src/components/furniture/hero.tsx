import { component$ } from "@builder.io/qwik";

import Icon from "../core/icon";

export default component$(() => {
  return (
    <div class="hero bg-front mb-16 shadow-sm">
      <div class="hero-content text-center">
        <div class="max-w-2xl flex flex-col place-items-center">
          <p>The Ultimate</p>
          <h1 class="text-5xl font-bold">Personal Security Checklist</h1>
          <p class="subtitle pb-6">Your guide to securing your digital life and protecting your privacy</p>
          <Icon class="mb-4" icon="shield" width={120} height={120}  />
          <a href="https://github.com/lissy93/personal-security-checklist">
            <button class="btn btn-primary btn-lg">
              <Icon icon="github" width={20} height={20}  />
              View on GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
});
