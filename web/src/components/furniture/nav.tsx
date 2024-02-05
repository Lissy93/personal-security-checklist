
import { component$ } from "@builder.io/qwik";
import Icon from "~/components/core/icon";
import { data } from '~/mock-data';
import type { Section } from '~/types/PSC';
import { useTheme } from '~/store/theme-store';


export default component$(() => {

  const { theme, setTheme } = useTheme();

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
            <h1>Personal Security Checklist</h1>
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
                  <li>
                    <a href="/checklist">
                    <Icon class="mr-2" icon="all" width={16} height={16}  />
                      View All
                    </a>
                  </li>
                  {data.map((item: Section, index: number) => (
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
              <a href="#" class="tooltip flex tooltip-bottom" data-tip="View / Edit Source & Data">
                <Icon icon="github" width={16} height={16}  />GitHub
              </a>
            </li>
            {/* <li>
              <a href="https://apps.aliciasykes.com" class="tooltip flex tooltip-bottom" data-tip="Other projects by Alicia Sykes">
                <Icon icon="code" width={24} height={16}  />More
              </a>
            </li> */}
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
        </div>
      </div>

      <div class="drawer-side z-10">
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
        <ul class="rounded-box menu p-4 w-80 min-h-full bg-base-200">
          <h2 class="flex text-primary">
          <Icon class="mr-2" icon="shield" width={16} height={16}  />
            Personal Security Checklist
          </h2>
          <li><a href="/"><Icon class="mr-2" icon="homepage" width={16} height={16}  />Home</a></li>
          <li><a href="/"><Icon class="mr-2" icon="github" width={16} height={16}  />GitHub</a></li>
          <li>
            <a href="/checklist"><Icon class="mr-2" icon="all" width={16} height={16}  />Checklists</a>
            <ul>
              {data.map((item: Section, index: number) => (
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
            <a href="/article">Articles</a>
            <ul>
              <li><a href="/article/1">Article 1</a></li>
              <li><a href="/article/2">Article 2</a></li>
            </ul>
          </li>
          <li>
            <a href="/about">About</a>
            <ul>
              <li>
                <a href="#">Contributing</a>
              </li>
              <li>
                <a href="#">License</a>
              </li>
            </ul>
            <ul>
            <li>
              <a href="#">Author</a>
              <ul>
                <li><a href="#">Contact</a></li>
                <li>
                  <a href="#">Socials</a>
                  <ul>
                    <li><a href="">GitHub</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Mastodon</a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://apps.aliciasykes.com">More Apps</a>
                  <ul>
                    <li><a href="#">Web-Check</a></li>
                    <li><a href="#">Dashy</a></li>
                    <li><a href="#">Portainer-Templates</a></li>
                    <li><a href="#">AdGuardian</a></li>
                    <li><a href="#">Bug-Bounties</a></li>
                    <li><a href="#">Awesome Privacy</a></li>
                    <li><a href="#">Email Comparison</a></li>
                    <li><a href="#">Git-In</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
});
