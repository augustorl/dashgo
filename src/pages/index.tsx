import { Flex,Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../components/Form/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';



type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('O E-mail é obrigatório.').email('O E-mail deve ser válido'),
  password: yup.string().required('A senha Obrigatória.'),
});

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = (inputData) => {

  }
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" {... register("email")} error={errors.email}  />
          <Input name="password" type="password" error={errors.password} label="Senha"{... register("password")}/>
        </Stack>
        <Button isLoading={formState.isSubmitting} size="lg" type="submit" colorScheme="pink" mt="6">Entrar</Button>
      </Flex>
    </Flex>
  )
}
