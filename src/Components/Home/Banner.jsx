import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/bundle';

const Banner = () => {
    return (
        <div>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <div style={{ backgroundImage: 'url("https://i.ibb.co/4tcy36p/slider-mainbg-002.jpg")' }} className=" bg-center bg-cover bg-no-repeat h-[315px] md:h-[480px] lg:h-[600px] flex flex-col justify-center items-center">
                      
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: 'url("https://i.ibb.co/gS42Jdf/slider-mainbg-001.jpg")' }} className=" bg-center bg-cover bg-no-repeat h-[315px] md:h-[480px] lg:h-[600px] flex flex-col justify-center items-center">
                      
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;