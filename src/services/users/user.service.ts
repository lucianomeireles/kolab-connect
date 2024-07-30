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
  if (loggedUser) return [loggedUser, ...apiUsers];
  else return apiUsers;
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
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: '-31.8129',
        lng: '62.5342'
      }
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems'
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
