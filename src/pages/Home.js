import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import BigCard from "../components/BigCard";
import SellerList from "../common/Seller";

const Home = () => {
    const [filteredList, setFilteredList] = useState([]);

    useEffect(()=>{
        setFilteredList(SellerList);
    }, []);
    return (
        <Layout sideBar={<Sidebar></Sidebar>}>
            
        </Layout>
    );
}

export default Home;