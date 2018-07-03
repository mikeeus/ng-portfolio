import { User } from './user.model';

export class Post {
  id: number;
  title: string;
  content: string;
  slug: string;
  tags: string;
  published_at: Date;
  comment_id : number;
  user : User;

  constructor(post: Post) {
    Object.keys(post).forEach(key => this[key] = post[key]);
  }
}
