
import { component$ } from "@builder.io/qwik";

import Icon from "../core/icon";

import { data } from '../../mock-data';

import type { Section } from '../../types/PSC';

export default component$(() => {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a href="/" class="btn btn-ghost text-xl tooltip tooltip-bottom flex capitalize" data-tip="Go back to Homepage">
          <Icon class="mr-2" icon="shield" width={28} height={28}  />
          <h1>Personal Security Checklist</h1>
        </a>
      </div>
      <div class="flex-none">
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
                {data.map((item: Section) => (
                  <li class={`hover:bg-${item.color}-600 hover:bg-opacity-15`}>
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
            <a class="tooltip flex tooltip-bottom" data-tip="View / Edit Source & Data">
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
            <input type="checkbox" value="synthwave" class="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
            <svg class="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
            <svg class="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </label>
        </div>
      </div>
    </div>
  );
});
