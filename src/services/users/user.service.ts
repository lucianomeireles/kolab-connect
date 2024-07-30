import type { LoginForm, RegisterForm, User } from '@/models';
import { useMutation, useQuery } from '@tanstack/react-query';
import { apiClient } from '../apiClient';

// Get the logged user from localStorage
export const getLoggedUser = (): User | undefined => {
  if (typeof window !== 'undefined') {
    const loggedUser = localStorage.getItem('loggedUser');
    if (loggedUser) {
      return JSON.parse(loggedUser);
    }
    window.location.href = '/login';
  }
  return {} as User;
};

// Fetch users from the API and include the logged user
const getUsers = async (): Promise<User[]> => {
  const { data } = await apiClient.get<User[]>('/users');
  if (!data) return [];

  const apiUsers = data.map(user => ({
    ...user,
    username: user.username.toLowerCase()
  }));

  const loggedUser = getLoggedUser();
  const result = loggedUser ? [loggedUser, ...apiUsers] : apiUsers;
  return result.sort((a, b) => a.name.localeCompare(b.name));
};

// React Query hook for fetching users
export const useGetUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: getUsers
  });
};

// Validate user by email
export const validateUser = async (
  params: LoginForm
): Promise<User | undefined> => {
  const { data } = await apiClient.get<User[]>(`/users?email=${params.email}`);
  return data.length > 0 ? data[0] : undefined;
};

// Register a new user and save to localStorage
const registerUser = async (params: RegisterForm): Promise<User> => {
  const userParams: User = {
    id: Math.floor(Math.random() * 99999999) + 1000, // Generate a random ID
    name: params.name,
    username: params.username.toLowerCase(),
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
      catchPhrase:
        "Recruitment & Selection, onboarding and training more interactive and connected to your company's culture.",
      bs: 'hr'
    }
  };

  localStorage.setItem('loggedUser', JSON.stringify(userParams));
  return userParams;
};

// React Query hook for registering a user
export const useRegisterUser = () => {
  return useMutation<User, Error, RegisterForm>({
    mutationKey: ['registerUser'],
    mutationFn: registerUser
  });
};
