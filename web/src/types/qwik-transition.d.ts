declare module 'qwik-transition' {
  import type { Signal } from '@builder.io/qwik';

  export type Stage = 'enterFrom' | 'enterTo' | 'leaveFrom' | 'leaveTo' | 'idle';

  export function useCSSTransition(
    signal: Signal<boolean>,
    options: { timeout?: number; transitionOnAppear?: boolean },
  ): { stage: Signal<Stage>; shouldMount: Signal<boolean> };
}
