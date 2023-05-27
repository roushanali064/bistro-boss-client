import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";


import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Categories = () => {
    return (
        <div>
            <SectionTitle
                heading={'order Online'}
                subHading={'from 11:00 am to 10:00 pm'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-28"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-4xl text-center uppercase -mt-24 text-white">Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-4xl text-center uppercase -mt-24 text-white">Sups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-4xl text-center uppercase -mt-24 text-white">Pizz</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-4xl text-center uppercase -mt-24 text-white">Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-4xl text-center uppercase -mt-24 text-white">Desserts</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Categories;