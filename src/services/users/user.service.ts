import type { LoginForm, RegisterForm, User } from '@/models';
import { useMutation, useQuery } from '@tanstack/react-query';
import { apiClient } from '../apiClient';

export const getLoggedUser = (): User => {
  if (typeof window !== 'undefined' && localStorage.getItem('loggedUser')) {
    return JSON.parse(localStorage.getItem('loggedUser') || '{}');
  }
  return {} as User;
};

const getUsers = async (): Promise<User[]> => {
  const { data } = await apiClient.get<User>(`/users/`);
  if (!data) return [];
  let apiUsers = data as unknown as User[];
  apiUsers = apiUsers.map(user => ({
    ...user,
    username: user.username.toLowerCase()
  }));

  const loggedUser = getLoggedUser();
  const result = loggedUser ? [loggedUser, ...apiUsers] : apiUsers;
  return result.sort((a, b) => a.name.localeCompare(b.name));
};

export const useGetUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: () => getUsers()
  });
};

export const validateUser = async (
  params: LoginForm
): Promise<User | undefined> => {
  const { data } = await apiClient.get<User[]>(`/users?email=${params.email}`);

  if (data.length === 0) return undefined;
  else return data[0];
};

const registerUser = async (params: RegisterForm): Promise<User> => {
  const userParams = {
    id: 11,
    name: params.name,
    username: params.username,
    email: params.email,
    address: {
      street: 'R. Tito, 479',
      suite: '1º Andar - Lapa',
      city: 'São Paulo',
      zipcode: '05051-000',
      geo: {
        lat: '-31.8129',
        lng: '62.5342'
      }
    },
    phone: '+55 11 3022-5545',
    website: 'https://kolab.com.br/',
    company: {
      name: 'Kolab',
      catchPhrase: `Recruitment & Selection, onboarding and training more interactive and connected to your company's culture.`,
      bs: 'hr'
    }
  };

  localStorage.setItem('loggedUser', JSON.stringify(userParams));
  return userParams;
};

export const useRegisterUser = () => {
  return useMutation<User, Error, RegisterForm>({
    mutationKey: ['registerUser'],
    mutationFn: params => registerUser(params)
  });
};
