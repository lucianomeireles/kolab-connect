import { AppContext } from '@/context';
import { Post } from '@/models';
import { useGetPosts } from '@/services';
import { VStack } from '@chakra-ui/react';
import { useContext, useMemo } from 'react';
import PostCard from './postCard/postCard';

type FeedProps = {
  userId?: string;
};

export function Feed({ userId }: FeedProps) {
  const { users } = useContext(AppContext);
  const { data: posts } = useGetPosts(userId);

  const postsMapped = useMemo(() => {
    if (!users) return [];
    return posts?.map(post => {
      const user = users.find(user => user.id === post.userId);
      return { ...post, user } as Post;
    });
  }, [posts, users]);

  return (
    <VStack w="full" gap={4} maxW="680px" px={4} pt={4} pb={32}>
      {postsMapped?.map((post: Post) => <PostCard key={post.id} post={post} />)}
    </VStack>
  );
}
