import { BlogActions, ActionTypes } from './blog.actions';
import { Post } from '@portfolio/models';
import { testPostContent } from './data';

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
  posts: {
    data: [
      new Post({
        title: 'JWT Auth in Lucky Api',
        content: testPostContent,
        slug: 'jwt-auth-in-lucky-api',
        tags: 'jwt, auth, lucky, crystal, json, api',
        published_at: new Date(),
        comment_id: 1,
        user: { name: 'Mikias', email: 'hello@mikias.net' }
      })
    ],
    loading: false,
    loaded: false
  }
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
