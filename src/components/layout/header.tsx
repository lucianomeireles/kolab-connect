'use client';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Avatar,
  Text
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { UserFilterForm } from '../user/userFilterForm';
import { getLoggedUser } from '@/services';
import { MdSearch } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸'
  },
  {
    code: 'zh',
    name: 'Chinese',
    flag: '🇨🇳'
  },
  {
    code: 'es',
    name: 'Spanish',
    flag: '🇪🇸'
  },
  {
    code: 'pt',
    name: 'Portuguese',
    flag: '🇧🇷'
  }
];

export function Header() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const loggedUser = getLoggedUser();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = useMemo(() => {
    const currentLanguage = languages.find(
      language => language.code === i18n.language
    );
    return currentLanguage;
  }, [i18n.language]);

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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image src="/logo.svg" h={'25px'} alt="logo" />
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
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              variant="text"
              border="none"
              fontSize="2xl"
            >
              {currentLanguage?.flag}
            </MenuButton>
            <MenuList zIndex={30}>
              {languages.map(language => (
                <MenuItem
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                >
                  {language.flag} {language.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              variant="text"
              border="none"
              fontSize="2xl"
            >
              <Avatar name={loggedUser.name} size="sm" />
            </MenuButton>
            <MenuList zIndex={30}>
              <Link href={`/users/${loggedUser.id}`}>
                <MenuItem>
                  <Text>Profile</Text>
                </MenuItem>
              </Link>
              <MenuItem onClick={handleSignOut}>
                <Text>Sign out</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
}
