

import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Sidebar } from '../../components/Sidebar';
import { useMutation } from 'react-query';
import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';
import { useRouter } from 'next/router';



type SignUpFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

const signUpFormSchema = yup.object().shape({
    name: yup.string().required('O Nome é obrigatório'),
    email: yup.string().required('O E-mail é obrigatório.').email('O E-mail deve ser válido'),
    password: yup.string().required('A senha obrigatória.').min(6, 'Mínimo de 6 caracteres'),
    password_confirm: yup.string().oneOf([null, yup.ref('password')], 'As senhas devem ser idênticas!')
});

export default function UserCreate() {
    const router = useRouter();

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(signUpFormSchema)
    });

    const createUser = useMutation(async (user: SignUpFormData) => {
        const response = await api.post('users', {
            user: {
                ...user,
                created_at: new Date(),
            }
        })

        return response.data.user;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        }
    });

    const { errors } = formState;

    const handleSignUp: SubmitHandler<SignUpFormData> = async (signUpData) => {
        await createUser.mutateAsync(signUpData)

        router.push('/users');
    }
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box
                    as="form"
                    onSubmit={handleSubmit(handleSignUp)}
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p={["6", "8"]}
                >
                    <Heading size="lg" fontWeight="normal" >Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                                name="name"
                                label="Nome completo"
                                error={formState.errors.name}
                                {...register('name')}
                            />

                            <Input
                                name="email"
                                label="E-mail"
                                {...register("email")}
                                error={errors.email}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                                name="password"
                                type="password"
                                {...register("password")}
                                label="Senha"
                                error={errors.password}
                            />
                            <Input
                                name="password_confirm"
                                {...register("password_confirm")}
                                type="password"
                                label="Confirmar senha"
                                error={errors.password_confirm}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>

                            <Button
                                type="submit"
                                colorScheme="pink"
                                isLoading={formState.isSubmitting}
                            >
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}