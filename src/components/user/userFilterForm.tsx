import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdSearch } from 'react-icons/md';

type UserFilterFormProps = {
  backgroundColor: 'kbLightYellow.500' | 'white';
};

export function UserFilterForm({ backgroundColor }: UserFilterFormProps) {
  const router = useRouter();
  const [userComment, setUserComment] = useState('');

  const handleOnSearch = () => {
    if (!userComment) return;
    router.push(`/users/search?name=${userComment}`);
  };

  return (
    <Box px={4} w="full">
      <InputGroup size="md">
        <Input
          backgroundColor={backgroundColor}
          placeholder="Find user by name"
          flexGrow={1}
          borderRadius={6}
          onChange={e => setUserComment(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleOnSearch()}
          value={userComment}
          _focusVisible={{ boxShadow: 'none' }}
        />
        <InputRightElement>
          <IconButton
            onClick={handleOnSearch}
            variant="text"
            aria-label="Search"
            size="lg"
            icon={<MdSearch />}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
