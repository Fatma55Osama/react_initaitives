import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './index.module.css'
import { Pagination, Autoplay } from 'swiper/modules';
import slid2 from '../../assets/Larg4.jpg'
import slid3 from '../../assets/Larg2.jpg'
import slid1 from '../../assets/slider-bg.jpg'

export default function SildeSwiper() {
    const [swiperimg, setswiperImg] = useState([{ img: slid1 }, { img: slid2 }, { img: slid3 }])
    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        swiperimg.map((el, index) => (
                        <SwiperSlide >

                            <div id={styles.bgimg} style={{ backgroundImage: `linear-gradient(rgba(20, 20, 31, 0.7), rgba(20, 20, 31, 0.7)),url(${el.img})` }}>
                                <div className='d-flex' style={{ height: "500px" }}>
                                    <div className='d-flex flex-grow-1 flex-column justify-content-between align-content-between ' id={styles.section1}>
                                        <div className={styles.par1}>
                                            <div className={styles.babyCarecenter + " col-2 text-white py-4 px-2"}>
                                                <h2 className='ms-4 text-uppercase text-end'>مشورة الام والطفل </h2>
                                            </div>
                                            {/* <button className=' px-5 text-white mt-3 '>READ MORE</button> */}
                                        </div>
                                        <div className={styles.par2 + " d-flex flex-column align-items-end"}>
                                            {/* <button className=' px-5 text-white mb-3 '>Contact Us</button> */}
                                            {/* <div className={styles.babyCarecenter + " col-2 text-white py-4 px-2"}>
                                    <h2 className='ms-4 text-uppercase'>We will take
                                        Care of
                                        your Baby</h2>
                                </div> */}
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </SwiperSlide>))
                    }

                </Swiper>
                <div className="my-custom-pagination"></div>
            </>
        </div>
    )
}
