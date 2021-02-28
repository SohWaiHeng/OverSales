import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import BigCard from "../components/BigCard";
import SellerList from "../common/Seller";
import SmallCard from "../components/SmallCard";

import { Flex, Box } from "@chakra-ui/react";

const Home = () => {
    const [filteredList, setFilteredList] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [fromDestination, setFromDestination] = useState("");
    const [toDestination, setToDestination] = useState("");
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [length, setLength] = useState(0);
    const [weight, setWeight] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [rating, setRating] = useState(0);

    useEffect(()=>{
        setFilteredList(SellerList);
    }, []);

    useEffect(()=>{
        var newList = [...SellerList];
        if (searchName) {
            newList = newList.filter(ele => ele.name.includes(searchName));
        }
        if (fromDestination) {
            newList = newList.filter(ele => ele.fromCountry === fromDestination);
        }
        if (toDestination) {
            newList = newList.filter(ele => ele.toCountry === toDestination);
        }
        if (width) {
            newList = newList.filter(ele => ele.width === width);
        }
        if (height) {
            newList = newList.filter(ele => ele.height === height);
        }
        if (length) {
            newList = newList.filter(ele => ele.length === length);
        }
        if (weight) {
            newList = newList.filter(ele => ele.weight === weight);
        }
        if (minPrice) {
            newList = newList.filter(ele => ele.price >= minPrice);
        }
        if (maxPrice) {
            newList = newList.filter(ele => ele.price <= maxPrice);
        }
        if (rating) {
            newList = newList.filter(ele => ele.rating >= rating);
        }
        setFilteredList(newList);
    }, [searchName, fromDestination, toDestination, width, height, length, weight, minPrice, maxPrice, rating]);

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
        <Layout sideBar={<Sidebar
                            searchName={searchName}
                            setSearchName={setSearchName}
                            fromDestination={fromDestination}
                            setFromDestination={setFromDestination}
                            toDestination={toDestination}
                            setToDestination={setToDestination}
                            width={width}
                            setWidth={setWidth}
                            height={height}
                            setHeight={setHeight}
                            length={length}
                            setLength={setLength}
                            weight={weight}
                            setWeight={setWeight}
                            minPrice={minPrice}
                            setMinPrice={setMinPrice}
                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice}
                            rating={rating}
                            setRating={setRating}
        />}>
            <ArrangeComponent />
        </Layout>
    );
}

export default Home;