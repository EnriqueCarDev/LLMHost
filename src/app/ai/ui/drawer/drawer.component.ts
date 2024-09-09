import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { ChatMetaData } from 'src/app/models/chatMetaData';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  conversations = input<ChatMetaData[]>([]);
  isDrawerOpen = input<boolean>(true);
  menuItems = input<string[]>([]);

  toggleDrawerEvent = output<void>();

  onToggleDrawer() {
    this.toggleDrawerEvent.emit();
    // sessionStorage.setItem('drawerOpen', this.isDrawerOpen.toString());
  }
}
