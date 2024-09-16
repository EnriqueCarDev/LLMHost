import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DrawerFragmentActions } from './drawer-fragment.actions';
import { DrawerService } from './drawer.service';

@Injectable()
export class DrawerFragmentEffects {
  private readonly drawerService: DrawerService = inject(DrawerService);

  loadDrawerFragments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DrawerFragmentActions.loadDrawerFragments),
      switchMap(() =>
        this.drawerService.getChatHistory().pipe(
          map((data) =>
            DrawerFragmentActions.loadDrawerFragmentsSuccess({ data })
          ),
          catchError((error) =>
            of(DrawerFragmentActions.loadDrawerFragmentsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
