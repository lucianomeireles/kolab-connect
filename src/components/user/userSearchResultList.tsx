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
import { Fragment, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { UserAvatar } from './userAvatar';

type UserSearchResultListProps = {
  filter: string | null;
};

export function UserSearchResultList({ filter }: UserSearchResultListProps) {
  const { t } = useTranslation();
  const { users } = useContext(AppContext);

  const filteredUsers = filter
    ? users.filter(user =>
        user.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
    : [];

  if (!filter) return null;
  if (!!filter && filteredUsers.length === 0) {
    return (
      <Flex justifyContent="center" alignItems="center" flexGrow={1}>
        <Text>{t('no_users_found')}</Text>
      </Flex>
    );
  }

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
        {filteredUsers.map((user, index) => (
          <Fragment key={user.id}>
            {index > 0 && <Divider color="gray.200" />}
            <HStack gap={3} align="center">
              <UserAvatar name={user.name || ''} userId={user.id} />
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
        ))}
      </Flex>
    </Box>
  );
}
