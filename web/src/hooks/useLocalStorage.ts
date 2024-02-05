import { $, type QRL, useOnWindow, useStore } from "@builder.io/qwik";

export function useLocalStorage(key: string, initialState: any): [any, QRL<(value: any) => void>]  {
  const store = useStore({ value: initialState });

  useOnWindow('load', $(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) {
        window.localStorage.setItem(key, JSON.stringify(initialState));
      }
      store.value = item ? JSON.parse(item) : initialState;
    } catch (error) {
      console.log(error);
      store.value = initialState;
    }
  }));

  const setValue$ = $((value: any) => {
    try {
      store.value = value;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.log(error);
    }
  });

  return [store, setValue$];
}
