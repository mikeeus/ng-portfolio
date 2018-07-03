import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  BlogActions,
  BlogActionTypes,
  LoadBlog,
  BlogLoaded
} from './blog.actions';
import { BlogState } from './blog.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class BlogEffects {
  @Effect() effect$ = this.actions$.ofType(BlogActionTypes.BlogAction);

  @Effect()
  loadBlog$ = this.dataPersistence.fetch(BlogActionTypes.LoadBlog, {
    run: (action: LoadBlog, state: BlogState) => {
      return new BlogLoaded(state);
    },

    onError: (action: LoadBlog, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<BlogState>
  ) {}
}
