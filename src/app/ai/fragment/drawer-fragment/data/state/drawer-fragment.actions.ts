import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ChatMetaData } from 'src/app/models/chatMetaData';

export const DrawerFragmentActions = createActionGroup({
  source: 'DrawerFragment',
  events: {
    'Load DrawerFragments': emptyProps(),
    'Load DrawerFragments Success': props<{ data: ChatMetaData[] }>(),
    'Load DrawerFragments Failure': props<{ error: string }>(),
    'Set Drawer State': props<{ isDrawerOpen: boolean }>(),
    'toggle Drawer': emptyProps(),
  },
});
