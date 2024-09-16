import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadmindIconComponent } from './headmind-icon.component';

describe('HeadmindIconComponent', () => {
  let component: HeadmindIconComponent;
  let fixture: ComponentFixture<HeadmindIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadmindIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadmindIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
