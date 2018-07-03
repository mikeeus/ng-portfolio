import { PostsGuard } from './posts.guard';
import { PostExistsGuard } from './post-exists.guard';

export const guards = [
  PostsGuard,
  PostExistsGuard
];

export { PostsGuard, PostExistsGuard }
