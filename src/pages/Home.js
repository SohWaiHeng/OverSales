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
            <Box mt = "50px">
                {filteredList.map(() => {
                    if (i % 2 === 0 && i < filteredList.length) {
                        i += 2;
                        return (
                            <Flex justifyContent = "space-around" mb = "100px">
                                <SmallCard {...filteredList[i - 2]} />
                                <SmallCard {...filteredList[i - 1]} />
                            </Flex>
                        )
                    }
                })}
            </Box>
        )
    }

    return (
        <Layout sideBar={<Sidebar filteredList />}>
            <ArrangeComponent />
        </Layout>
    );
}

export default Home;