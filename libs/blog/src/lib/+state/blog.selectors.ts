import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BlogData } from './blog.reducer';
import * as fromRoot from '@portfolio/storeRoot';

export const getBlogState = createFeatureSelector<BlogData>('blog');

export const getPosts = createSelector(
  getBlogState,
  (state) => state && state.posts
);

export const getViewedPost = createSelector(
  getPosts,
  fromRoot.getRouterState,
  (posts, router) => {
    const post = router.state && posts.data.filter(p =>
      p.id === +router.state.params.post_id
    )[0]
    console.log('posts:', posts);
    return {
      ...posts,
      data: post
    }
  }
);
