import { useState } from "react";
import { useEffect } from "react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import { RiBallPenFill } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";


const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            });

    }, [])

    return (
        <div className="bg-[#f7f9fe bg-white font-primary py-16">
            <p className="text-[#2d4a8a] font-medium text-center text-xl mb-1">Our Blog</p>
            <p className="text-center text-4xl font-bold  text-[#263045]">Check Out Our <span className=" text-[#2d4a8a] font-secondary"><i>Latest News </i></span></p>
            <p className="text-center px-24 text-[#6e6e6e] text-xl mt-5">Welcome to our blog section, where we share the latest insights and trends in software development. From cutting-edge technologies to best practices, our expert articles are designed to help you stay ahead in the ever-evolving tech landscape.</p>

            <div className="mt-10">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                 
                    loop={true}
                    autoplay={{
                        delay: 6000,
                    }}
                    modules={[Autoplay, FreeMode]}
                    className="mySwiper bg-white"
                >
                    <SwiperSlide className="shadow-2xl bg-white">
                        <Link to={`/blog/${blogs[0]?.writer}`} className="bg-white">
                            <img className="h-[260px] w-full rounded-t" src={blogs[0]?.img} alt="" />
                            <div className="p-4 bg-white">
                                <h2 className="text-2xl font-primary font-bold">{blogs[0]?.blog_title}</h2>
                                <div className="flex justify-between mt-2 mb-1 font-medium text-[#3e4960]">
                                    <p className="flex items-center gap-2 text-lg"><RiBallPenFill></RiBallPenFill>{blogs[0]?.writer}</p>
                                    <p className="flex items-center gap-2 text-lg"> <MdDateRange></MdDateRange>{blogs[0]?.date}</p>
                                </div>
                                <p className="text-[#6e6e6e] ">{blogs[0]?.blog_description.slice(0, 120)} <span className="text-xl font-medium text-[#2d4a8a]">...Read More</span> </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="shadow-2xl bg-white">
                        <Link to={`/blog/${blogs[1]?.writer}`} className="bg-white">
                            <img className="h-[260px] w-full rounded-t" src={blogs[1]?.img} alt="" />
                            <div className="p-4 bg-white">
                                <h2 className="text-2xl font-primary font-bold">{blogs[1]?.blog_title}</h2>
                                <div className="flex justify-between mt-2 mb-1 font-medium text-[#3e4960]">
                                    <p className="flex items-center gap-2 text-lg"><RiBallPenFill></RiBallPenFill>{blogs[1]?.writer}</p>
                                    <p className="flex items-center gap-2 text-lg"> <MdDateRange></MdDateRange>{blogs[1]?.date}</p>
                                </div>
                                <p className="text-[#6e6e6e] ">{blogs[1]?.blog_description.slice(0, 120)} <span className="text-xl font-medium text-[#2d4a8a]">...Read More</span> </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="shadow-2xl bg-white">
                        <Link to={`/blog/${blogs[2]?.writer}`} className="bg-white">
                            <img className="h-[260px] w-full rounded-t" src={blogs[2]?.img} alt="" />
                            <div className="p-4 bg-white">
                                <h2 className="text-2xl font-primary font-bold">{blogs[2]?.blog_title}</h2>
                                <div className="flex justify-between mt-2 mb-1 font-medium text-[#3e4960]">
                                    <p className="flex items-center gap-2 text-lg"><RiBallPenFill></RiBallPenFill>{blogs[2]?.writer}</p>
                                    <p className="flex items-center gap-2 text-lg"> <MdDateRange></MdDateRange>{blogs[2]?.date}</p>
                                </div>
                                <p className="text-[#6e6e6e] ">{blogs[2]?.blog_description.slice(0, 120)} <span className="text-xl font-medium text-[#2d4a8a]">...Read More</span> </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="shadow-2xl bg-white">
                        <Link to={`/blog/${blogs[3]?.writer}`} className="bg-white">
                            <img className="h-[260px] w-full rounded-t" src={blogs[3]?.img} alt="" />
                            <div className="p-4 bg-white">
                                <h2 className="text-2xl font-primary font-bold">{blogs[3]?.blog_title}</h2>
                                <div className="flex justify-between mt-2 mb-1 font-medium text-[#3e4960]">
                                    <p className="flex items-center gap-2 text-lg"><RiBallPenFill></RiBallPenFill>{blogs[3]?.writer}</p>
                                    <p className="flex items-center gap-2 text-lg"> <MdDateRange></MdDateRange>{blogs[3]?.date}</p>
                                </div>
                                <p className="text-[#6e6e6e] ">{blogs[3]?.blog_description.slice(0, 120)} <span className="text-xl font-medium text-[#2d4a8a]">...Read More</span> </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="shadow-2xl bg-white">
                        <Link to={`/blog/${blogs[4]?.writer}`} className="bg-white">
                            <img className="h-[260px] w-full rounded-t" src={blogs[4]?.img} alt="" />
                            <div className="p-4 bg-white">
                                <h2 className="text-2xl font-primary font-bold">{blogs[4]?.blog_title}</h2>
                                <div className="flex justify-between mt-2 mb-1 font-medium text-[#3e4960]">
                                    <p className="flex items-center gap-2 text-lg"><RiBallPenFill></RiBallPenFill>{blogs[4]?.writer}</p>
                                    <p className="flex items-center gap-2 text-lg"> <MdDateRange></MdDateRange>{blogs[4]?.date}</p>
                                </div>
                                <p className="text-[#6e6e6e] ">{blogs[4]?.blog_description.slice(0, 120)} <span className="text-xl font-medium text-[#2d4a8a]">...Read More</span> </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="shadow-2xl bg-white">
                        <Link to={`/blog/${blogs[5]?.writer}`} className="bg-white">
                            <img className="h-[260px] w-full rounded-t" src={blogs[5]?.img} alt="" />
                            <div className="p-4 bg-white">
                                <h2 className="text-2xl font-primary font-bold">{blogs[5]?.blog_title}</h2>
                                <div className="flex justify-between mt-2 mb-1 font-medium text-[#3e4960]">
                                    <p className="flex items-center gap-2 text-lg"><RiBallPenFill></RiBallPenFill>{blogs[5]?.writer}</p>
                                    <p className="flex items-center gap-2 text-lg"> <MdDateRange></MdDateRange>{blogs[5]?.date}</p>
                                </div>
                                <p className="text-[#6e6e6e] ">{blogs[5]?.blog_description.slice(0, 120)} <span className="text-xl font-medium text-[#2d4a8a]">...Read More</span> </p>
                            </div>
                        </Link>
                    </SwiperSlide>

                </Swiper>


            </div>
        </div>
    );
};

export default Blog;