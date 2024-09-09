import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerFragmentComponent } from './drawer-fragment.component';

describe('DrawerFragmentComponent', () => {
  let component: DrawerFragmentComponent;
  let fixture: ComponentFixture<DrawerFragmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawerFragmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrawerFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
