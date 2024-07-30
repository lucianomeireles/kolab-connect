'use client';

import { PostComment } from '@/models';
import { getLoggedUser, removePostComment } from '@/services';
import { Avatar, Box, Button, HStack, Text } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { PostCardCommentForm } from './postCardCommentForm';

type PostCardCommentsItemProps = {
  comment: PostComment;
};

export function PostCardCommentsItem({ comment }: PostCardCommentsItemProps) {
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const loggedUser = getLoggedUser();
  const showActions = !isEditing && loggedUser.id === comment.user?.id;

  const handleDelete = () => {
    removePostComment(comment.id);
    queryClient.invalidateQueries({
      queryKey: ['postComments', comment.postId]
    });
  };

  return (
    <HStack alignItems="flex-start" w="full">
      <Avatar size="sm" name={comment.user?.name} />
      {!isEditing && (
        <Box flexGrow={1}>
          <Text fontSize="sm">
            <Link
              href={`/users/${comment.user?.id}`}
              style={{ fontWeight: 'bold' }}
            >
              {comment.user?.username}
            </Link>{' '}
            {comment.body}
          </Text>
        </Box>
      )}
      {isEditing && (
        <PostCardCommentForm
          postId={comment.postId}
          commentId={comment.id}
          initialComment={comment.body}
          onSaved={() => setIsEditing(false)}
        />
      )}
      {showActions && (
        <HStack gap={0}>
          <Button variant="text" p={0} onClick={() => setIsEditing(true)}>
            <MdEdit />
          </Button>
          <Button variant="text" p={0} onClick={handleDelete}>
            <MdDelete />
          </Button>
        </HStack>
      )}
    </HStack>
  );
}
