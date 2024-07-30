'use client';

import { Feed, Header, NewPost } from '@/components';
import { Box, VStack } from '@chakra-ui/react';
import { AppProvider } from '@/context';

export default function Home() {
  return (
    <AppProvider>
      <VStack w="full" minH="100vh">
        <Header />
        <Feed />
        <Box
          position="fixed"
          bottom="0"
          backgroundColor="white"
          w="full"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
          py={4}
          zIndex={20}
        >
          <Box maxW="680px" px={4} marginX="auto">
            <NewPost />
          </Box>
        </Box>
      </VStack>
    </AppProvider>
  );
}
