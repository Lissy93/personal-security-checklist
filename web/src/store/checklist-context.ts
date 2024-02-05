import { type Signal } from '@builder.io/qwik';
import { createContextId } from '@builder.io/qwik';

import type { Sections } from '../types/PSC';

export const ChecklistContext = createContextId<Signal<Sections>>(
  'psc.ChecklistContext'
);
