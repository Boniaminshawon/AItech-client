import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Root = () => {
    return (
        <div>
            <div >
                {/* className="lg:h-[76px] h-[64px] md:h-[67px]" */}
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