import React, { useState } from 'react'
// import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from './index.module.css';
import './index.scss'
import { FreeMode, Pagination ,Autoplay } from 'swiper/modules';
import logo1 from '../../assets/log1.png'
import logo2 from '../../assets/log2.png'
import logo3 from '../../assets/log3.png'
import logo4 from '../../assets/log4.png'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { usedomain, useImportantlink } from '../../Store';

export default function SwiperLink() {
    const {importantlink}=useImportantlink()
    const {domain} = usedomain()

    return (
        <div className='col-12'>
            <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination,Autoplay]}
          autoplay={{
            delay: 5000,     
            disableOnInteraction: false 
          }}
          className="mySwiper"
       
        
            >
                {
                    importantlink.map((el, index) => (
                        <SwiperSlide key={el.linkId}>
                            <div className={styles.coverteam + " py-5 d-flex justify-content-center"} data-aos="fade-up" data-aos-offset="10" data-aos-delay='300'>
                                <div className={ styles.owl +' owl d-flex flex-column  justify-content-center align-items-center border gap-3'} >
                                    <div style={{borderRadius:"50%",width:"100px", height:"100px" , overflow:"hidden"}} className='bg-white d-flex justify-content-center align-items-center'>
                                        <img src={`/src/assets/${el.linkImage}`} width={80} height={80} style={{objectFit:"contain"}} alt="" className=" object-fit-cover" />
                                    </div>
                                    <h3 className="m-0 text-center">{el.linkName}</h3>
                                </div>
                                {/* <div className="position-absolute d-flex flex-column ms-3 text-center rounded col-8 bottom-0 bg-dark text-white p-2 gap-3" id={styles.information}>
                                <h3 className="m-0">{el.name}</h3>
                                <p className="m-0">{el.role}</p>
                                <div className=' d-flex justify-content-center gap-3 '>
                                    <div className='bg-white d-flex justify-content-center align-items-center'  style={{width:"40px", height:"40px", borderRadius:"50%",color:"black"}}><FaLinkedinIn /></div>
                                    <div className='bg-white d-flex justify-content-center align-items-center'  style={{width:"40px", height:"40px", borderRadius:"50%",color:"black"}}><FaXTwitter /></div>
                                    <div className='bg-white d-flex justify-content-center align-items-center'  style={{width:"40px", height:"40px", borderRadius:"50%",color:"black"}}><FaFacebookF /></div>
                                </div>
                            </div> */}

                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
   
        </div>
    )
}
