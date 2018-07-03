import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  ActionTypes,
  LoadPostsSuccess, LoadPostsFail
} from './blog.actions';
import { BlogState } from './blog.reducer';
import { ApiService } from '@portfolio/api';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BlogEffects {
  @Effect() effect$ = this.actions$
    .ofType(ActionTypes.LoadPosts)
    .pipe(
      switchMap(action => {
        return this.api.getPosts().pipe(
          map(posts => new LoadPostsSuccess(posts)),
          catchError(err => {
            console.error(err)
            return of(new LoadPostsFail());
          })
        )
      })
    );

  // @Effect()
  // loadBlog$ = this.dataPersistence.fetch(BlogActionTypes.LoadBlog, {
  //   run: (action: LoadBlog, state: BlogState) => {
  //     return new BlogLoaded(state);
  //   },

  //   onError: (action: LoadBlog, error) => {
  //     console.error('Error', error);
  //   }
  // });

  constructor(
    private actions$: Actions,
    private api: ApiService
  ) {}
}
