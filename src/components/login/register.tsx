import { LoginContext } from '@/context';
import { RegisterForm } from '@/models';
import { registerFormSchema } from '@/schemas';
import { useRegisterUser } from '@/services';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

export function Register() {
  const router = useRouter();
  const { t } = useTranslation();
  const { email, setStep } = useContext(LoginContext);
  const initialValues: RegisterForm = {
    email: email || '',
    name: '',
    username: ''
  };

  const { mutateAsync: registerUser } = useRegisterUser();

  const handleOnSubmit = async (values: RegisterForm, actions: any) => {
    actions.setSubmitting(true);
    const result = await registerUser({ ...values, email: email || '' });
    if (result !== undefined) {
      router.push('/');
    }
    actions.setSubmitting(false);
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
          validationSchema={registerFormSchema}
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
                <VStack gap={4}>
                  <Field name="name">
                    {({ field, form }: any) => (
                      <FormControl isInvalid={form.errors.name}>
                        <FormLabel htmlFor="name" fontSize="sm">
                          Name
                        </FormLabel>
                        <Input fontSize="sm" {...field} size="sm" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="username">
                    {({ field, form }: any) => (
                      <FormControl isInvalid={form.errors.username}>
                        <FormLabel htmlFor="username" fontSize="sm">
                          User Name
                        </FormLabel>
                        <Input fontSize="sm" {...field} size="sm" />
                        <FormErrorMessage>
                          {form.errors.username}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </VStack>
                <Button
                  isLoading={actions.isSubmitting}
                  type="submit"
                  variant="solid"
                  w="full"
                  colorScheme="kbPrimary"
                >
                  {t('register')}
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
      <Button
        variant="text"
        w="full"
        onClick={_ => {
          setStep('signin');
        }}
      >
        {t('back')}
      </Button>
    </Flex>
  );
}
