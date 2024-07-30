import { UserAvatar } from '@/components/user/userAvatar';
import { PostCardProvider } from '@/context';
import { Post } from '@/models';
import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { PostCardActions } from './postCardActions';
import PostCardComments from './postCardComments';
import PostCardDescription from './postCardDescription';

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <PostCardProvider>
      <Flex
        border="0.5px"
        borderColor="gray.100"
        borderRadius="xl"
        p={4}
        gap={4}
        boxShadow="xs"
        backgroundColor="white"
        w="full"
        direction="column"
      >
        <HStack gap={3} align="center">
          <UserAvatar
            name={post.user?.name || ''}
            username={post.user?.username || ''}
          />
          <VStack gap={0} align="flex-start" flexGrow={1}>
            <Link href={`/users/${post.user?.id}`}>
              <Text as="b" fontSize="sm">
                {post.user?.name}
              </Text>
            </Link>
            <Text fontSize="xs" lineHeight="12px">
              {post.user?.address?.city}
            </Text>
          </VStack>
        </HStack>
        <PostCardDescription post={post} />
        <VStack align="flex-start" gap={3}>
          <PostCardActions postId={post.id} userId={post.userId} />
          <PostCardComments postId={post.id} />
        </VStack>
      </Flex>
    </PostCardProvider>
  );
}
