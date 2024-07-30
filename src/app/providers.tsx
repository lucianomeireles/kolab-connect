'use client';

import { customChakraTheme } from '@/chakraTheme';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={customChakraTheme}>{children}</ChakraProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
}
