import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li>
            <a
              href="https://qwik.builder.io/docs/components/overview/"
              target="_blank"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/examples/introduction/hello-world/"
              target="_blank"
            >
              Examples
            </a>
          </li>
          <li>
            <a
              href="https://qwik.builder.io/tutorial/welcome/overview/"
              target="_blank"
            >
              Tutorials
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
