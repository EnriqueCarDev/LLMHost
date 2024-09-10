import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { chatHistoryMock } from '../mocks/chat-history.mock';
import { ChatMetaData } from '../models/chatMetaData';
import { ChatInputComponent } from '../shared/ui/chat-input/chat-input.component';
import { DrawerFragmentModule } from './fragment/drawer-fragment/drawer-fragment.module';
import { DrawerComponent } from './ui/drawer/drawer.component';

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
  ],
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.scss',
})
export class AiComponent implements OnInit {
  chatHistory: ChatMetaData[] = chatHistoryMock;

  menuItems: string[] = ['New Chat', 'The solution'];

  isDrawerOpen: boolean = true;

  ngOnInit(): void {
    const drawerState = sessionStorage.getItem('drawerOpen');
    if (drawerState) {
      this.isDrawerOpen = drawerState === 'true';
    }
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    sessionStorage.setItem('drawerOpen', this.isDrawerOpen.toString());
  }
}
