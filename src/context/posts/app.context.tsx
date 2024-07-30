import { User } from '@/models';
import { useGetUsers } from '@/services';
import { Flex } from '@chakra-ui/react';
import React, { createContext } from 'react';
import { Spinner } from '@chakra-ui/react';

type AppContext = {
  users: User[];
};

export const AppContext = createContext<AppContext>({
  users: []
});

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  const { data: users, isLoading } = useGetUsers();

  return (
    <AppContext.Provider
      value={{
        users: users || []
      }}
    >
      {isLoading ? (
        <Flex justifyContent="center" alignItems="center" minH="100vh">
          <Spinner colorScheme="kbPrimary" />
        </Flex>
      ) : null}
      {!isLoading && children}
    </AppContext.Provider>
  );
}
