
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import { RiBallPenFill } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Blog = () => {
   
    const axiosPublic = useAxiosPublic();
    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {

            const res = await axiosPublic.get('/blogs');
            return res.data;

        }
    })

    return (
        <div className="bg-[#f7f9fe bg-white font-primary md:py-9 lg:py-16 pt-6 pb-4">
            <p className="text-[#2d4a8a] font-medium text-center md:text-xl text-lg md:mb-1">Our Blog</p>
            <p className="text-center md:text-4xl text-[26px] font-bold  text-[#263045]">Check Out Our <span className=" text-[#2d4a8a] font-secondary"><i>Latest News </i></span></p>
            <p className="text-center md:px-24 px-3 text-[#6e6e6e] md:text-xl text-base md:mt-5 mt-3">Welcome to our blog section, where we share the latest insights and trends in software development. From cutting-edge technologies to best practices, our expert articles are designed to help you stay ahead in the ever-evolving tech landscape.</p>

            <div className="md:mt-10 mt-6">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}

                    loop={true}
                    autoplay={{
                        delay: 6000,
                    }}
                    modules={[Autoplay, FreeMode]}
                    className="mySwiper bg-white"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 35,
                        },
                    }}
                >
                    <SwiperSlide className="shadow-2xl bg-white">
                        <Link to={`/blog/${blogs[0]?._id}`} className="bg-white">
                            <img className="md:h-[260px] h-[190px] w-full rounded-t" src={blogs[0]?.img} alt="" />
                            <div className="md:p-4 p-[14px]  bg-white">
                                <h2 className="md:text-2xl text-xl font-primary font-bold">{blogs[0]?.blog_title}</h2>
                                <div className="flex justify-between mt-2 mb-1 font-medium text-[#3e4960]">
                                    <p className="flex items-center gap-2 md:text-lg text-base"><RiBallPenFill></RiBallPenFill>{blogs[0]?.writer}</p>
                                    <p className="flex items-center gap-2 md:text-lg text-base"> <MdDateRange></MdDateRange>{blogs[0]?.date}</p>
                                </div>
                                <p className="text-[#6e6e6e] ">{blogs[0]?.blog_description.slice(0, 110)} <span className="md:text-xl text-lg font-medium text-[#2d4a8a]">...Read More</span> </p>
                            </div>
                        </Link>
                    </SwiperSlide>
                    

                    <SwiperSlide className="shadow-2xl bg-white">
                        <Link to={`/blog/${blogs[1]?._id}`} className="bg-white">
                            <img className="md:h-[260px] h-[190px] w-full rounded-t" src={blogs[1]?.img} alt="" />
                            <div className="md:p-4 p-[14px]  bg-white">
                                <h2 className="md:text-2xl text-xl font-primary font-bold">{blogs[1]?.blog_title}</h2>
                                <div className="flex justify-between mt-2 mb-1 font-medium text-[#3e4960]">
                                    <p className="flex items-center gap-2 md:text-lg text-base"><RiBallPenFill></RiBallPenFill>{blogs[1]?.writer}</p>
                                    <p className="flex items-center gap-2 md:text-lg text-base"> <MdDateRange></MdDateRange>{blogs[1]?.date}</p>
                                </div>
                                <p className="text-[#6e6e6e] ">{blogs[1]?.blog_description.slice(0, 120)} <span className="md:text-xl text-lg font-medium text-[#2d4a8a]">...Read More</span> </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="shadow-2xl bg-white">
                        <Link to={`/blog/${blogs[2]?._id}`} className="bg-white">
                            <img className="md:h-[260px] h-[190px] w-full rounded-t" src={blogs[2]?.img} alt="" />
                            <div className="md:p-4 p-[14px]  bg-white">
                                <h2 className="md:text-2xl text-xl font-primary font-bold">{blogs[2]?.blog_title}</h2>
                                <div className="flex justify-between mt-2 mb-1 font-medium text-[#3e4960]">
                                    <p className="flex items-center gap-2 md:text-lg text-base"><RiBallPenFill></RiBallPenFill>{blogs[2]?.writer}</p>
                                    <p className="flex items-center gap-2 md:text-lg text-base"> <MdDateRange></MdDateRange>{blogs[2]?.date}</p>
                                </div>
                                <p className="text-[#6e6e6e] ">{blogs[2]?.blog_description.slice(0, 120)} <span className="md:text-xl text-lg font-medium text-[#2d4a8a]">...Read More</span> </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="shadow-2xl bg-white">
                        <Link to={`/blog/${blogs[3]?._id}`} className="bg-white">
                            <img className="md:h-[260px] h-[190px] w-full rounded-t" src={blogs[3]?.img} alt="" />
                            <div className="md:p-4 p-[14px]  bg-white">
                                <h2 className="md:text-2xl text-xl font-primary font-bold">{blogs[3]?.blog_title}</h2>
                                <div className="flex justify-between mt-2 mb-1 font-medium text-[#3e4960]">
                                    <p className="flex items-center gap-2 md:text-lg text-base"><RiBallPenFill></RiBallPenFill>{blogs[3]?.writer}</p>
                                    <p className="flex items-center gap-2 md:text-lg text-base"> <MdDateRange></MdDateRange>{blogs[3]?.date}</p>
                                </div>
                                <p className="text-[#6e6e6e] ">{blogs[3]?.blog_description.slice(0, 120)} <span className="md:text-xl text-lg font-medium text-[#2d4a8a]">...Read More</span> </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="shadow-2xl bg-white">
                        <Link to={`/blog/${blogs[4]?._id}`} className="bg-white">
                            <img className="md:h-[260px] h-[190px] w-full rounded-t" src={blogs[4]?.img} alt="" />
                            <div className="md:p-4 p-[14px]  bg-white">
                                <h2 className="md:text-2xl text-xl font-primary font-bold">{blogs[4]?.blog_title}</h2>
                                <div className="flex justify-between mt-2 mb-1 font-medium text-[#3e4960]">
                                    <p className="flex items-center gap-2 md:text-lg text-base"><RiBallPenFill></RiBallPenFill>{blogs[4]?.writer}</p>
                                    <p className="flex items-center gap-2 md:text-lg text-base"> <MdDateRange></MdDateRange>{blogs[4]?.date}</p>
                                </div>
                                <p className="text-[#6e6e6e] ">{blogs[4]?.blog_description.slice(0, 120)} <span className="md:text-xl text-lg font-medium text-[#2d4a8a]">...Read More</span> </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="shadow-2xl bg-white">
                        <Link to={`/blog/${blogs[5]?._id}`} className="bg-white">
                            <img className="md:h-[260px] h-[190px] w-full rounded-t" src={blogs[5]?.img} alt="" />
                            <div className="md:p-4 p-[14px]  bg-white">
                                <h2 className="md:text-2xl text-xl font-primary font-bold">{blogs[5]?.blog_title}</h2>
                                <div className="flex justify-between mt-2 mb-1 font-medium text-[#3e4960]">
                                    <p className="flex items-center gap-2 md:text-lg text-base"><RiBallPenFill></RiBallPenFill>{blogs[5]?.writer}</p>
                                    <p className="flex items-center gap-2 md:text-lg text-base"> <MdDateRange></MdDateRange>{blogs[5]?.date}</p>
                                </div>
                                <p className="text-[#6e6e6e] ">{blogs[5]?.blog_description.slice(0, 120)} <span className="md:text-xl text-lg font-medium text-[#2d4a8a]">...Read More</span> </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                </Swiper>


            </div>
        </div>
    );
};

export default Blog;