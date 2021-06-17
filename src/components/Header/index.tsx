import { Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";


export function Header() {

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Logo/>

            { isDesktop && <SearchBox />}

            <Flex align="center" ml="auto">   
                <NotificationsNav/>
                <Profile showProfileData={isDesktop}/>
            </Flex>

        </Flex>

    )
}