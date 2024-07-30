import { LoginContext } from '@/context';
import { LoginForm } from '@/models';
import { loginFormSchema } from '@/schemas';
import { validateUser } from '@/services';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

export function Signin() {
  const { t } = useTranslation();
  const initialValues: LoginForm = { email: '' };
  const { setStep, setEmail } = useContext(LoginContext);

  const handleOnSubmit = async (values: LoginForm, actions: any) => {
    const result = await validateUser(values);
    if (result === undefined) {
      setEmail(values.email);
      setStep('register');
    }
  };

  return (
    <Flex
      style={{ minHeight: '100vh', minWidth: '100vw' }}
      justifyContent="center"
      alignItems="center"
      direction="column"
      gap={8}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" height={35} alt="logo" />
      <Box
        style={{
          minWidth: '340px'
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={loginFormSchema}
          onSubmit={handleOnSubmit}
          validateOnChange
        >
          {actions => (
            <Form>
              <Flex
                backgroundColor="white"
                border="0.5px"
                borderColor="gray.100"
                borderRadius="xl"
                p={4}
                boxShadow="xs"
                direction="column"
                gap={6}
              >
                <Field name="email">
                  {({ field, form }: any) => (
                    <FormControl isInvalid={form.errors.email}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input {...field} placeholder="Enter your email" />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  isLoading={actions.isSubmitting}
                  type="submit"
                  variant="solid"
                  w="full"
                  colorScheme="kbPrimary"
                >
                  {t('login')}
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
