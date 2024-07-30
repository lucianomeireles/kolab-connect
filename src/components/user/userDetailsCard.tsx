'use client';

import { AppContext } from '@/context';
import { User } from '@/models';
import { getLoggedUser } from '@/services';
import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  HStack,
  Text,
  useEditableControls
} from '@chakra-ui/react';
import { useContext } from 'react';
import { MdCheck, MdClose, MdEdit } from 'react-icons/md';

type UserDetailsCardProps = {
  userId: string;
};

export default function UserDetailsCard({ userId }: UserDetailsCardProps) {
  const { users } = useContext(AppContext);
  const loggedUser = getLoggedUser();
  const user = [...users, loggedUser].find(
    user => user.id.toString() === userId
  );

  const editable = userId === loggedUser?.id.toString();

  const handleUpdateUser = (user: User) => {
    localStorage.setItem('loggedUser', JSON.stringify(user));
  };

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center">
        <Button
          {...getSubmitButtonProps()}
          variant="text"
          px={0}
          w="fit-content"
        >
          <MdCheck />
        </Button>
        <Button
          {...getCancelButtonProps()}
          variant="text"
          px={0}
          w="fit-content"
        >
          <MdClose />
        </Button>
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <Button {...getEditButtonProps()} variant="text" px={0}>
          <MdEdit />
        </Button>
      </Flex>
    );
  }

  return (
    <Box
      w="full"
      backgroundColor="#1A202B"
      py={6}
      position="sticky"
      top="60px"
      zIndex={2}
    >
      <Box maxW="680px" px={4} marginX="auto">
        <HStack alignItems="center" gap={4}>
          <Avatar size={{ base: 'md', md: 'lg' }} name={user?.name} />
          <Flex
            w="full"
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ base: 'flex-start', md: 'center' }}
            gap={4}
          >
            <Flex
              gap={0}
              flexDirection="column"
              w="full"
              alignItems="flex-start"
              flexGrow={1}
            >
              <Editable
                defaultValue={user?.name}
                fontSize="xl"
                fontWeight="bold"
                color="white"
                isDisabled={!editable}
                onSubmit={(value: string) => {
                  if (value !== loggedUser.name)
                    handleUpdateUser({ ...loggedUser, name: value });
                }}
                w="full"
                flexGrow={1}
              >
                <Flex h="36px" flexDirection="row" alignItems="center" w="full">
                  <EditablePreview flexGrow={1} />
                  <EditableInput flexGrow={1} />
                  {editable && <EditableControls />}
                </Flex>
              </Editable>
              <Editable
                defaultValue={user?.email}
                fontSize="sm"
                color="gray.400"
                lineHeight="10px"
                isDisabled={!editable}
                onSubmit={(value: string) => {
                  if (value !== loggedUser.email)
                    handleUpdateUser({ ...loggedUser, email: value });
                }}
                w="full"
                flexGrow={1}
              >
                <Flex h="22px" flexDirection="row" alignItems="center" w="full">
                  <EditablePreview flexGrow={1} />
                  <EditableInput flexGrow={1} />
                  {editable && <EditableControls />}
                </Flex>
              </Editable>
            </Flex>
            <Box>
              <Badge colorScheme="kbLightYellow" px={4} py={1}>
                <Editable
                  defaultValue={user?.username}
                  color="gray.800"
                  isDisabled={!editable}
                  onSubmit={(value: string) => {
                    if (value !== loggedUser.username)
                      handleUpdateUser({ ...loggedUser, username: value });
                  }}
                  w="full"
                >
                  <Flex
                    h="22px"
                    flexDirection="row"
                    alignItems="center"
                    w="full"
                  >
                    <Text>
                      @<EditablePreview flexGrow={1} />
                    </Text>
                    <EditableInput flexGrow={1} />
                    {editable && <EditableControls />}
                  </Flex>
                </Editable>
              </Badge>
            </Box>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
}
