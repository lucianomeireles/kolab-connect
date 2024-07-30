import { Avatar } from '@chakra-ui/react';

type UserAvatarProps = {
  name: string;
  username: string;
};

export function UserAvatar({ name }: UserAvatarProps) {
  return <Avatar size="sm" name={name} />;
}
