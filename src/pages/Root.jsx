import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <Card/>
        </div>
    );
};

export default Root;
