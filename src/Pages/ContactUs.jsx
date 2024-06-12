import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Helmet } from "react-helmet-async";


const ContactUs = () => {
    return (
        <div className=" md:pt-20 font-primary">
            <Helmet>
                <title>Contact Us - AItech</title>
            </Helmet>
            <div style={{ backgroundImage: 'url("https://i.ibb.co/LRrc1JJ/summary.jpg")' }} className="lg:h-[350px] md:h-[280px] h-[160px]  bg-cover bg-center bg-no-repeat flex items-center justify-center">
                <h1 className="md:text-5xl text-3xl font-bold text-[#203563]">Contact With Us</h1>
            </div>
            <div className="grid lg:grid-cols-5 ">
                {/* part 1  */}
                <div className=" md:col-span-2 bg-white md:p-12 p-4">
                    <p className="text-[#2d4a8a] font-medium  text-lg mb-1">Come Visit Us At</p>
                    <p className=" md:text-4xl text-3xl font-bold  text-[#263045]">Our Address <span className=" text-[#2d4a8a] font-secondary"><i></i></span></p>
                    <p className="border-[3px] rounded-b-lg border-[#2D4A8A] w-[60px] mt-4"></p>
                  
                   <div className="flex items-center md:gap-8 gap-6 md:my-8 my-4">
                        <div className="md:text-3xl text-2xl bg-[#2d4a8a] md:p-4 p-2 rounded-full text-white font-bold ">
                            <SlLocationPin></SlLocationPin>
                        </div>
                        <div className="">
                            <p className="md:text-2xl text-lg font-bold">Office Address</p>
                            <p className="md:text-lg text-[#6e6e6e] mt-[3px]">229 Jaker Ali Road, PA 1542</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex items-center md:gap-8 gap-6 md:my-8 my-4">
                        <div className="md:text-3xl text-2xl bg-[#2d4a8a] md:p-4 p-2 rounded-full text-white font-bold">
                            <FiPhoneCall></FiPhoneCall>
                        </div>
                        <div className="">
                            <p className="md:text-2xl text-lg font-bold">Our Phone Number</p>
                            <p className="md:text-lg text-[#6e6e6e] mt-[3px]">+880 187***8706</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex items-center md:gap-8 gap-6 md:my-8 my-4">
                        <div className="md:text-3xl text-2xl bg-[#2d4a8a] md:p-4 p-2 rounded-full text-white font-bold ">
                            <MdOutlineAttachEmail></MdOutlineAttachEmail>
                        </div>
                        <div className="">
                            <p className="md:text-2xl text-lg font-bold">Our Email</p>
                            <p className="md:text-lg text-[#6e6e6e] mt-[3px]">dummy35@gmail.com</p>
                        </div>
                    </div>


                </div>
                {/* part 2 */}
                <div className="col-span-3 bg-[#f7f9fe] md:p-12 p-4">
                    <p className="text-[#2d4a8a] font-medium  text-lg mb-1">Send Message</p>
                    <p className=" md:text-4xl text-3xl font-bold  text-[#263045]">Drop Us A Line <span className=" text-[#2d4a8a] font-secondary"><i></i></span></p>
                    <p className="border-[3px] rounded-b-lg border-[#2D4A8A] w-[60px] mt-4"></p>
                    <form>
                        <div className="flex justify-between flex-col md:flex-row gap-12 mt-6">
                            <div className="w-full space-y-2 ">
                                <label>
                                    <span className="text-xl font-medium">Your Name</span>

                                </label>
                                <br />
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                    <input type="text" className="grow" placeholder="Username" />
                                </label>
                            </div>

                            <div className="w-full space-y-2">
                                <label>
                                    <span className="text-xl font-medium">Your Email</span>

                                </label>
                                <br />
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                    <input type="text" className="grow" placeholder="Email" />
                                </label>

                            </div>
                        </div>
                        <div className="w-full space-y-2 mt-6">
                            <label >
                                <span className="text-xl font-medium">Your Massage</span>

                            </label>
                            <br />
                            <textarea placeholder="Write your massage" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                        </div>
                        <input type="submit" value="Submit" className="mt-5 text-xl font-semibold text-white rounded bg-[#2d4a8a] py-2 px-6 btn" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;