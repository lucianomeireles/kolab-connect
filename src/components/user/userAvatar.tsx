import { Avatar, Link } from '@chakra-ui/react';

type UserAvatarProps = {
  name: string;
  userId: number;
};

export function UserAvatar({ name, userId }: UserAvatarProps) {
  return (
    <Link href={`/users/${userId}`}>
      <Avatar size="sm" name={name} />
    </Link>
  );
}
