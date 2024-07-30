import { AppContext, PostCardContext } from '@/context';
import { PostComment } from '@/models';
import { useGetPostComments } from '@/services';
import { Box, VStack } from '@chakra-ui/react';
import { useContext, useEffect, useMemo } from 'react';
import { PostCardCommentForm } from './postCardCommentForm';
import { PostCardCommentsItem } from './postCardCommentsItem';

type PostCardCommentsProps = {
  postId: number;
};

export default function PostCardComments({ postId }: PostCardCommentsProps) {
  const { users } = useContext(AppContext);
  const { isCommentsOpened, setPostComments, setIsCommentsOpened } =
    useContext(PostCardContext);
  const { data: postComments } = useGetPostComments(postId, isCommentsOpened);

  const commentsMapped = useMemo(() => {
    if (!users) return [];
    const apiComments = postComments?.map(comment => {
      const user = !comment.user
        ? users[Math.floor(Math.random() * users.length)]
        : comment.user;
      return { ...comment, user } as PostComment;
    });
    return apiComments;
  }, [postComments, users]);

  useEffect(() => {
    setPostComments(postComments);
  }, [commentsMapped]);

  const handleOnSaved = () => {
    setIsCommentsOpened(true);
  };

  return (
    <>
      {((isCommentsOpened && commentsMapped?.length) || 0) > 0 && (
        <Box w="full" maxH="300px" overflowY="auto" paddingBottom={2}>
          <VStack gap={3} w="full">
            {commentsMapped?.map((comment: PostComment) => (
              <PostCardCommentsItem key={comment.id} comment={comment} />
            ))}
          </VStack>
        </Box>
      )}
      <PostCardCommentForm postId={postId} onSaved={handleOnSaved} />
    </>
  );
}
