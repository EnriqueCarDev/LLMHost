import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DrawerFragmentActions } from './data/state/drawer-fragment.actions';
import { drawerFragmentFeature } from './data/state/drawer-fragment.reducer';

@Component({
  selector: 'app-drawer-fragment',
  templateUrl: './drawer-fragment.component.html',
  styleUrl: './drawer-fragment.component.scss',
})
export class DrawerFragmentComponent implements OnInit {
  private readonly store: Store = inject(Store);
  readonly drawerFragmentState = this.store.selectSignal(
    drawerFragmentFeature.selectDrawerFragmentState
  );

  // Will be deleted
  menuItems: string[] = ['New Chat', 'The solution'];

  ngOnInit(): void {
    this.store.dispatch(DrawerFragmentActions.loadDrawerFragments());

    // const drawerState = sessionStorage.getItem('drawerOpen');
    // if (drawerState !== null) {
    //   const isDrawerOpen = drawerState === 'true';
    //   this.store.dispatch(DrawerFragmentActions.setDrawerState({ isDrawerOpen }));
    // }
  }

  onToggleDrawer(): void {
    this.store.dispatch(DrawerFragmentActions.toggleDrawer());
  }
}
