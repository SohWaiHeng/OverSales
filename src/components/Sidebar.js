import React, { useRef, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify, faFilter, faMapMarkerAlt, faBox, faDollarSign, faTimes } from "@fortawesome/free-solid-svg-icons";
import Color from "../common/Color";
import styled from 'styled-components';
import { Box, Button, Flex, Stack, Text, Drawer, DrawerBody, DrawerOverlay, 
    DrawerContent, useDisclosure, FormControl, FormLabel, 
    FormErrorMessage, Input, InputGroup, InputRightElement, Select } from "@chakra-ui/react";

import Stars from "../components/Stars";

const ButtonContainer = styled.div`
    :hover {
        cursor: pointer;
    }
`

const InputHolder = styled(Input)`
    background-color: #FEFFFF;
    border-radius: 20px;
    color: #3AAFA9;
`

const Label = styled(FormLabel)`
    font-weight: 700;
`

const Measurement = ({text}) => {
    return (
        <Label ml = "5px">{text}</Label>
    )
}

const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [starNumber, changeStarNumber] = useState(0);
    const initialRef = useRef();
    const starChanged = (n)=>{
        changeStarNumber(n);
    }

    return (
        <Box>
            <ButtonContainer onClick = {onOpen}>
                <FontAwesomeIcon icon={faAlignJustify} size="2x" color={Color.green1}></FontAwesomeIcon>
            </ButtonContainer>
            <Drawer
                size = "sm"
                isOpen = {isOpen}
                placement = "left"
                onClose = {onClose}
                finalFocusRef = {initialRef}
            >
                <DrawerOverlay>
                    <DrawerContent bgColor = "#3AAFA9" color = "#17252A">
                        <Button variant = "unstyled" position = "absolute" right = "30px" top = "20px" onClick = { onClose }>
                            <FontAwesomeIcon size = "2x" color = "#FEFFFF" icon = { faTimes } />
                        </Button>

                        <DrawerBody px = "50px" pt = "40px">
                            <FormControl>
                                <Label fontSize = "20px">Search by profile</Label>
                                <InputGroup color = "#3AAFA9">
                                    <InputHolder />
                                    <InputRightElement children = {<SearchIcon />} />
                                </InputGroup>

                                <Flex mt = "20px" justifyContent = "space-between" align = "center">
                                    <Label fontSize = "20px">Filter Options</Label>
                                    <FontAwesomeIcon size = "lg" icon = {faFilter} />
                                </Flex>

                                <Flex mt = "10px" align = "center">
                                    <FontAwesomeIcon size = "lg" icon = {faMapMarkerAlt} />
                                    <Text ml = "25px">Venue</Text>
                                </Flex>

                                <Label mt = "5px">From:</Label>
                                <Select color = "#3AAFA9" bgColor = "#FEFFFF" rounded = "20px" placeholder = "Select your origin">
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </Select>

                                <Label mt = "12px">To:</Label>
                                <Select color = "#3AAFA9" bgColor = "#FEFFFF" rounded = "20px" placeholder = "Select your destination">
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </Select>
                                
                                <Flex mt = "30px" align = "center">
                                    <FontAwesomeIcon size = "lg" icon = {faBox} />
                                    <Text ml = "25px">Dimension</Text>
                                </Flex>

                                <Flex mt = "20px">
                                    <Stack spacing = {3}>
                                        <Flex align = "center">
                                            <Label mr = "7px">Width:</Label>
                                            <InputHolder width = "50%" ml = "5px" />
                                            <Measurement text = "cm"/>
                                        </Flex>
                                        <Flex align = "center">
                                            <Label mr = "7px">Height:</Label>
                                            <InputHolder width = "50%"/>
                                            <Measurement text = "cm"/>
                                        </Flex>
                                        <Flex align = "center">
                                            <Label mr = "7px">Length:</Label>
                                            <InputHolder width = "50%"/>
                                            <Measurement text = "cm"/>
                                        </Flex>
                                    </Stack>
                                    <Flex pl = "20px" align = "center">
                                        <Box>
                                            <Label>Weight:</Label>
                                            <Flex align = "center">
                                                <InputHolder width = "65%" />
                                                <Measurement text = "kg"/>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                </Flex>

                                <Flex mt = "20px" align = "center">
                                    <FontAwesomeIcon size = "lg" icon = {faDollarSign} />
                                    <Text ml = "25px">Price Range</Text>
                                </Flex>
                                <Flex mt = "8px" align = "center">
                                    <Box>
                                        <Label>Minimum:</Label>
                                        <Flex align = "center">
                                            <InputHolder />
                                            <Measurement text = "HKD"/>
                                        </Flex>
                                    </Box>
                                    <Box mx = "15px" pt = "32px">
                                        <Label>~</Label>
                                    </Box>
                                    <Box>
                                        <Label>Maximum:</Label>
                                        <Flex align = "center">
                                            <InputHolder />
                                            <Measurement text = "HKD"/>
                                        </Flex>
                                    </Box>
                                </Flex>

                                <Box mt = "20px">
                                    <FormLabel>Minimum Rating:</FormLabel>
                                    <Stars number={starNumber} onChange={starChanged} interactable/>
                                </Box>
                                
                            </FormControl>

                            <Stack isInline spacing = "20px" mt = "100px" mb = "50px">
                                <Button pb = "2px" rounded = "20px" size = "lg">Apply</Button>
                                <Button pb = "2px" rounded = "20px" size = "lg" bgColor = "#FF616A" color = "#FEFFFF">Reset</Button>
                            </Stack>
                        </DrawerBody>
                     </DrawerContent>
                 </DrawerOverlay>
             </Drawer>
         </Box>
    )
}

export default Sidebar;