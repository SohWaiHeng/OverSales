import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import BigCard from "../components/BigCard";
import SmallCard from "../components/SmallCard";

const Home = () => {
    return (
        <Layout sideBar={<Sidebar />}>
            <SmallCard />
        </Layout>
    );
}

export default Home;