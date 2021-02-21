import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Stack, Flex } from "@chakra-ui/react";

const pages = [
    {
        link: "/page1",
        text: "Page 1"
    },
    {
        link: "/page2",
        text: "Page 2"
    }
]

const NavBar = () => {
    return (
        <Flex
            justifyContent = "space-between"
            alignItems = "center"
            px = {[2, 4, 8]}
            py = {3}>
            <RouterLink to = "/">
                Home
            </RouterLink>
            <Stack isInline spacing = {4}>
                {
                    pages.map((props, index) => {
                        return (
                            <RouterLink to = {props.link}>
                                {props.text}
                            </RouterLink>
                        )
                    })
                }
            </Stack>
        </Flex>
    );
}

export default NavBar;