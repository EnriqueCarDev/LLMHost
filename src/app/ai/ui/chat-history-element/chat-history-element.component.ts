import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chat-history-element',
  standalone: true,
  imports: [],
  templateUrl: './chat-history-element.component.html',
  styleUrl: './chat-history-element.component.scss',
})
export class ChatHistoryElementComponent {
  chatLabel = input<string>('label');
}
