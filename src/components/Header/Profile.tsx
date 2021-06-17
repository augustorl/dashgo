import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";



interface ProfileProps {
    showProfileData?: boolean;
}
export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Augusto</Text>
                    <Text color="gray.300" fontSize="small">augusto@mail.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Augusto Leite" />
        </Flex>
    )
}