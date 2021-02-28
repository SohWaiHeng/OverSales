import React, { useRef } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Text, Drawer, DrawerBody, DrawerFooter, DrawerOverlay, 
    DrawerContent, DrawerCloseButton, useDisclosure, FormControl, FormLabel, 
    FormErrorMessage, Input, InputGroup, InputRightElement } from "@chakra-ui/react";


const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef();

    return (
        <Box>
            <Button onClick = {onOpen}>
                Open
            </Button>
            <Drawer
                isOpen = {isOpen}
                placement = "left"
                onClose = {onClose}
                finalFocusRef = {initialRef}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />

                        <DrawerBody pl = "45px" pt = "30px">
                            <FormControl>
                                <FormLabel>Search by profile</FormLabel>
                                <InputGroup>
                                    <Input rounded = "20px" placeholder = "Trafalgar D Law" />
                                    <InputRightElement children = {<SearchIcon />} />
                                </InputGroup>

                                <FormLabel>Filter Options</FormLabel>
                            </FormControl>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button>Apply</Button>
                            <Button>Reset</Button>
                        </DrawerFooter>

                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Box>
    )
}

export default Sidebar;