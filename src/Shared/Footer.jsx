import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { Link } from "react-router-dom";


const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        setEmail(email);
        if (email === "" || !/\S+@\S+\.\S+/.test(email)) {

            toast.error('please enter a valid email');

        } else {

            toast.success(`Thank you for subscribing with ${email}`);
            setEmail("");
        }
        e.target.reset();
    }
    return (
        <div>
            <div style={{ backgroundImage: 'url("https://i.ibb.co/D5XFg6G/row-bgimage-2.jpg")' }}
                className=" flex md:justify-between flex-col md:flex-row py-5 lg:py-16 lg:px-12 md:py-8 md:px-6 "  >
                {/* part 1 */}
                <div className="flex-1 ">
                    <h1 className="text-white lg:text-5xl md:text-4xl text-[32px]  text-center md:text-start font-extrabold">AItech</h1>
                    <p className="text-[#FFFFFFCC] md:my-4 my-1 font-primary md:text-xl md:text-start text-center text-base">We are equipped with an updated technical knowledge to serve our customers  properly. Our method of application maintains the industry.</p>
                    <div className="bg-[#222c40] flex md:mr-16 gap-10 md:p-3 p-2 justify-center items-center">
                        <p className="text-[#FFFFFF] md:text-3xl text-xl flex justify-center items-center bg-[#2D4A8A] md:w-14 md:h-14 w-10 h-10 rounded-full rounded-tr-none"><TbPhoneCall></TbPhoneCall></p>
                        <div>
                            <p className="md:text-2xl text-xl text-[#ffffffcc] font-medium">Talk To Our Support</p>
                            <p className="md:text-xl text-lg font-semibold text-white">+088 01876158706</p>
                        </div>
                    </div>
                </div>
                {/* part 2 */}
                <div className="flex  flex-1 md:justify-around justify-between mt-5 md:mt-0 md:px-3 px-4  text-[#ffffffcc] ">
                    <div className="space-y-3">
                        <h3 className="tracking-wide  uppercase font-primary md:text-2xl text-lg font-bold text-white">Our Pages</h3>
                        <ul className="space-y-1 font-primary md:text-lg text-base">
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>

                            <li>
                                <Link to={'/contact'}>Contact</Link>
                            </li>
                            <li>
                                <Link to={'/dashboard'}>dashboard</Link>
                            </li>
                        </ul>
                    </div>


                    <div className="space-y-3  md:hidden lg:flex lg:flex-col">
                        <h3 className="uppercase font-primary   md:text-2xl text-lg font-bold text-white ">Developers</h3>
                        <ul className="space-y-1 font-primary md:text-lg text-base">
                            <li>
                                <a rel="noopener noreferrer" href="#">Public API</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Documentation</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Integrations</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Guides</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* part 3 */}
                <div className="flex-1 md:space-y-3 space-y-1">
                    <h1 className="uppercase font-primary text-center md:text-start  md:text-2xl text-lg font-bold text-white mt-3 md:mt-0">News Letter</h1>
                    <p className="text-[#FFFFFFCC] text-center md:text-start font-primary md:text-lg text-base md:pr-5 px-3 md:px-0">Sign up today for hints, tips and the latest product news.</p>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <Toaster />
                            <div className="flex justify-center md:justify-start">
                                <input id="email" type="email" name="email" className="md:px-5 py-2 text-gray-700 bg-white  rounded-l border border-white md:w-auto" placeholder="Email Address" />

                                <input className=" px-3 py-2  font-medium  text-white uppercase text-[17px] bg-[#2D4A8A] rounded-r md:w-auto  " type="submit" value="Subscribe" />
                            </div>
                        </form>
                    </div>
                    <div className="flex  flex-col  items-center md:items-start ">
                        <h2 className="uppercase font-primary pt-3  md:text-2xl text-lg font-bold text-white">Follow Us On</h2>
                        <div className="text-white flex gap-5 text-3xl mt-3">
                            <p ><FaFacebook></FaFacebook>  </p>
                            <p > <FaTwitter></FaTwitter>  </p>
                            <p >   <FaLinkedin></FaLinkedin></p>
                        </div>

                    </div>
                </div>
            </div>
            <div className=" bg-[#222c40] px-12 md:py-6 py-4 md:text-xl text-base text-[#FFFFFF] text- font-primary justify-center items-center gap-2  flex flex-col-reverse md:flex-row md:justify-between ">
                <div className=" "> <p className="">Copyright © 2024 - All right reserved</p></div>
                <div className=" space-x-6 ">
                    <a className="underline" href="">Privacy policy</a>
                    <a className="underline" href="">Terms of service</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;