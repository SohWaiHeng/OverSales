import React from "react";
import NavBar from "./NavBar";
import { Box } from "@chakra-ui/react";

const Layout = ({children}) => {
    return (
        <Box minH = {"100vh"} color = "gray.900" font>
            {/* navbar */}
            <Box
                w = "full"
                bgColor = "white"
                >
                <NavBar />
            </Box>

            {/* page content */}
            <Box
                mx = "auto"
                width = {["95%", "93%", "90%", "80%", "70%"]}
                >
                { children }
            </Box>
        </Box>
    );
}

export default Layout;