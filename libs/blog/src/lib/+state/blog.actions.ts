import { Action } from '@ngrx/store';
import { Post } from '@portfolio/models';

export enum ActionTypes {
  BlogAction = '[Blog] Action',
  LoadBlog = '[Blog] Load Data',
  BlogLoaded = '[Blog] Data Loaded',

  LoadPosts = '[Blog] Load Posts',
  LoadPostsSuccess = '[Blog] Load Posts Success',
  LoadPostsFail = '[Blog] Load Posts Fail'
}

export class Blog implements Action {
  readonly type = ActionTypes.BlogAction;
}
export class LoadBlog implements Action {
  readonly type = ActionTypes.LoadBlog;
  constructor(public payload: any) {}
}

export class BlogLoaded implements Action {
  readonly type = ActionTypes.BlogLoaded;
  constructor(public payload: any) {}
}

export class LoadPosts implements Action {
  readonly type = ActionTypes.LoadPosts;
}
export class LoadPostsSuccess implements Action {
  readonly type = ActionTypes.LoadPostsSuccess;
  constructor(public payload: Post[]){}
}
export class LoadPostsFail implements Action {
  readonly type = ActionTypes.LoadPostsFail;
}

export type BlogActions = Blog
  | LoadBlog
  | BlogLoaded
  
  | LoadPosts
  | LoadPostsSuccess
  | LoadPostsFail;
