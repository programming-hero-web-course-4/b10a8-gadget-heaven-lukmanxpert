import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Nav></Nav>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;