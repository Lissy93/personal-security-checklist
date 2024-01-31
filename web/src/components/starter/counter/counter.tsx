import { component$, useSignal, $ } from "@builder.io/qwik";
import styles from "./counter.module.css";
import Gauge from "../gauge";

export default component$(() => {
  const count = useSignal(70);

  const setCount = $((newValue: number) => {
    if (newValue < 0 || newValue > 100) {
      return;
    }
    count.value = newValue;
  });

  return (
    <div class={styles["counter-wrapper"]}>
      <button
        class="button-dark button-small"
        onClick$={() => setCount(count.value - 1)}
      >
        -
      </button>
      <Gauge value={count.value} />
      <button
        class="button-dark button-small"
        onClick$={() => setCount(count.value + 1)}
      >
        +
      </button>
    </div>
  );
});
