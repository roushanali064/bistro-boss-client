import { Outlet } from "react-router-dom";
import Footer from "../page/Shared/Footer/Footer";
import NavBar from "../page/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;