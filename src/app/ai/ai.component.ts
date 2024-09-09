import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DrawerComponent } from '../shared/ui/drawer/drawer.component';

@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    DrawerComponent,
  ],
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.scss',
})
export class AiComponent implements OnInit {
  chatHistory: string[] = [
    'User: Hi there!',
    'AI: Hello! How can I help you today?',
    'User: What is the weather like?',
    'AI: It looks sunny today in your location.',
  ];

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
