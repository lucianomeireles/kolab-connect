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
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

export function Signin() {
  const router = useRouter();
  const { t } = useTranslation();
  const initialValues: LoginForm = { email: '' };
  const { setStep, setEmail } = useContext(LoginContext);

  const handleOnSubmit = async (values: LoginForm, actions: any) => {
    const result = await validateUser(values);
    if (result === undefined) {
      setEmail(values.email);
      setStep('register');
    } else {
      localStorage.setItem('loggedUser', JSON.stringify(result));
      router.push('/');
    }
    actions.setSubmitting(false);
  };

  return (
    <Flex
      minH="100vh"
      minW="100vw"
      justify="center"
      align="center"
      direction="column"
      gap={8}
      overflow="hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" height={35} alt="logo" />
      <Box w={{ base: '90%', md: '340px' }}>
        <Formik
          initialValues={initialValues}
          validationSchema={loginFormSchema}
          onSubmit={handleOnSubmit}
          validateOnChange
        >
          {({ isSubmitting }) => (
            <Form>
              <Flex
                bg="white"
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
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel htmlFor="email">{t('email')}</FormLabel>
                      <Input {...field} placeholder={t('enter_your_email')} />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  isLoading={isSubmitting}
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
