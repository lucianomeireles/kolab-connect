'use client';

import { Register, Signin } from '@/components';
import LanguageSelection from '@/components/layout/languageSelection';
import { LoginContext, LoginProvider } from '@/context';
import { Box } from '@chakra-ui/react';
import { useContext, useMemo } from 'react';

function LoginPanel() {
  const { step } = useContext(LoginContext);

  const signinComponent = useMemo(() => <Signin />, []);
  const registerComponent = useMemo(() => <Register />, []);

  if (step === 'signin') return signinComponent;
  else if (step === 'register') return registerComponent;
  return null;
}

export default function Login() {
  return (
    <LoginProvider>
      <LoginPanel />
      <Box position="fixed" bottom={8} right={8}>
        <LanguageSelection />
      </Box>
    </LoginProvider>
  );
}
