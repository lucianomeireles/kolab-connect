'use client';

import { getLoggedUser, saveLocalPostComment } from '@/services';
import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdAddComment, MdInsertComment } from 'react-icons/md';

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
  const { t } = useTranslation();
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
      <InputGroup>
        <Input
          borderRadius="md"
          placeholder={t('add_a_comment')}
          size="md"
          value={userComment}
          onChange={e => setUserComment(e.target.value)}
          onKeyDown={handleOnKeyDown}
        />
        <InputRightElement>
          <IconButton
            onClick={saveComment}
            variant="text"
            aria-label={t('save')}
            size="lg"
            icon={!commentId ? <MdAddComment /> : <MdInsertComment />}
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}
