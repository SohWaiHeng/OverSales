import React from "react";
import NavBar from "./NavBar";
import Color from "../common/Color";
import styled from 'styled-components'
import { Box } from "@chakra-ui/react";

const Content = styled.div`
    padding: 20px 40px;
`

const Layout = ({children}) => {
    return (
        <Box minH = {"100vh"} color = "gray.900" font>
            {/* navbar */}
            <Box
                w = "full"
                bgColor = {Color.white}
                >
                <NavBar />
            </Box>

            {/* page content */}
            <Content>
                { children }
            </Content>
        </Box>
    );
}

export default Layout;