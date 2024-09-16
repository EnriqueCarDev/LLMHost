import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelAnswerComponent } from './model-answer.component';

describe('ModelAnswerComponent', () => {
  let component: ModelAnswerComponent;
  let fixture: ComponentFixture<ModelAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelAnswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
