import React from "react";
import Color from "../common/Color";
import styled from 'styled-components'
import { Link as RouterLink } from "react-router-dom";
import { Stack, Flex, Text, Image, Box } from "@chakra-ui/react";

const LogoNameContainer = styled(Flex)`
    font-size: 50px;
    font-weight: 800;
    padding: 0 30px;
`

const NavContainer = styled(Stack)`
    width: 100%;
`

const NavItem = styled(Box)`
`

const NavBar = () => {
    return (
        <Flex
            px={[2, 4, 8]}
            py={3}>
            <RouterLink to="/">
                <LogoNameContainer>
                    <Image />
                    <Text color={Color.green3}>Over</Text>
                    <Text color={Color.green4}>sales</Text>
                </LogoNameContainer>
            </RouterLink>
            <NavContainer isInline spacing={4}>
                <NavItem>
                    <RouterLink to="/Page1">
                        <LogoNameContainer>
                            <Image />
                            <Text color={Color.green4}>Buy</Text>
                        </LogoNameContainer>
                    </RouterLink>
                </NavItem>
                <NavItem>
                    Contact Us
                </NavItem>
            </NavContainer>
        </Flex>
    );
}

export default NavBar;