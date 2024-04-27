import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ButtonComponent {
  @Input() label: string = 'button';
  @Output() buttonClick = new EventEmitter<void>();
}
