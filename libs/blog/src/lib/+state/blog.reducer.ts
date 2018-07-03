import { Action } from '@ngrx/store';
import { BlogActions, BlogActionTypes } from './blog.actions';

/**
 * Interface for the 'Blog' data used in
 *  - BlogState, and
 *  - blogReducer
 */
export interface BlogData {}

/**
 * Interface to the part of the Store containing BlogState
 * and other information related to BlogData.
 */
export interface BlogState {
  readonly blog: BlogData;
}

export const initialState: BlogData = {};

export function blogReducer(
  state = initialState,
  action: BlogActions
): BlogData {
  switch (action.type) {
    case BlogActionTypes.BlogAction:
      return state;

    case BlogActionTypes.BlogLoaded: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
