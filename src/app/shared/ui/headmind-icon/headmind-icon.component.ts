import { Component, input } from '@angular/core';

@Component({
  selector: 'app-headmind-icon',
  standalone: true,
  imports: [],
  templateUrl: './headmind-icon.component.html',
  styleUrl: './headmind-icon.component.scss',
})
export class HeadmindIconComponent {
  iconName = input<string>('');
  width = input<string>('');
  height = input<string>('');

  get iconPath(): string {
    return `assets/icons/${this.iconName}.svg`;
  }
}
