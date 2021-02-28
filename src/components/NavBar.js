import React from "react";
import Color from "../common/Color";
import styled from 'styled-components'
import { Link as RouterLink } from "react-router-dom";
import { Stack, Flex, Text, Box } from "@chakra-ui/react";
import Logo from "../asset/logo.png";

const Container = styled(Flex)`
    box-shadow: 0px 1px 5px ${Color.green4};
    height: 100px;
    padding-top: 0;
    padding-bottom: 0;
`

const LogoNameContainer = styled.div`
    font-size: 50px;
    font-weight: 800;
    padding: 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const LogoContainer = styled.div`
    width: 80px;
    padding: 10px;
`

const NavContainer = styled(Stack)`
    width: 100%;
`

const NavItem = styled(Box)`
    color: ${props=>props.selected ? Color.green4 : Color.green2};
    border-bottom: ${props=>props.selected ? "5px solid" + Color.green3 : ""};
    min-width: 150px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px;
    font-size: 1.5rem;
    font-weight: 700;
`

const NavBar = () => {
    return (
        <Container
            px = {[2, 4, 8]}
            py = {3}>
            <RouterLink to = "/">
                <LogoNameContainer>
                    <LogoContainer>
                        <img src={Logo}></img>
                    </LogoContainer>
                    <Text color = {Color.green3}>Over</Text>
                    <Text color = {Color.green4}>sales</Text>
                </LogoNameContainer>
            </RouterLink>
            <NavContainer isInline spacing = {4}>
                <NavItem selected={true}>
                    Buy
                </NavItem>
                <NavItem>
                    Contact Us
                </NavItem>
            </NavContainer>       
        </Container>
    );
}

export default NavBar;