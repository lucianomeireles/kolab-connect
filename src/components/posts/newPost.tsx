'use client';

import { getLoggedUser, saveLocalPost } from '@/services';
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
import { MdPostAdd } from 'react-icons/md';
import { UserAvatar } from '../user/userAvatar';

export function NewPost() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [userComment, setUserComment] = useState<string>('');
  const loggedUser = getLoggedUser();

  const handleSavePost = () => {
    if (!userComment) return;

    saveLocalPost({
      body: userComment
    });

    queryClient.invalidateQueries({
      queryKey: ['posts']
    });
    setUserComment('');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
  };

  return (
    <Flex
      justify="space-between"
      grow={1}
      border="0.5px"
      borderColor="gray.100"
      borderRadius="xl"
      px={2}
      py={1}
      gap={2}
      boxShadow="xs"
      backgroundColor="white"
    >
      <Flex
        direction="row"
        justify="center"
        align="center"
        flexGrow={1}
        gap={2}
      >
        {loggedUser && (
          <UserAvatar name={loggedUser.name} userId={loggedUser.id} />
        )}
        <InputGroup>
          <Input
            placeholder={t('whats_up')}
            border={0}
            px={1}
            flexGrow={1}
            onChange={e => setUserComment(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSavePost()}
            value={userComment}
            _focusVisible={{ boxShadow: 'none' }}
          />
          <InputRightElement>
            <IconButton
              variant="text"
              aria-label={t('add_post')}
              size="lg"
              icon={<MdPostAdd />}
              onClick={handleSavePost}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  );
}
