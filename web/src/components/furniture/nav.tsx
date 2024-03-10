
import { $, component$, useContext } from "@builder.io/qwik";
import Icon from "~/components/core/icon";
import type { Section } from '~/types/PSC';
import { useTheme } from '~/store/theme-store';
import articles from '~/data/articles';
import { ChecklistContext } from '~/store/checklist-context';


export default component$(() => {

  const data = useContext(ChecklistContext);

  const { theme, setTheme } = useTheme();

  const themes = [
    'dark', 'light', 'night', 'cupcake', 
    'bumblebee', 'corporate', 'synthwave', 'retro', 
    'valentine', 'halloween', 'aqua', 'lofi', 
    'fantasy', 'dracula'
  ];

    const deleteAllData = $(() => {
    const isConfirmed = confirm('Are you sure you want to delete all local data? This will erase your progress.');
    if (isConfirmed) {
      localStorage.clear();
      location.reload();
    }
  });

  return (
    <>
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <div class="flex-none md:hidden">
            <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <a href="/" class="btn btn-ghost text-xl flex capitalize">
            <label for="my-drawer-3" aria-label="open sidebar" class="tooltip tooltip-bottom" data-tip="View all Pages"><Icon class="mr-2" icon="shield" width={28} height={28}  /></label>
            <h1>Digital Defense</h1>
          </a>
        </div>
        <div class="flex-none hidden md:flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>
                  <Icon icon="checklist" width={16} height={16}  />
                  Checklists
                </summary>
                <ul class="p-2 bg-base-100 rounded-t-none z-10">
                  {data.value.map((item: Section, index: number) => (
                    <li key={`checklist-nav-${index}`} class={`hover:bg-${item.color}-600 hover:bg-opacity-15`}>
                      <a href={`/checklist/${item.slug}`}>
                      <Icon color={item.color} class="mr-2" icon={item.icon} width={16} height={16}  />
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <a href="https://github.com/lissy93/personal-security-checklist"
                class="tooltip flex tooltip-bottom" data-tip="View / Edit Source & Data">
                <Icon icon="github" width={16} height={16}  />GitHub
              </a>
            </li>
          </ul>
          <div class="tooltip tooltip-bottom" data-tip="Theme">
            <label class="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                checked={theme.theme === 'dark'}
                onClick$={() => {
                  setTheme(theme.theme === 'dark' ? 'light' : 'dark');
                }}
                class="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg class="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
              <svg class="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
          </div>
          <li class="list-none px-2">
            <p
              onClick$={() => ((document.getElementById('settings_modal') || {}) as HTMLDialogElement).showModal()}
              class="cursor-pointer tooltip flex tooltip-bottom" data-tip="Settings">
                <Icon icon="settings" width={20} height={20}  />
            </p>
          </li>
        </div>
      </div>

      <div class="drawer-side z-10">
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
        <ul class="rounded-box menu p-4 w-80 min-h-full bg-base-200">
          <h2 class="flex text-primary">
          <Icon class="mr-2" icon="shield" width={16} height={16}  />
            Digital Defense
          </h2>
          <li><a href="/"><Icon class="mr-2" icon="homepage" width={16} height={16}  />Home</a></li>
          <li><a href="https://github.com/lissy93/personal-security-checklist">
            <Icon class="mr-2" icon="github" width={16} height={16}  />GitHub</a>
          </li>
          <li>
            <a href="/checklist"><Icon class="mr-2" icon="all" width={16} height={16} />Checklists</a>
            <ul>
              {data.value.map((item: Section, index: number) => (
              <li key={`checklist-side-${index}`} class={`hover:bg-${item.color}-600 hover:bg-opacity-15`}>
                <a href={`/checklist/${item.slug}`}>
                <Icon color={item.color} class="mr-2" icon={item.icon} width={16} height={16}  />
                  {item.title}
                </a>
              </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="/article">
              <Icon class="mr-2" icon="articles" width={16} height={16} />Articles
            </a>
            <ul>
              {articles.map(article => (
                <li key={article.slug}>
                  <a href={`/article/${article.slug}`}>{article.title}</a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="/about">
              <Icon class="mr-2" icon="about" width={16} height={16} />About
            </a>
            <ul>
              <li>
                <a href="https://github.com/Lissy93/personal-security-checklist/?tab=readme-ov-file#contributing">Contributing</a>
              </li>
              <li>
                <a href="https://github.com/Lissy93/personal-security-checklist/blob/master/LICENSE">License</a>
              </li>
            </ul>
            <ul>
            <li>
              <a href="/about#author">Author</a>
              <ul>
                <li><a href="https://aliciasykes.com/contact">Contact</a></li>
                <li>
                  <a href="https://apps.aliciasykes.com">More Apps</a>
                </li>
                <li class="flex flex-row">
                  <a href="https://github.com/lissy93"><Icon icon="hub" width={16} height={16} /></a>
                  <a href="https://x.com/lissy_sykes"><Icon icon="twitter" width={16} height={16} /></a>
                  <a href="https://mastodon.social/@lissy93"><Icon icon="mastodon" width={16} height={16} /></a>
                  <a href="https://dev.to/lissy93"><Icon icon="dev" width={16} height={16} /></a>
                  <a href="https://linkedin.com/in/aliciasykes"><Icon icon="linkedin" width={16} height={16} /></a>
                </li>
              </ul>
            </li>
            </ul>
          </li>
        </ul>
      </div>

      <dialog id="settings_modal" class="modal">
        <div class="modal-box">
          <div class="tabs tabs-lifted">
            <p class="tab tab-active">Settings</p>
            <a class="tab" href="/about">About</a>
          </div>
          <div class="modal-action justify-start w-full flex flex-col gap-4">
              <div class="flex items-between w-full justify-between">
                <label for="theme" class="label">Theme</label>
                <select 
                  id="theme" 
                  class="select select-bordered w-full max-w-xs"
                  onChange$={(event) => setTheme((event.target as HTMLSelectElement).value) }
                  >
                  <option disabled selected>Theme</option>
                  {themes.map((someTheme) => (
                    <option
                      key={someTheme}
                      value={someTheme}
                      selected={someTheme === theme.theme}
                      >
                      {someTheme.charAt(0).toUpperCase() + someTheme.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div class="flex items-between w-full justify-between">
                <label class="label">Data</label>
                <button class="btn btn-primary" onClick$={deleteAllData}>Delete All</button>
              </div>
              <button
                class="btn my-1 mx-auto"
                onClick$={() => ((document.getElementById('settings_modal') || {}) as HTMLDialogElement).close()}
              >Close</button>
            </div>
        </div>
      </dialog>
    </>
  );
});
