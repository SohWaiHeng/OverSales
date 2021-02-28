import React from "react";
import NavBar from "./NavBar";
import Color from "../common/Color";
import styled from 'styled-components';
import { Box } from "@chakra-ui/react";

const Content = styled.div`
    padding: 20px 40px;
    width: 100%;
    height: 100%;
`

const Container = styled.div`
    display: flex;
    align-items: stretch;
` 

const SidebarContainer = styled.div`
    width: 80px;
    background-color: ${Color.green3};
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
        <div style={{height: "100%"}}>
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
        </div>
    );
}

export default Layout;