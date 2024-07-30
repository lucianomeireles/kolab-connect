import type { Post, PostComment } from '@/models';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../apiClient';
import { getLoggedUser } from '../users/user.service';

//######## Posts

const getPosts = async (userId?: string): Promise<Post[]> => {
  const url = userId ? `/posts?userId=${userId}` : `/posts`;
  const { data } = await apiClient.get<Post[]>(url);
  const localPosts = JSON.parse(localStorage.getItem('posts') || '[]');
  const localPostsFiltered = userId
    ? localPosts.filter((post: Post) => post.userId.toString() === userId)
    : localPosts;

  const apiPosts = data ? data : [];
  return [...apiPosts, ...localPostsFiltered];
};

export const useGetPosts = (userId?: string) => {
  return useQuery<Post[], Error>({
    queryKey: ['posts', userId],
    queryFn: () => getPosts(userId)
  });
};

export const saveLocalPost = (params: Partial<Post>): void => {
  const loggedUser = getLoggedUser();
  const id = Math.floor(Math.random() * 99999999) + 1000;

  const postParams: Post = {
    id: params.id || id,
    userId: loggedUser.id,
    title: `Post ${params.id || id}`,
    body: params.body || '',
    user: loggedUser,
    comments: []
  };

  const storedPosts = localStorage.getItem('posts');
  const localPosts: Post[] = storedPosts ? JSON.parse(storedPosts) : [];

  if (!params.id) {
    localPosts.push(postParams);
    localStorage.setItem('posts', JSON.stringify(localPosts));
  } else {
    const newComments = localPosts.map((post: Post) =>
      post.id === params.id ? postParams : post
    );
    localStorage.setItem('posts', JSON.stringify(newComments));
  }
};

export const removeLocalPost = (postId: number): void => {
  const storedPosts = localStorage.getItem('posts');
  const posts: Post[] = storedPosts ? JSON.parse(storedPosts) : [];
  const newPosts = posts.filter((post: Post) => post.id !== postId);
  localStorage.setItem('posts', JSON.stringify(newPosts));
};

//######## Post Comments

const getPostComments = async (postId: number): Promise<PostComment[]> => {
  const { data } = await apiClient.get<PostComment[]>(
    `/posts/${postId}/comments`
  );
  const localPostComments = getLocalPostComments(postId);
  const apiData = data ? data : [];
  return [...apiData, ...localPostComments];
};

export const getLocalPostComments = (postId: number): PostComment[] => {
  const localPostComments = JSON.parse(
    localStorage.getItem('postComments') || '[]'
  );
  return localPostComments.filter(
    (comment: PostComment) => comment.postId === postId
  );
};

export const useGetPostComments = (
  postId: number,
  isCommentsOpened: boolean
) => {
  return useQuery<PostComment[], Error>({
    queryKey: ['postComments', postId],
    queryFn: () => getPostComments(postId),
    enabled: !!postId && isCommentsOpened
  });
};

export const saveLocalPostComment = async (
  params: Partial<PostComment>
): Promise<void> => {
  const id = Math.floor(Math.random() * 99999999) + 1000;

  const commentParams: PostComment = {
    postId: params.postId!,
    id: params.id || id,
    name: `Post Comment ${id}`,
    email: params.user?.email || '',
    body: params.body || '',
    user: params.user
  };

  const storedComments = localStorage.getItem('postComments');
  const localPostComments: PostComment[] = storedComments
    ? JSON.parse(storedComments)
    : [];

  if (!params.id) {
    localPostComments.push(commentParams);
    localStorage.setItem('postComments', JSON.stringify(localPostComments));
  } else {
    const newComments = localPostComments.map((comment: PostComment) =>
      comment.id === params.id ? commentParams : comment
    );
    localStorage.setItem('postComments', JSON.stringify(newComments));
  }
};

export const removePostComment = async (commentId: number): Promise<void> => {
  const storedComments = localStorage.getItem('postComments');
  const comments: PostComment[] = storedComments
    ? JSON.parse(storedComments)
    : [];
  const newComments = comments.filter(
    (comment: PostComment) => comment.id !== commentId
  );
  localStorage.setItem('postComments', JSON.stringify(newComments));
};
