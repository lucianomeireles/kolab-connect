import { createContext, ReactNode, useState } from 'react';

type LoginContext = {
  step: 'signin' | 'register';
  setStep: (step: 'signin' | 'register') => void;
  email: string | undefined;
  setEmail: (email: string | undefined) => void;
};

export const LoginContext = createContext<LoginContext>({
  step: 'signin',
  setStep: () => null,
  email: undefined,
  setEmail: () => null
});

type LoginProviderProps = {
  children: ReactNode;
};

export function LoginProvider({ children }: LoginProviderProps) {
  const [step, setStep] = useState<'signin' | 'register'>('signin');
  const [email, setEmail] = useState<string | undefined>(undefined);

  return (
    <LoginContext.Provider value={{ step, setStep, email, setEmail }}>
      {children}
    </LoginContext.Provider>
  );
}
