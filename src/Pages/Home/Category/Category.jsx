import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import slide6 from '../../../assets/home/zaib-tse-KVv5lFOMY1E-unsplash.jpg'
import slide7 from '../../../assets/home/zaib-tse-KVv5lFOMY1E-unsplash.jpg'
import slide8 from '../../../assets/home/zaib-tse-KVv5lFOMY1E-unsplash.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Category = () => {
    return (
            <section>
                <SectionTitle
                 subHeading={"Form 11.00am to 10.00pm"}
                  heading={"ORDER ONLINE"} >
                </SectionTitle>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-24"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" />
                        <h3 className='text-center text-4xl text-white uppercase -mt-10'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className='text-center text-4xl text-white uppercase -mt-10'>pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className='text-center text-4xl text-white uppercase -mt-10'>soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className='text-center text-4xl text-white uppercase -mt-10'>desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" />
                        <h3 className='text-center text-4xl text-white uppercase -mt-10'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide6} alt="" />
                        <h3 className='text-center text-4xl text-white uppercase -mt-10'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide7} alt="" />
                        <h3 className='text-center text-4xl text-white uppercase -mt-10'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide8} alt="" />
                        <h3 className='text-center text-4xl text-white uppercase -mt-10'>Salads</h3>
                    </SwiperSlide>
                </Swiper>
            </section>
    );
};

export default Category;