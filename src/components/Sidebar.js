import React, { useRef } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAlignJustify, faFilter, faMapMarkerAlt, faBox, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Color from "../common/Color";
import styled from 'styled-components';
import { Box, Button, Flex, Stack, Text, Drawer, DrawerBody, DrawerFooter, DrawerOverlay, 
    DrawerContent, DrawerCloseButton, useDisclosure, FormControl, FormLabel, 
    FormErrorMessage, Input, InputGroup, InputRightElement, Select } from "@chakra-ui/react";

import Stars from "../components/Stars";

const ButtonContainer = styled.div`
    :hover {
        cursor: pointer;
    }
`

const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef();

    return (
        <Box>
            <ButtonContainer onClick = {onOpen}>
                <FontAwesomeIcon icon={faAlignJustify} size="2x" color={Color.green1}></FontAwesomeIcon>
            </ButtonContainer>
            <Drawer
                isOpen = {isOpen}
                placement = "left"
                onClose = {onClose}
                finalFocusRef = {initialRef}
            >
                <DrawerOverlay>
                    <DrawerContent bgColor = "#3AAFA9" color = "#17252A">
                        <DrawerCloseButton />

                        <DrawerBody pl = "30px" pt = "30px">
                            <FormControl>
                                <FormLabel fontSize = "18px">Search by profile</FormLabel>
                                <InputGroup>
                                    <Input rounded = "20px" placeholder = "Trafalgar D Law" />
                                    <InputRightElement children = {<SearchIcon />} />
                                </InputGroup>

                                <Flex mt = "20px" justifyContent = "space-between" align = "center">
                                    <FormLabel fontSize = "18px">Filter Options</FormLabel>
                                    <FontAwesomeIcon icon = {faFilter} />
                                </Flex>

                                <Flex mt = "10px" align = "center">
                                    <FontAwesomeIcon icon = {faMapMarkerAlt} />
                                    <Text ml = "25px">Venue</Text>
                                </Flex>

                                <FormLabel>From:</FormLabel>
                                <Select rounded = "20px" placeholder = "Mary Geoise">
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </Select>

                                <FormLabel mt = "12px">To:</FormLabel>
                                <Select rounded = "20px" placeholder = "Twin Cape">
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </Select>
                                
                                <Flex mt = "30px" align = "center">
                                    <FontAwesomeIcon icon = {faBox} />
                                    <Text ml = "25px">Dimension</Text>
                                </Flex>

                                <Flex mt = "20px">
                                    <Stack spacing = {3}>
                                        <Flex align = "center">
                                            <FormLabel>Width:</FormLabel>
                                            <Input rounded = "20px" ml = "5px"/>
                                            <FormLabel>cm</FormLabel>
                                        </Flex>
                                        <Flex align = "center">
                                            <FormLabel>Height:</FormLabel>
                                            <Input rounded = "20px"/>
                                            <FormLabel>cm</FormLabel>
                                        </Flex>
                                        <Flex align = "center">
                                            <FormLabel>Length:</FormLabel>
                                            <Input rounded = "20px"/>
                                            <FormLabel>cm</FormLabel>
                                        </Flex>
                                    </Stack>
                                    <Flex align = "center">
                                        <Box>
                                            <FormLabel>Weight:</FormLabel>
                                            <Flex>
                                                <Input rounded = "20px" />
                                                <FormLabel>kg</FormLabel>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </Flex>

                                <Flex mt = "20px" align = "center">
                                    <FontAwesomeIcon icon = {faDollarSign} />
                                    <Text ml = "25px">Price Range</Text>
                                </Flex>
                                <Flex align = "center">
                                    <Box>
                                        <FormLabel>Minimum:</FormLabel>
                                        <Flex align = "center">
                                            <Input rounded = "20px" />
                                            <FormLabel>HKD</FormLabel>
                                        </Flex>
                                    </Box>
                                    <Box mx = "15px" pt = "22px">
                                        <a><b>~</b></a>
                                    </Box>
                                    <Box>
                                        <FormLabel>Maximum:</FormLabel>
                                        <Flex align = "center">
                                            <Input rounded = "20px" />
                                            <FormLabel>HKD</FormLabel>
                                        </Flex>
                                    </Box>
                                </Flex>

                                <Flex mt = "15px" align = "center">
                                    <FontAwesomeIcon icon = {faDollarSign} />
                                    <Text ml = "25px">Minimum Rating:</Text>
                                </Flex>
                                <Stars />
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