import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatApiService } from 'src/app/api/chat/chat-api.service';
import { ChatMetaData } from 'src/app/models/chatMetaData';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  private readonly chatApiService: ChatApiService = inject(ChatApiService);

  getChatHistory(): Observable<ChatMetaData[]> {
    return this.chatApiService.getChatHistory();
  }
}
