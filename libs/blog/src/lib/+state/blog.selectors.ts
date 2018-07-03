import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BlogData } from './blog.reducer';

export const getBlogState = createFeatureSelector<BlogData>('blog');

export const getPosts = createSelector(
  getBlogState,
  (state) => state && state.posts
);

