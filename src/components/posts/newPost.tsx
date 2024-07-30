'use client';

import { getLoggedUser, saveLocalPost } from '@/services';
import { Button, Flex, Input } from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { MdPhotoLibrary } from 'react-icons/md';
import { UserAvatar } from '../user/userAvatar';

export function NewPost() {
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
          <UserAvatar name={loggedUser.name} username={loggedUser.username} />
        )}
        <Input
          placeholder="What's up"
          border={0}
          px={1}
          flexGrow={1}
          size="sm"
          onChange={e => setUserComment(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSavePost()}
          value={userComment}
          _focusVisible={{ boxShadow: 'none' }}
        />
      </Flex>
      <Flex>
        <Button variant="text" onClick={handleSavePost}>
          <MdPhotoLibrary />
        </Button>
      </Flex>
    </Flex>
  );
}
