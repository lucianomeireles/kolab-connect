'use client';

import { Header, UserSearchResultList } from '@/components';
import { UserFilterForm } from '@/components/user/userFilterForm';
import { AppProvider } from '@/context';
import { Box, Flex, VStack } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function UserSearchContent() {
  const searchParams = useSearchParams();
  const search = searchParams.get('name');

  return (
    <AppProvider>
      <Flex w="full" minH="100dvh" gap={0} flexDirection="column">
        <Header />
        <VStack
          w="full"
          gap={1}
          pt={2}
          maxW="680px"
          marginX="auto"
          flexGrow={1}
        >
          <Box w="full" display={{ base: 'block', md: 'none' }} mt={2}>
            <UserFilterForm backgroundColor="white" />
          </Box>
          <UserSearchResultList filter={search} />
        </VStack>
      </Flex>
    </AppProvider>
  );
}

export default function UserSearchResult() {
  return (
    <Suspense>
      <UserSearchContent />
    </Suspense>
  );
}
