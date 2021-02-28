import React from "react";
import Color from "../common/Color";
import { Box, Image,Flex, Text, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faBox, faDollarSign, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Stars from "./Stars";
import Country from "../common/Country";

const ImgContainer = styled.div`
    height: 200px;
    & img {
        width: 100%;
        object-fit: cover;
        height: 100%;
    }
`

const SmallCard = ({name, rating, width, height, length, fromCountry, toCountry, weight, price}) => {
    
    return (
        <>
            <Box 
                height = "650px" 
                width = "450px" 
                rounded = "25px" 
                bgColor = {Color.green1}
                boxShadow = "2px 2px 5px"
                margin = "20px 0px"
                overflow = "hidden"
                >
                <ImgContainer>
                    <img src={Country[toCountry]} alt = {toCountry} />
                </ImgContainer>
                <br></br>
                <Box margin="0px 20px 0px 30px">
                    <Flex justifyContent="space-between">
                        <Flex align="center" justifyContent="space-around">
                            <FontAwesomeIcon icon={faUser} size = "lg" />
                            <Text ml="20px">Posted by</Text>
                        </Flex>
                        <Stars number = {rating}/>
                    </Flex>
                    <Flex align="center">
                        <Text ml="37px" fontSize="20px" fontWeight="800" textColor={Color.green3}>{name}</Text>
                    </Flex>
                </Box>
                <Box margin="20px 20px 0px 30px">
                    <Flex align="center" >
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                        <Text ml="20px">From</Text>
                        <Text ml="40px" fontSize="20px" fontWeight="700" textColor={Color.green3}>{fromCountry}</Text>
                    </Flex>
                    <Flex align="center" >
                        <Text ml="37px">To</Text>
                        <Text ml="60px" fontSize="20px" fontWeight="700" textColor={Color.green3}>{toCountry}</Text>
                    </Flex>
                </Box>
                <Box margin="20px 20px 0px 30px">
                    <Flex align="center" mb="10px">
                        <FontAwesomeIcon icon={faBox} size="lg" />
                        <Text ml="17px">Dimension</Text>
                    </Flex>
                    <Text ml="38px" fontSize="20px" fontWeight="700" mb="25px" textColor={Color.green3}>{width} cm X {length} cm X {height} cm</Text>
                    <Text ml="37px" mb="7px">Weight</Text>
                    <Text ml="38px" fontSize="20px" fontWeight="700" mb="18px" textColor={Color.green3}>{weight} kg</Text>
                </Box>
                <Box margin = "20px 20px 0px 30px">
                    <Flex align = "center">
                        <FontAwesomeIcon icon = {faDollarSign} size = "2x" />
                        <Text ml = "28px" fontSize = "30px" fontWeight = "800" textColor={Color.green3}>{price} HKD</Text>
                    </Flex>
                </Box>
                <Button variant = "unstyled" mt = "0px" ml = "400px">
                    <FontAwesomeIcon size = "lg" icon = { faExpandAlt } />
                </Button>
            </Box>
        </>
    )
}

export default SmallCard;