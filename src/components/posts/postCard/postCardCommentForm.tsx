'use client';

import { PostCardContext } from '@/context';
import { User } from '@/models';
import { getLoggedUser, saveLocalPostComment } from '@/services';
import { Button, Flex, Input } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { MdAddComment } from 'react-icons/md';

type PostCardCommentFormProps = {
  postId: number;
  commentId?: number;
  initialComment?: string;
  onSaved?: () => void;
};

export function PostCardCommentForm({
  postId,
  commentId,
  initialComment,
  onSaved
}: PostCardCommentFormProps) {
  const queryClient = useQueryClient();
  const [userComment, setUserComment] = useState<string>(initialComment || '');
  const loggedUser = getLoggedUser();

  const saveComment = () => {
    if (!userComment) return;
    saveLocalPostComment({
      postId,
      id: commentId,
      user: loggedUser,
      body: userComment
    });
    queryClient.invalidateQueries({
      queryKey: ['postComments', postId]
    });
    setUserComment('');
    if (onSaved) onSaved();
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') saveComment();
  };

  return (
    <Flex direction="row" w="full">
      <Input
        borderRadius="md"
        placeholder="Add a comment..."
        size="sm"
        value={userComment}
        onChange={e => setUserComment(e.target.value)}
        style={{ flexGrow: 1 }}
        onKeyDown={handleOnKeyDown}
      />
      <Button fontSize="xs" variant="link" onClick={saveComment}>
        <MdAddComment />
      </Button>
    </Flex>
  );
}
