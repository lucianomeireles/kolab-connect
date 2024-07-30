import { AppContext } from '@/context';
import { Post } from '@/models';
import { useGetPosts } from '@/services';
import { Flex, Spinner, Text, VStack } from '@chakra-ui/react';
import { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import PostCard from './postCard/postCard';

type FeedProps = {
  userId?: string;
};

export function Feed({ userId }: FeedProps) {
  const { t } = useTranslation();
  const { users } = useContext(AppContext);
  const { data: posts, isLoading } = useGetPosts(userId);

  const postsMapped = useMemo(() => {
    if (!users) return [];
    return posts
      ?.map(post => {
        const user = users.find(user => user.id === post.userId);
        return { ...post, user } as Post;
      })
      .reverse();
  }, [posts, users]);

  if (isLoading) {
    return (
      <Flex justifyContent="center" alignItems="center" flexGrow={1}>
        <Spinner colorScheme="kbPrimary" />
      </Flex>
    );
  }

  if (!isLoading && (!postsMapped || postsMapped.length === 0)) {
    return (
      <Flex justifyContent="center" alignItems="center" flexGrow={1}>
        <Text>{t('nothing_to_see_here_yet')}</Text>
      </Flex>
    );
  }

  return (
    <VStack w="full" gap={4} maxW="680px" px={4} pt={4} pb={32}>
      {postsMapped?.map((post: Post) => <PostCard key={post.id} post={post} />)}
    </VStack>
  );
}
