import React from "react";
import Layout from "../components/Layout";
import Color from "../common/Color";
import styled from 'styled-components'
import { Flex, SimpleGrid, GridItem } from "@chakra-ui/react";
import { Box, Image, Badge, StarIcon, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faBox } from '@fortawesome/free-solid-svg-icons';
import Stars from "../components/Stars";

const property = {
    imageUrl: "https://cdn.thecrazytourist.com/wp-content/uploads/2018/08/ccimage-shutterstock_571221049.jpg",
    imageAlt: "Kuala Lumpur, Malaysia"
}

const Cart = styled(Box)`
    box-shadow: 0px 1px 5px ${Color.green4};
    height: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
    
`

const Page1 = () => {
    return (
        <Layout>
            {/* <Grid
                h="500px"
                templateColumns="repeat(4, 1fr)"
                gap={3}
                columnGap="100px"
                paddingTop="20px"
                paddingLeft="200px"
                paddingRight="50px"
            >
                <GridItem colSpan={2} imageUrl={property.imageUrl} />
                <GridItem colSpan={2} bg="papayawhip" imageUrl={property.imageUrl} />
            </Grid> */}
            {/* <SimpleGrid columns={2}>
                <Box maxW="sm" borderRadius="lg" d="flex" overflow="hidden" bgColor = "red">
                    <Image src={property.imageUrl} alt={property.imageAlt} />
                </Box>
                <Box maxW="sm" borderRadius="lg" d="flex" alignItems="center" overflow="hidden">
                    <Image src={property.imageUrl} alt={property.imageAlt} />
                </Box>
            </SimpleGrid> */}
            <Flex justifyContent="space-around">
                <Box height="650px" width="400px" borderRadius="lg">
                    <Image height="200px" width="400px" borderRadius="lg" borderEndStartRadius="sm" borderEndEndRadius="sm" src={property.imageUrl} alt={property.imageAlt} />
                    <br></br>
                    <Box margin="0px 20px 0px 20px">
                        <Flex justifyContent="space-between">
                            <Flex align="center" justifyContent="space-around">
                                <FontAwesomeIcon icon={faUser} size="lg" />
                                <Text ml="20px">Posted by</Text>
                            </Flex>
                            <Stars></Stars>
                        </Flex>
                        <Flex align="center">
                            <Text ml="37px" fontSize="20px" fontWeight="800">Jasper Tan</Text>
                        </Flex>
                    </Box>
                    <Box margin="20px 20px 0px 20px">
                        {/* <Flex align="center" justifyContent="space-around">
                            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                            <Text ml="20px">Posted by</Text>
                        </Flex> */}
                        <Flex align="center" >
                            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                            <Text ml="20px">From</Text>
                            <Text ml="40px" fontSize="20px" fontWeight="800">Japan</Text>
                        </Flex>
                        <Flex align="center" >
                            <Text ml="37px">To</Text>
                            <Text ml="60px" fontSize="20px" fontWeight="800">Hong Kong</Text>
                        </Flex>
                    </Box>
                    <Box margin="20px 20px 0px 20px">
                        <Flex align="center" mb="10px">
                            <FontAwesomeIcon icon={faBox} size="lg" />
                            <Text ml="17px">Dimension</Text>
                        </Flex>
                        <Text ml="38px" fontSize="20px" fontWeight="800" mb="25px">200 cm x 200 cm x 300 cm</Text>
                        <Text ml="37px" mb="7px">Weight</Text>
                        <Text ml="38px" fontSize="20px" fontWeight="800" mb="18px">25 kg</Text>
                    </Box>
                    <Box>
                        
                    </Box>

                </Box>
                <Box>
                    <Image height="200px" width="400px" borderRadius="lg" src={property.imageUrl} alt={property.imageAlt} />
                </Box>
            </Flex>
            <Flex justifyContent="space-around">
                <Box height="650px" width="400px" borderRadius="lg">
                    <Image height="200px" width="400px" borderRadius="lg" src={property.imageUrl} alt={property.imageAlt} />
                </Box>
                <Box>
                    <Image height="200px" width="400px" borderRadius="lg" src={property.imageUrl} alt={property.imageAlt} />
                </Box>
            </Flex>
            <Flex justifyContent="space-around">
                <Box height="650px" width="400px" borderRadius="lg">
                    <Image height="200px" width="400px" borderRadius="lg" src={property.imageUrl} alt={property.imageAlt} />
                </Box>
                <Box>
                    <Image height="200px" width="400px" borderRadius="lg" src={property.imageUrl} alt={property.imageAlt} />
                </Box>
            </Flex>
        </Layout>
    )
}

export default Page1;