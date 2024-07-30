import { PostCardContext } from '@/context';
import { Post } from '@/models';
import { saveLocalPost } from '@/services';
import {
  IconButton,
  InputGroup,
  InputRightElement,
  Text,
  Textarea
} from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { MdSave } from 'react-icons/md';

type PostCardDescriptionProps = {
  post: Post;
};

export default function PostCardDescription({
  post
}: PostCardDescriptionProps) {
  const queryClient = useQueryClient();
  const [postDescription, setPostDescription] = useState<string>(post.body);
  const { isEditing, setIsEditing } = useContext(PostCardContext);

  const handleInputKeydown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Escape') {
      setPostDescription(post.body);
      queryClient.invalidateQueries({
        queryKey: ['posts']
      });
      setIsEditing(false);
    }
  };

  const handleOnSave = () => {
    saveLocalPost({ ...post, body: postDescription });
    setIsEditing(false);
  };

  return (
    <>
      {!isEditing && <Text>{postDescription}</Text>}
      {isEditing && (
        <InputGroup size="md">
          <Textarea
            value={postDescription}
            onChange={e => setPostDescription(e.target.value)}
            size="sm"
            onKeyDown={handleInputKeydown}
          />
          <InputRightElement>
            <IconButton
              variant="text"
              aria-label="Search"
              size="lg"
              icon={<MdSave />}
              onClick={handleOnSave}
            />
          </InputRightElement>
        </InputGroup>
      )}
    </>
  );
}
