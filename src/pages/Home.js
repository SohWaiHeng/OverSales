import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import BigCard from "../components/BigCard";

const Home = () => {
    return (
        <Layout sideBar={<Sidebar></Sidebar>}>
            <BigCard></BigCard>
        </Layout>
    );
}

export default Home;