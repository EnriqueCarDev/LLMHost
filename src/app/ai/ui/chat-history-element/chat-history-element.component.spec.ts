import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHistoryElementComponent } from './chat-history-element.component';

describe('ChatHistoryElementComponent', () => {
  let component: ChatHistoryElementComponent;
  let fixture: ComponentFixture<ChatHistoryElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatHistoryElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatHistoryElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
