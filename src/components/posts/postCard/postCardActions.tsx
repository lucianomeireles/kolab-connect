import { PostCardContext } from '@/context';
import i18n from '@/i18n';
import { getLoggedUser, removeLocalPost } from '@/services';
import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

type PostCardActionsProps = {
  postId: number;
  userId: number;
};

export function PostCardActions({ postId, userId }: PostCardActionsProps) {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const loggedUser = getLoggedUser();
  const editable = loggedUser?.id === userId;

  const {
    isCommentsOpened,
    setIsCommentsOpened,
    postCommentsLength,
    isEditing,
    setIsEditing
  } = useContext(PostCardContext);

  const commentsDisplay = useMemo(() => {
    if (isCommentsOpened && postCommentsLength !== undefined) {
      return `${postCommentsLength} ${t('comments')}`;
    } else {
      return t('see_comments');
    }
  }, [
    t,
    i18n.language,
    isCommentsOpened,
    setIsCommentsOpened,
    postCommentsLength
  ]);

  const handleOnDelete = () => {
    removeLocalPost(postId);
    queryClient.invalidateQueries({
      queryKey: ['posts']
    });
  };

  return (
    <Flex justify="space-between" w="full">
      <Button
        fontSize="xs"
        variant="link"
        onClick={() => {
          setIsCommentsOpened(!isCommentsOpened);
        }}
      >
        {commentsDisplay}
      </Button>
      {editable && (
        <ButtonGroup>
          {!isEditing && (
            <Button
              fontSize="xs"
              variant="link"
              onClick={_ => setIsEditing(true)}
            >
              {t('edit')}
            </Button>
          )}
          <Button fontSize="xs" variant="link" onClick={handleOnDelete}>
            {t('delete')}
          </Button>
        </ButtonGroup>
      )}
    </Flex>
  );
}
