import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { ChatMetaData } from 'src/app/models/chatMetaData';
import { ChatHistoryElementComponent } from '../chat-history-element/chat-history-element.component';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule, ChatHistoryElementComponent],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  chatHistory = input<ChatMetaData[]>([]);
  isDrawerOpen = input<boolean>(true);
  menuItems = input<string[]>([]);

  toggleDrawerEvent = output<void>();

  onToggleDrawer() {
    this.toggleDrawerEvent.emit();
  }
}
