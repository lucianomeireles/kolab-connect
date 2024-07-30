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

  return [...(data || []), ...localPostsFiltered];
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
    userId: loggedUser?.id || 1,
    title: `Post ${params.id || id}`,
    body: params.body || '',
    user: loggedUser,
    comments: []
  };

  const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
  if (!params.id) {
    storedPosts.push(postParams);
  } else {
    const index = storedPosts.findIndex((post: Post) => post.id === params.id);
    if (index !== -1) {
      storedPosts[index] = postParams;
    }
  }
  localStorage.setItem('posts', JSON.stringify(storedPosts));
};

export const removeLocalPost = (postId: number): void => {
  const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
  const newPosts = storedPosts.filter((post: Post) => post.id !== postId);
  localStorage.setItem('posts', JSON.stringify(newPosts));
};

//######## Post Comments

const getPostComments = async (postId: number): Promise<PostComment[]> => {
  const { data } = await apiClient.get<PostComment[]>(
    `/posts/${postId}/comments`
  );
  const localPostComments = getLocalPostComments(postId);
  return [...(data || []), ...localPostComments];
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

  const storedComments = JSON.parse(
    localStorage.getItem('postComments') || '[]'
  );
  if (!params.id) {
    storedComments.push(commentParams);
  } else {
    const index = storedComments.findIndex(
      (comment: PostComment) => comment.id === params.id
    );
    if (index !== -1) {
      storedComments[index] = commentParams;
    }
  }
  localStorage.setItem('postComments', JSON.stringify(storedComments));
};

export const removePostComment = async (commentId: number): Promise<void> => {
  const storedComments = JSON.parse(
    localStorage.getItem('postComments') || '[]'
  );
  const newComments = storedComments.filter(
    (comment: PostComment) => comment.id !== commentId
  );
  localStorage.setItem('postComments', JSON.stringify(newComments));
};
