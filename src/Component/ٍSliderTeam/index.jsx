import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from './index.module.css';
import { FreeMode, Pagination } from 'swiper/modules';
import person1 from '../../assets/team1.jpg';
import person2 from '../../assets/team2.jpg';
import person3 from '../../assets/team3.jpg';
import person4 from '../../assets/team4.jpg';
import team1 from '../../assets/team-1.jpg'
import team2 from '../../assets/team-2.jpg'
import team3 from '../../assets/team-3.jpg'
import team4 from '../../assets/team-4.jpg'

import { FaCalendar, FaFacebookF, FaLinkedinIn, FaMapMarker, FaStethoscope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { getAllData } from '../../Data/Repo/dataRepo';
import { useallActiveEmployees, usedomain } from '../../Store';

export default function SilderTeam() {
    const {Employees} =useallActiveEmployees()
    // useEffect(()=>{
    //     getAllData.get_all_employess(domain).then((res)=>{
    //         console.log(res)
    //         setallEmployees(res)
           
    //     })
    // },[])
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={20}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
            {
                Employees.map((el, index) =>{ 
                    console.log(el.empImage);
                   return(
                      <SwiperSlide key={el.empId} className='  d-flex justify-content-center  align-items-center' style={{height:"300px"}} >
                       
                        <div className={styles.coverteam + "  col-10 " } style={{  boxShadow:' 0 4px 8px rgba(0, 0, 0, 0.1), 0 -4px 8px rgba(0, 0, 0, 0.1)',zIndex:"3",height:"250px"}}  data-aos="fade-up" data-aos-offset="10" data-aos-delay={`${index * 500}`}> 
                            <div className="col-12  d-flex justify-content-end " id={styles.coverimgzoom}>
                                <img src={`/src/assets/${el.empImage}`} width={100} height={100} alt="" />
                               
                                </div>
                            <div className=" d-flex flex-column ms-3 text-center col-12 bottom-0  text-white p-2 gap-3" id={styles.information}>
                                <div className=' d-flex justify-content-center gap-3  ' id={styles.iconsteam}>
                                    <div className='bg-white d-flex justify-content-center align-items-center' id={styles.icon} style={{width:"40px", height:"40px", borderRadius:"50%",color:"#734079",}}><FaCalendar /></div>
                                    <div className='bg-white d-flex justify-content-center align-items-center'  id={styles.icon} style={{width:"40px", height:"40px", borderRadius:"50%",color:"#734079"}}><FaStethoscope /></div>
                                    <div className='bg-white d-flex justify-content-center align-items-center'  id={styles.icon} style={{width:"40px", height:"40px", borderRadius:"50%",color:"#734079"}}><FaMapMarker /></div>
                                </div> 
                                <h3 className="m-0 text-black">{el.empName}</h3> 
                                <p className="m-0">{el.empJob}</p>
                               
                            </div>

                        </div>
                    </SwiperSlide>
                   )
                 
})
            }
        </Swiper>
    );
}
