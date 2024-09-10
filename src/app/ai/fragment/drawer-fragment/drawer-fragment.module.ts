import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DrawerFragmentEffects } from './data/state/drawer-fragment.effects';
import {
  drawerFragmentFeature,
  drawerFragmentFeatureKey,
} from './data/state/drawer-fragment.reducer';
import { DrawerFragmentComponent } from './drawer-fragment.component';

@NgModule({
  declarations: [DrawerFragmentComponent],
  exports: [DrawerFragmentComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      drawerFragmentFeatureKey,
      drawerFragmentFeature.reducer
    ),
    EffectsModule.forFeature([DrawerFragmentEffects]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DrawerFragmentModule {}
