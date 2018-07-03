import { User } from './user.model';

export class Post {
  title: string;
  content: string;
  slug: string;
  tags: string;
  published_at: Date;
  comment_id : number;
  user : User;
}
