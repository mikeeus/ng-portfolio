import { Action } from '@ngrx/store';
import { BlogActions, ActionTypes } from './blog.actions';
import { Post } from '../models';

/**
 * Interface for the 'Blog' data used in
 *  - BlogState, and
 *  - blogReducer
 */
export interface BlogData {
  posts: { data: Post[], loading: boolean, loaded: boolean };
}

/**
 * Interface to the part of the Store containing BlogState
 * and other information related to BlogData.
 */
export interface BlogState {
  readonly blog: BlogData;
}

export const initialState: BlogData = {
  posts: { data: [], loading: false, loaded: false }
};

export function blogReducer(
  state = initialState,
  action: BlogActions
): BlogData {
  switch (action.type) {
    case ActionTypes.BlogAction:
      return state;

    // POSTS
    case ActionTypes.LoadPosts: {
      return {
        ...state,
        posts: {
          ...state.posts,
          loading: true,
        }
      };
    }
    case ActionTypes.LoadPostsSuccess: {
      const posts = action.payload;
      return {
        ...state,
        posts: {
          data: posts,
          loading: false,
          loaded: true
        }
      };
    }
    case ActionTypes.LoadPostsFail: {
      return {
        ...state,
        posts: {
          ...state.posts,
          loading: false,
          loaded: true
        }
      };
    }

    default:
      return state;
  }
}
