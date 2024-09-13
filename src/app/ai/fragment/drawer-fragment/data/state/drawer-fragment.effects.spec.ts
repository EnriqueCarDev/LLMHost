import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { chatHistoryMock } from 'src/app/mocks/chat-history.mock';
import { ChatMetaData } from 'src/app/models/chatMetaData';
import { DrawerFragmentActions } from './drawer-fragment.actions';
import { DrawerFragmentEffects } from './drawer-fragment.effects';
import { DrawerService } from './drawer.service';

describe('DrawerFragmentEffects', () => {
  let actions$: Observable<any>;
  let effects: DrawerFragmentEffects;
  let drawerService: DrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DrawerFragmentEffects,
        provideMockActions(() => actions$),
        provideHttpClient(withInterceptorsFromDi()),
      ],
    });

    effects = TestBed.inject(DrawerFragmentEffects);
    drawerService = TestBed.inject(DrawerService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should loadDrawerFragments$ dispacth loadDrawerFragmentsSuccess with a list of chatHistory', (done) => {
    // Given
    const chatHistory: ChatMetaData[] = chatHistoryMock;
    drawerService.getChatHistory = jest.fn().mockReturnValue(of(chatHistory));
    const expected = DrawerFragmentActions.loadDrawerFragmentsSuccess({
      data: chatHistory,
    });

    // When
    actions$ = of(DrawerFragmentActions.loadDrawerFragments());

    // Then
    effects.loadDrawerFragments$.subscribe((action) => {
      expect(action).toEqual(expected);
      done();
    });
  });
});
