import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/bundle';
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
    return (
        <div className="">
            <Swiper className="mySwiper"
            
            loop={true}
            autoplay={{
                delay: 5000,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Autoplay,Navigation]}

            >
                <SwiperSlide>
                    <div style={{ backgroundImage: 'url("https://i.ibb.co/4tcy36p/slider-mainbg-002.jpg")' }} className=" bg-center bg-cover bg-no-repeat h-[320px] w-full md:h-[480px] lg:h-[600px] flex flex-col items-end justify-center ">
                        <div className=" md:w-1/2 w-4/5  md:mr-10 lg:mr-20 md:space-y-6 space-y-2" >
                            <p className="border-[3px] rounded border-[#2D4A8A] w-[60px]"></p>
                            <h1 className="lg:text-6xl md:text-4xl text-3xl text-[#263045] font-bold leading-[1.1]">Real-Time Monitoring  Your <span className="text-[#2D4A8A] font-extrabold">Infrstracture</span></h1>
                            <p className="text-[#3B404C] font-medium text-base md:text-xl font-primary leading-7">We are equipped with an updated technical knowledge to serve our customers  properly. Our method of application maintains the industry.</p>
                            <div className="space-x-5 pt-2 ">
                                <button className="text-white btn bg-[#2D4A8A] border border-[#2D4A8A] font-primary font-semibold md:text-2xl text-base md:px-3 md:py-2 rounded hover:bg-transparent hover:border  hover:text-[#2D4A8A] hover:border-[#2D4A8A]">Read More</button>

                             <Link to={'/contact'}>   <button className="border btn bg-transparent border-[#2D4A8A] text-[#2D4A8A] font-primary font-semibold md:text-2xl md:px-3 md:py-2 text-base  rounded hover:text-white hover:bg-[#2D4A8A]">Contact Us</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* https://i.ibb.co/TM3PZ2W/col-bgimage-1.jpg */}
                {/* https://i.ibb.co/gS42Jdf/slider-mainbg-001.jpg */}
                <SwiperSlide>
                    <div style={{ backgroundImage: 'url("https://i.ibb.co/gS42Jdf/slider-mainbg-001.jpg")' }} className=" bg-center bg-cover bg-no-repeat h-[320px] w-full md:h-[480px] lg:h-[600px] flex flex-col items-start justify-center ">
                        <div className=" md:w-1/2  mx-5 md:ml-10 lg:ml-20 md:space-y-6 space-y-2" >
                            <p className="border-[3px] rounded border-[#2D4A8A] w-[60px]"></p>
                            <h1 className="lg:text-6xl md:text-4xl text-3xl text-[#263045] font-bold leading-[1.1]">Best <span className="text-[#2D4A8A] font-extrabold"> Platform</span> to Grow Your Bussiness </h1>
                            <p className="text-[#3B404C] font-medium md:text-xl text-base font-primary leading-7">We are equipped with an updated technical knowledge to serve our customers  properly. Our method of application maintains the industry.</p>
                            <div className="space-x-5 pt-2 ">
                                <button className="text-white btn bg-[#2D4A8A] border border-[#2D4A8A] font-primary font-semibold md:text-2xl md:px-3 md:py-2 text-base rounded hover:bg-transparent hover:border  hover:text-[#2D4A8A] hover:border-[#2D4A8A]">Read More</button>
                             <Link to={'/contact'}>   <button className="border btn bg-transparent border-[#2D4A8A] text-[#2D4A8A] font-primary font-semibold md:text-2xl md:px-3 md:py-2 text-base rounded hover:text-white hover:bg-[#2D4A8A]">Contact Us</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            

            </Swiper>
        </div>
    );
};

export default Banner;