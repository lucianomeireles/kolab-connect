'use client';

import { Feed, Header } from '@/components';
import UserDetailsCard from '@/components/user/userDetailsCard';
import { AppProvider } from '@/context';
import { VStack } from '@chakra-ui/react';

export default function UserDetails({
  params
}: {
  params: { userId: string };
}) {
  const { userId } = params;

  return (
    <AppProvider>
      <VStack w="full" minH="100dvh" gap={0}>
        <Header />
        <UserDetailsCard userId={userId} />
        <Feed userId={userId} />
      </VStack>
    </AppProvider>
  );
}
