
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import useHR from "../Hooks/useHR";
import useEmployee from "../Hooks/useEmployee";


const Navbar = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [isHR] = useHR();
    const [isEmployee] = useEmployee();
    const handleLogOut = () => {
        logOut()
            .then().catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-[#FFFFFFCC] fixed z-10 font-primary text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'rounded border border-[#3d5ea7] text-[#2D4A8A] ' : '  '}><button className=" text-xl font-bold ">Home</button></NavLink></li>

                            <li><NavLink to={'/contact'} className={({ isActive }) => isActive ? 'rounded border border-[#3d5ea7] text-[#2D4A8A] ' : '  '}><button className=" text-xl font-bold ">Contact Us</button></NavLink></li>

                            {user ? <li className="hidden"><NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'rounded border border-[#3d5ea7] text-[#2D4A8A] ' : '  '}><button className=" text-xl font-bold ">Dashboard</button></NavLink></li>
                       :
                       <li><NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'rounded border border-[#3d5ea7] text-[#2D4A8A] ' : '  '}><button className=" text-xl font-bold ">Dashboard</button></NavLink></li>}
                        {/* admin */}

                        {user && isAdmin &&
                            <li><NavLink to={'/dashboard/all-employee-list'} className={({ isActive }) => isActive ? 'rounded border border-[#3d5ea7] text-[#2D4A8A] ' : '  '}><button className=" text-xl font-bold ">Dashboard</button></NavLink></li>
                            
                           }

                        {/* He */}
                        {user && isHR &&
                            <li><NavLink to={'/dashboard/employee-list'} className={({ isActive }) => isActive ? 'rounded border border-[#3d5ea7] text-[#2D4A8A] ' : '  '}><button className=" text-xl font-bold ">Dashboard</button></NavLink></li>
                          }

                        {/* employee */}
                        {user && isEmployee &&
                            <li><NavLink to={'/dashboard/work-sheet'} className={({ isActive }) => isActive ? 'rounded border border-[#3d5ea7] text-[#2D4A8A] ' : '  '}><button className=" text-xl font-bold ">Dashboard</button></NavLink></li>
                          }


                        </ul>
                    </div>
                    <Link to={'/'}>        <button className="btn btn-ghost"> <img className="md:w-[155px] w-[110px]" src="https://i.ibb.co/WH0HB0z/logo-1.png" alt="" /></button></Link>

                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#2D4A8A]">
                        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'rounded border border-[#3d5ea7] text-[#2D4A8A] ' : '  '}><button className=" text-xl font-bold ">Home</button></NavLink></li>

                        <li><NavLink to={'/contact'} className={({ isActive }) => isActive ? 'rounded border border-[#3d5ea7] text-[#2D4A8A] ' : '  '}><button className=" text-xl font-bold ">Contact Us</button></NavLink></li>

                       {user ? <li className="hidden"><NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'rounded border border-[#3d5ea7] text-[#2D4A8A] ' : '  '}><button className=" text-xl font-bold ">Dashboard</button></NavLink></li>
                       :
                       <li><NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'rounded border border-[#3d5ea7] text-[#2D4A8A] ' : '  '}><button className=" text-xl font-bold ">Dashboard</button></NavLink></li>}
                        {/* admin */}

                        {user && isAdmin &&
                            <li><NavLink to={'/dashboard/all-employee-list'} className={({ isActive }) => isActive ? 'rounded border border-[#3d5ea7] text-[#2D4A8A] ' : '  '}><button className=" text-xl font-bold ">Dashboard</button></NavLink></li>
                            
                           }

                        {/* He */}
                        {user && isHR &&
                            <li><NavLink to={'/dashboard/employee-list'} className={({ isActive }) => isActive ? 'rounded border border-[#3d5ea7] text-[#2D4A8A] ' : '  '}><button className=" text-xl font-bold ">Dashboard</button></NavLink></li>
                          }

                        {/* employee */}
                        {user && isEmployee &&
                            <li><NavLink to={'/dashboard/work-sheet'} className={({ isActive }) => isActive ? 'rounded border border-[#3d5ea7] text-[#2D4A8A] ' : '  '}><button className=" text-xl font-bold ">Dashboard</button></NavLink></li>
                          }



                    </ul>
                </div>



                <div className="navbar-end ">
                    {user ?

                        <div className="">

                            <div data-tip={user?.displayName || 'update hoy nai'} className="dropdown tooltip tooltip-left dropdown-bottom dropdown-hover dropdown-end text-black z-10">

                                <div tabIndex={0} role="button" className="w-12 tooltip   tooltip-info tooltip-left z-10 " >
                                    <img className="rounded-full  md:h-[44px] md:w-[44px] h-[32px] w-[32px] bg-white" alt="" src={user?.photoURL || "https://i.ibb.co/L1kVMdW/images-removebg-preview.png"} />
                                </div>


                                <ul tabIndex={0} className="dropdown-content text-sm sm:text-lg font-semibold text-[#f3a648] text-left bg-[#2D4A8A] z-[1] menu  shadow rounded w-[100px] md:w-[120px]">



                                    <li> <button onClick={handleLogOut} className="sm:py-2 py-1 px-3 sm:h-[44px] rounded   border-[#2D4A8A]   ">Log Out</button></li>
                                    <hr />
                                </ul>
                            </div>

                        </div>
                        :

                        <div className="space-x-2 flex">
                            <div>
                                <Link to={'/signIn'} className=""> <button className=" py-1 text-sm sm:py-2 px-3 sm:h-[44px] font-bold rounded  btn  xl:text-lg md:text-base bg-[#2D4A8A] hover:text-[#2D4A8A]  border-[#2D4A8A] text-white">Sign In</button></Link>
                            </div>
                            <div className="hidden md:flex">
                                <Link to={'/signUp'} className=""> <button className=" py-1 text-sm sm:py-2 px-3 sm:h-[44px] font-bold rounded  btn  xl:text-lg md:text-base bg-[#2D4A8A] hover:text-[#2D4A8A]  border-[#2D4A8A] text-white">Sign Up</button></Link>
                            </div>

                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;