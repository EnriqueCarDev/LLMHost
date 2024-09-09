import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { DrawerFragmentActions } from './drawer-fragment.actions';


@Injectable()
export class DrawerFragmentEffects {

  loadDrawerFragments$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(DrawerFragmentActions.loadDrawerFragments),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => DrawerFragmentActions.loadDrawerFragmentsSuccess({ data })),
          catchError(error => of(DrawerFragmentActions.loadDrawerFragmentsFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
