import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-element',
  standalone: true,
  imports: [],
  templateUrl: './nav-element.component.html',
  styleUrl: './nav-element.component.scss',
})
export class NavElementComponent {
  @Input() label: string = 'label';
  // @Input() routerLink?: string;
  @Output() navElementClick = new EventEmitter<void>();
}
