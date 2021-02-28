import React, { useRef } from "react";
import { Box, Button, Text, Drawer, DrawerBody, DrawerFooter, DrawerOverlay, 
    DrawerContent, DrawerCloseButton, useDisclosure, FormControl, FormLabel, 
    FormErrorMessage, Input, InputRightElement } from "@chakra-ui/react";


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
                            {/* <FormControl>
                                <FormLabel>Search by profile</FormLabel>
                                <Input>
                                    <InputRightElement>
                                        
                                    </InputRightElement>
                                </Input>
                            </FormControl> */}
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