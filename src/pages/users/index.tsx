

import { Box, Button, Text, Flex, Heading, Table, Th, Thead, Tr, Checkbox, Icon, Tbody, Td } from '@chakra-ui/react';
import React from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import Pagination from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';


export default function UserList() {

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p="8"
                >
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Button  as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                            Criar novo
                        </Button>

                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Criado em</Th>
                                <Th w="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Augusto Leite</Text>
                                        <Text color="gray.300" fontSize="sm" >augusto@mailcom</Text>
                                    </Box>
                                </Td>
                                <Td>04 de Abril, 2020</Td>
                                <Td textAlign="right">
                                    <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="purple"
                                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        Criar novo
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}