import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { chatHistoryMock } from 'src/app/mocks/chat-history.mock';
import { ChatMetaData } from 'src/app/models/chatMetaData';

@Injectable({
  providedIn: 'root',
})
export class ChatApiService {
  // Create the real function + backend part
  getChatHistory(): Observable<ChatMetaData[]> {
    return of(chatHistoryMock);
  }
}
