import { Action } from '@ngrx/store';

export enum BlogActionTypes {
  BlogAction = '[Blog] Action',
  LoadBlog = '[Blog] Load Data',
  BlogLoaded = '[Blog] Data Loaded'
}

export class Blog implements Action {
  readonly type = BlogActionTypes.BlogAction;
}
export class LoadBlog implements Action {
  readonly type = BlogActionTypes.LoadBlog;
  constructor(public payload: any) {}
}

export class BlogLoaded implements Action {
  readonly type = BlogActionTypes.BlogLoaded;
  constructor(public payload: any) {}
}

export type BlogActions = Blog | LoadBlog | BlogLoaded;
