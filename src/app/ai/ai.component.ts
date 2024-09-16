import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { ChatInputComponent } from '../shared/ui/chat-input/chat-input.component';
import { DrawerFragmentActions } from './fragment/drawer-fragment/data/state/drawer-fragment.actions';
import { drawerFragmentFeature } from './fragment/drawer-fragment/data/state/drawer-fragment.reducer';
import { DrawerFragmentModule } from './fragment/drawer-fragment/drawer-fragment.module';
import { DrawerComponent } from './ui/drawer/drawer.component';
import { ModelAnswerComponent } from './ui/model-answer/model-answer.component';

@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    DrawerComponent,
    DrawerFragmentModule,
    ChatInputComponent,
    DrawerFragmentModule,
    ModelAnswerComponent,
  ],
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.scss',
})
export class AiComponent implements OnInit {
  private readonly store: Store = inject(Store);
  readonly drawerFragmentState = this.store.selectSignal(
    drawerFragmentFeature.selectDrawerFragmentState
  );

  ngOnInit(): void {
    this.store.dispatch(DrawerFragmentActions.loadDrawerFragments());
  }

  onToggleDrawer(): void {
    this.store.dispatch(DrawerFragmentActions.toggleDrawer());
  }
}
