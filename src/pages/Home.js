import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import BigCard from "../components/BigCard";
import SellerList from "../common/Seller";
import SmallCard from "../components/SmallCard";

import { Flex, Box } from "@chakra-ui/react";

const Home = () => {
    const [filteredList, setFilteredList] = useState([]);

    useEffect(()=>{
        setFilteredList(SellerList);
    }, []);

    const ArrangeComponent = () => {
        let i = 0;
        return (
            <Box>
                {filteredList.map((props, index) => {
                    if (i % 2 === 0) {
                        return (
                            <Flex justifyContent = "space-around">
                                <SmallCard {...filteredList[i]} />
                                <SmallCard {...filteredList[i + 1]} />
                            </Flex>
                        )
                    }
                    else {
                        return (
                            <div></div>
                        )
                    }
                })}
            </Box>
        )

        // for (let i = 0; i < filteredList.length; i++) {
        //     if (i % 2 == 0) {
        //         return (
        //             <Flex>
        //                 <SmallCard {...filteredList[i]} />
        //             </Flex>
        //         )
        //     }
        //     else{
        //         return (
        //             <Box>
        //                 <SmallCard {...filteredList[i]} />
        //             </Box>
        //         )
        //     }
        // }
    }

    return (
        <Layout sideBar={<Sidebar filteredList />}>
            <ArrangeComponent />
        </Layout>
    );
}

export default Home;