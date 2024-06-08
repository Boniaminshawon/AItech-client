import { NavLink, Outlet } from "react-router-dom";
import useEmployee from "../Hooks/useEmployee";
import useHR from "../Hooks/useHR";
import useAdmin from "../Hooks/useAdmin";
import { FaHome } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import {  MdPayment } from "react-icons/md";
import { SiGooglesheets } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";


const Dashboard = () => {
    const [isEmployee] = useEmployee();
    const [isHR] = useHR();
    const [isAdmin] = useAdmin();
    console.log(isEmployee,isHR,isAdmin)
    return (
        <div className="flex">
            <div className="min-h-screen w-[17%] bg-[#2D4A8A] font-primary">
                {/* for employee */}
                {
                    isEmployee && <div>
                        <ul className="menu text-white text-xl">

                            <li> <NavLink to={'/dashboard/work-sheet'}><SiGooglesheets></SiGooglesheets> Work-sheet</NavLink>
                            </li>

                            <li> <NavLink to={'/dashboard/payment-history'}> <MdPayment></MdPayment> Payment History</NavLink>
                            </li>
                        </ul>

                    </div>
                }

                {/* for HR */}
                {
                    isHR && <div>
                        <ul className="menu text-white text-xl">

                            <li> <NavLink to={'/dashboard/employee-list'}><FaPeopleGroup></FaPeopleGroup> Employee List</NavLink>
                            </li>

                            <li> <NavLink to={'/dashboard/progress'}> <GiProgression></GiProgression> Progress</NavLink>
                            </li>
                        </ul>

                    </div>
                }

                {/* for admin */}
                {
                    isAdmin && <div>
                        <ul className="menu text-white text-xl">

                            <li> <NavLink to={'/dashboard/all-employee-list'}><FaPeopleGroup></FaPeopleGroup>All Employee </NavLink>
                            </li>

                        </ul>

                    </div>
                }








                {/* shared navLink */}
                <div className=" border-white border my-8 "></div>
                <ul className="menu text-white text-xl">

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