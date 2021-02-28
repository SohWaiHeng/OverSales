import React from "react";
import Color from "../common/Color";
import { Box, Image,Flex, Text, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faBox, faDollarSign, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import Stars from "./Stars";

const property = {
    imageUrl: "https://cdn.thecrazytourist.com/wp-content/uploads/2018/08/ccimage-shutterstock_571221049.jpg",
    imageAlt: "Kuala Lumpur, Malaysia"
}

const SmallCard = ({name, rating, fromCountry, toCountry, dimension, weight, price}) => {
    return (
        <>
            <Box 
                height = "650px" 
                width = "420px" 
                rounded = "25px" 
                bgColor = {Color.green1}
                boxShadow = "2px 2px 5px"
                margin = "20px 0px"
                >
                <Image height="200px" width="400px" rounded = "25px" borderEndStartRadius="sm" borderEndEndRadius="sm" src={property.imageUrl} alt={property.imageAlt} />
                <br></br>
                <Box margin="0px 20px 0px 20px">
                    <Flex justifyContent="space-between">
                        <Flex align="center" justifyContent="space-around">
                            <FontAwesomeIcon icon={faUser} size="lg" />
                            <Text ml="20px">Posted by</Text>
                        </Flex>
                        <Stars {...rating}/>
                    </Flex>
                    <Flex align="center">
                        <Text ml="37px" fontSize="20px" fontWeight="800" textColor={Color.green3}>{name}</Text>
                    </Flex>
                </Box>
                <Box margin="20px 20px 0px 20px">
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
                <Box margin="20px 20px 0px 20px">
                    <Flex align="center" mb="10px">
                        <FontAwesomeIcon icon={faBox} size="lg" />
                        <Text ml="17px">Dimension</Text>
                    </Flex>
                    <Text ml="38px" fontSize="20px" fontWeight="700" mb="25px" textColor={Color.green3}>{dimension}</Text>
                    <Text ml="37px" mb="7px">Weight</Text>
                    <Text ml="38px" fontSize="20px" fontWeight="700" mb="18px" textColor={Color.green3}>{weight} kg</Text>
                </Box>
                <Box margin = "20px 20px 0px 20px">
                    <Flex align = "center">
                        <FontAwesomeIcon icon = {faDollarSign} size = "lg" />
                        <Text ml = "28px" fontSize = "20px" fontWeight = "800" textColor={Color.green3}>{price} HKD</Text>
                    </Flex>
                </Box>
                <Button variant = "unstyled" mt = "20px" ml = "350px">
                    <FontAwesomeIcon size = "lg" icon = { faExpandAlt } />
                </Button>
            </Box>
        </>
    )
}

export default SmallCard;