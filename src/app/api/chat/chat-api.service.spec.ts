import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { ChatApiService } from './chat-api.service';

describe('ChatApiService', () => {
  let service: ChatApiService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatApiService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
