import { PostComment } from '@/models';
import { createContext, ReactNode, useState } from 'react';

type PostCardContext = {
  isCommentsOpened: boolean;
  setIsCommentsOpened: (isCommentsOpened: boolean) => void;
  postComments: PostComment[] | undefined;
  setPostComments: (postComments: PostComment[] | undefined) => void;
  postCommentsLength?: number;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
};

export const PostCardContext = createContext<PostCardContext>({
  isCommentsOpened: false,
  setIsCommentsOpened: () => {},
  postComments: [],
  setPostComments: () => {},
  postCommentsLength: 0,
  isEditing: false,
  setIsEditing: () => {}
});

type PostCardProviderProps = {
  children: ReactNode;
};

export function PostCardProvider({ children }: PostCardProviderProps) {
  const [isCommentsOpened, setIsCommentsOpened] = useState(false);
  const [postComments, setPostComments] = useState<PostComment[] | undefined>();
  const [isEditing, setIsEditing] = useState(false);

  const postCommentsLength = postComments?.length;

  return (
    <PostCardContext.Provider
      value={{
        isCommentsOpened,
        setIsCommentsOpened,
        postComments,
        setPostComments,
        postCommentsLength,
        isEditing,
        setIsEditing
      }}
    >
      {children}
    </PostCardContext.Provider>
  );
}
