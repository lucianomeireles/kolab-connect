import { AppContext } from '@/context';
import {
  Box,
  Divider,
  Flex,
  HStack,
  Link,
  Text,
  VStack
} from '@chakra-ui/react';
import React, { Fragment, useContext } from 'react';
import { UserAvatar } from './userAvatar';

type UserSearchResultListProps = {
  filter: string | null;
};

export function UserSearchResultList({ filter }: UserSearchResultListProps) {
  //get users form app context and filter with params
  const { users } = useContext(AppContext);

  const filteredUsers = filter
    ? users.filter(user =>
        user.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
    : [];

  if (!filter) return <></>;

  return (
    <Box maxW="680px" p={4} marginX="auto" w="full">
      <Flex
        gap={4}
        direction="column"
        backgroundColor="white"
        borderColor="gray.100"
        border="0.5px"
        boxShadow="xs"
        borderRadius="xl"
        p={4}
        py={5}
      >
        {filteredUsers?.map((user, index) => {
          return (
            <Fragment key={user.id}>
              {index > 0 && <Divider key={index} color="gray.200" />}
              <HStack gap={3} align="center">
                <Link href={`/users/${user.id}`}>
                  <UserAvatar
                    name={user.name || ''}
                    username={user.username || ''}
                  />
                </Link>
                <VStack gap={0} align="flex-start">
                  <Link href={`/users/${user.id}`}>
                    <Text as="b" fontSize="sm">
                      {user.name}
                    </Text>
                  </Link>
                  <Text fontSize="xs" lineHeight="12px">
                    {user.address?.city}
                  </Text>
                </VStack>
              </HStack>
            </Fragment>
          );
        })}
      </Flex>
    </Box>
  );
}
