import { NavLink, Outlet } from "react-router-dom";
import useEmployee from "../Hooks/useEmployee";
import useHR from "../Hooks/useHR";
import useAdmin from "../Hooks/useAdmin";
import {  FaHome } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";


const Dashboard = () => {
    const [isEmployee] = useEmployee();
    const [isHR] = useHR();
    const [isAdmin] = useAdmin();
    console.log(isEmployee)
    return (
        <div className="flex">
            <div className="min-h-screen w-[18%] bg-[#2D4A8A]">
                {/* content */}








                {/* shared navLink */}
                <div className="divider text-white"></div>
                <ul className="menu text-white">

                    <li> <NavLink to={'/'}> <FaHome></FaHome>Home</NavLink>
                    </li>

                    <li> <NavLink to={'/contact'}> <BiSolidContact></BiSolidContact> Contact</NavLink>
                    </li>
                </ul>

            </div>

            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;