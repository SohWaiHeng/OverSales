import React, {useRef} from "react";
import NavBar from "./NavBar";
import { Box } from "@chakra-ui/react";
import { useComponentBox } from "../../hooks/useComponentBox";

const Layout = ({children}) => {
    const navBarContainerRef = useRef(null);
    const { height } = useComponentBox(navBarContainerRef);
    const defaultHeight = 75;

    return (
        <Box minH = {"100vh"} color = "gray.900">
            {/* navbar */}
            <Box
                ref = {navBarContainerRef}
                position = "fixed"
                w = "full"
                top = {0}
                left = {0}
                bgColor = "white"
                >
                <NavBar />
            </Box>

            {/* page content */}
            <Box
                mx = "auto"
                width = {["95%", "93%", "90%", "80%", "70%"]}
                marginTop = {`${height || defaultHeight}px`}
                >
                { children }
            </Box>
        </Box>
    );
}

export default Layout;