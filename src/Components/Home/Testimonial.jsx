import { useEffect, useState } from "react";

import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/bundle';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('/public/review.json')
            .then(res => res.json())
            .then(data => {

                setReviews(data);

            })
    }, [])
    
    return (
        <div style={{ backgroundImage: 'url("https://i.ibb.co/x20GMYD/row-bgimage-11.png")' }} className="lg:py-10 md:py-10 py-6 bg-center bg-cover bg-no-repea ">
            <div className="text-center">
            <p className="text-[#2d4a8a] font-medium font-primary text-center text-xl mb-2">Testimonial</p>
                <h1 className='md:text-4xl  text-[28px] font-bold text-center font-primary'>Check Out Our  <span className=" text-[#2d4a8a] font-secondary"><i>Client's review</i></span></h1>

            </div>
            <div>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 6000,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true} modules={[Navigation, Autoplay, FreeMode,Pagination]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide key={review.name}>
                 

                            <div className="flex flex-col items-center justify-center mt-16 ">
                               <div><img className="h-28 w-28 rounded-full" src={review.img} alt="" /></div>
                                <p className="px-[190px] my-5 text-center text-[#585858] font-third  text-xl leading-8">{review.review_description}</p>
                                <Rating
                                    style={{ maxWidth: 140 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <h3 className="text-3xl text-[#2D4A8A] font-semibold mt-2">{review.name}</h3>
                            
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;