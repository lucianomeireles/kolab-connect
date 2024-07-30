'use client';

import { getLoggedUser } from '@/services';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { MdSearch } from 'react-icons/md';
import { UserFilterForm } from '../user/userFilterForm';
import LanguageSelection from './languageSelection';

export function Header() {
  const { t } = useTranslation();
  const router = useRouter();

  const loggedUser = getLoggedUser();

  const handleSignOut = () => {
    localStorage.removeItem('loggedUser');
    router.push('/login');
  };

  return (
    <Box
      position="sticky"
      w="full"
      top={0}
      backgroundColor="#FFC520"
      zIndex={10}
      h="60px"
    >
      <Flex
        py={2}
        margin="0 auto"
        px={4}
        boxShadow={'0 0 10px rgba(0, 0, 0, 0.1)'}
        justify="space-between"
        align="center"
        direction="row"
      >
        <Box flex="33%">
          <Link href="/">
            <Image src="/logo.svg" h={'25px'} alt="Kolab Connect" />
          </Link>
        </Box>
        <Box display={{ base: 'none', md: 'block' }} flex="100%" maxW="680px">
          <UserFilterForm backgroundColor="kbLightYellow.500" />
        </Box>
        <HStack flex="33%" justify="flex-end" gap={3}>
          <Text fontSize="2xl" display={{ base: 'block', md: 'none' }}>
            <Link href={`/users/search`}>
              <MdSearch />
            </Link>
          </Text>
          <LanguageSelection />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label={t('options')}
              variant="text"
              border="none"
              fontSize="2xl"
            >
              <Avatar name={loggedUser.name} size="sm" />
            </MenuButton>
            <MenuList zIndex={30}>
              <Link href={`/users/${loggedUser.id}`}>
                <MenuItem>
                  <Text>{t('profile')}</Text>
                </MenuItem>
              </Link>
              <MenuItem onClick={handleSignOut}>
                <Text>{t('sign_out')}</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
}
