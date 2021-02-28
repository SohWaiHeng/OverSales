import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import BigCard from "../components/BigCard";
import SellerList from "../common/Seller";
import SmallCard from "../components/SmallCard";

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
            <SmallCard />
        </Layout>
    );
}

export default Home;