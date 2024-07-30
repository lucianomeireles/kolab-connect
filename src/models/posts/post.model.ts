import { User } from '../users/user.model';

export type Post = {
  userId: number;
  user?: User;
  id: number;
  title: string;
  body: string;
  comments: PostComment[];
};

export type PostComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  user?: User;
};
