import * as Yup from 'yup';

export const loginFormSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required')
});

export const registerFormSchema = Yup.object({
  name: Yup.string().required('Required'),
  username: Yup.string().required('Required')
});
