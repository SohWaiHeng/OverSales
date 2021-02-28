import React from "react";
import NavBar from "./NavBar";
import Color from "../common/Color";
import styled from 'styled-components';
import { Box } from "@chakra-ui/react";

const Content = styled.div`
    padding: 20px 40px;
    width: 100%;
`

const Container = styled.div`
    display: flex;
` 

const SidebarContainer = styled.div`
    height: 100vh;
    width: 80px;
    background-color: ${Color.green3};
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
`

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`


const Layout = (props) => {
    return (
        <Box minH = {"100vh"} font>
            {/* navbar */}
            <Box
                w = "full"
                bgColor = {Color.white}
                >
                <NavBar />
            </Box>
            <Container>
                <SidebarContainer>
                    <IconContainer>
                        {props.sideBar}
                        {/* <FontAwesomeIcon icon={faAlignJustify} size="2x" color={Color.green1}></FontAwesomeIcon> */}
                    </IconContainer>
                </SidebarContainer>
                <Content>
                    { props.children }
                </Content>
            </Container>
            
        </Box>
    );
}

export default Layout;