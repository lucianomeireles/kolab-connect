import { User } from '@/models';
import { useGetUsers } from '@/services';
import React, { createContext } from 'react';

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
      {isLoading ? 'Loading...' : null}
      {!isLoading && children}
    </AppContext.Provider>
  );
}
