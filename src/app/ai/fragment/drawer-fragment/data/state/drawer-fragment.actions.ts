import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const DrawerFragmentActions = createActionGroup({
  source: 'DrawerFragment',
  events: {
    'Load DrawerFragments': emptyProps(),
    'Load DrawerFragments Success': props<{ data: unknown }>(),
    'Load DrawerFragments Failure': props<{ error: unknown }>(),
  }
});
