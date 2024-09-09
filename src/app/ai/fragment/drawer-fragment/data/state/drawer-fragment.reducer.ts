import { createFeature, createReducer, on } from '@ngrx/store';
import { DrawerFragmentActions } from './drawer-fragment.actions';

export const drawerFragmentFeatureKey = 'drawerFragment';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(DrawerFragmentActions.loadDrawerFragments, state => state),
  on(DrawerFragmentActions.loadDrawerFragmentsSuccess, (state, action) => state),
  on(DrawerFragmentActions.loadDrawerFragmentsFailure, (state, action) => state),
);

export const drawerFragmentFeature = createFeature({
  name: drawerFragmentFeatureKey,
  reducer,
});

