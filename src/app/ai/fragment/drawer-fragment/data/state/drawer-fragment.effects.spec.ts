import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DrawerFragmentEffects } from './drawer-fragment.effects';

describe('DrawerFragmentEffects', () => {
  let actions$: Observable<any>;
  let effects: DrawerFragmentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DrawerFragmentEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DrawerFragmentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
