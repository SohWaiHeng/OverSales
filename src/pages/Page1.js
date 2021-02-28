import React from "react";
import Layout from "../components/Layout";
import Color from "../common/Color";
import styled from 'styled-components'
import { Flex, SimpleGrid, GridItem } from "@chakra-ui/react";
import { Box, Image, Badge, StarIcon } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

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
            <Flex justifyContent = "space-around">
                <Box height = "650px" width = "400px" borderRadius="lg">
                    <Image height = "200px" width = "400px" borderRadius ="lg" borderEndStartRadius ="sm" borderEndEndRadius ="sm" src={property.imageUrl} alt={property.imageAlt} />
                    <br></br>
                    <FontAwesomeIcon icon={faUser} />

                </Box>
                <Box>
                    <Image height = "200px" width = "400px" borderRadius="lg" src={property.imageUrl} alt={property.imageAlt} />
                </Box>
            </Flex>
            <Flex justifyContent = "space-around">
                <Box height = "650px" width = "400px" borderRadius="lg">
                    <Image height = "200px" width = "400px" borderRadius ="lg" src={property.imageUrl} alt={property.imageAlt} />
                </Box>
                <Box>
                    <Image height = "200px" width = "400px" borderRadius="lg" src={property.imageUrl} alt={property.imageAlt} />
                </Box>
            </Flex>
            <Flex justifyContent = "space-around">
                <Box height = "650px" width = "400px" borderRadius="lg">
                    <Image height = "200px" width = "400px" borderRadius ="lg" src={property.imageUrl} alt={property.imageAlt} />
                </Box>
                <Box>
                    <Image height = "200px" width = "400px" borderRadius="lg" src={property.imageUrl} alt={property.imageAlt} />
                </Box>
            </Flex>
        </Layout>
    )
}

export default Page1;