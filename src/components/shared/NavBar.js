import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Stack, Flex, Text, Image, Box } from "@chakra-ui/react";

// const pages = [
//     {
//         link: "/page1",
//         text: "Buy"
//     },
//     {
//         link: "/page2",
//         text: "Contact Us"
//     }
// ]

const NavBar = () => {
    return (
        <Flex
            px = {[2, 4, 8]}
            py = {3}>
            <RouterLink to = "/">
                <Flex fontSize = "64px">
                    <Image />
                    <Text color = "#2B7A78">Over</Text>
                    <Text color = "#17252A">sales</Text>
                </Flex>
            </RouterLink>
            <Flex width = "100%" justifyContent = "space-around">
                <Stack isInline spacing = {4} fontSize = "32px">
                    {/* {
                        pages.map((props, index) => {
                            return (
                                <RouterLink to = {props.link}>
                                    {props.text}
                                </RouterLink>
                            )
                        })
                    } */}
                    <Box 
                        as = "button" 
                        __css = {{borderBottom: "5px solid red"}}>
                        Buy
                    </Box>
                    <Box>
                        Contact Us
                    </Box>
                </Stack>
                
            </Flex>
        </Flex>
    );
}

export default NavBar;