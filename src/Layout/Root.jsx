import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Root = () => {
    return (
        <div>
            <ScrollRestoration />
            <div  className="lg:h-[0px] h-[64px] md:h-[0px]">
               
                <Navbar></Navbar>
            </div>

            <div className="lg:container md:mx-1  lg:mx-auto " >
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;