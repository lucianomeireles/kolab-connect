'use client';

import { Register, Signin } from '@/components';
import { LoginContext, LoginProvider } from '@/context';
import { useContext } from 'react';

function LoginPanel() {
  const { step } = useContext(LoginContext);

  if (step === 'signin') return <Signin />;
  else if (step === 'register') return <Register />;
}

export default function Login() {
  return (
    <LoginProvider>
      <LoginPanel />
    </LoginProvider>
  );
}
