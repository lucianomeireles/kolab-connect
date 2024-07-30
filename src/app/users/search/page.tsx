'use client';

import { Header, UserSearchResultList } from '@/components';
import { UserFilterForm } from '@/components/user/userFilterForm';
import { AppProvider } from '@/context';
import { Box, VStack } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';

export default function UserSearchResult() {
  const searchParams = useSearchParams();

  const search = searchParams.get('name');

  return (
    <AppProvider>
      <VStack w="full" minH="100vh" gap={0}>
        <Header />
        <VStack w="full" gap={1} pt={4} maxW="680px">
          <Box w="full" display={{ base: 'block', md: 'none' }}>
            <UserFilterForm backgroundColor="white" />
          </Box>
          <UserSearchResultList filter={search} />
        </VStack>
      </VStack>
    </AppProvider>
  );
}
