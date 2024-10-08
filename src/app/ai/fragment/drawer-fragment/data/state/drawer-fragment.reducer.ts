import { createFeature, createReducer, on } from '@ngrx/store';
import { DrawerFragmentStateModel } from '../model/drawer-fragment.model';
import { DrawerFragmentActions } from './drawer-fragment.actions';

export const drawerFragmentFeatureKey = 'drawerFragment';

export const initialDrawerFragmentState: DrawerFragmentStateModel =
  DrawerFragmentStateModel.init();

export const reducer = createReducer(
  initialDrawerFragmentState,
  on(DrawerFragmentActions.loadDrawerFragments, (state) => state.load()),
  on(DrawerFragmentActions.loadDrawerFragmentsSuccess, (_, action) =>
    DrawerFragmentStateModel.ofSuccess(action.data)
  ),
  on(DrawerFragmentActions.loadDrawerFragmentsFailure, (state, action) =>
    state.fail(action.error)
  ),
  on(DrawerFragmentActions.toggleDrawer, (state) => state.toggleDrawer()),
  on(
    DrawerFragmentActions.setDrawerState,
    (state, { isDrawerOpen }) =>
      new DrawerFragmentStateModel(
        state.status,
        state.chatHistory,
        isDrawerOpen
      )
  )
);

export const drawerFragmentFeature = createFeature({
  name: drawerFragmentFeatureKey,
  reducer,
});
