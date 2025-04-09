import React, { useState } from 'react';
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

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function SilderTeam() {
    const [team, setTeam] = useState([
        { img: team1, name: 'أ. نسرين حسن', role: 'رئيسة التمريض' },
        { img: team2, name: 'د. سامح أبو النجا', role: 'أخصائي طب الأطفال' },
        { img: team3, name: 'د. منى مصطفى', role: 'أخصائي النساء والتوليد' },
        // { img: team4, name: 'فاطمة محمد', role: 'مديرة مشاريع' },
        { img: team4, name: 'د. محمد السيد', role: 'أخصائي أمراض النساء' },
    ]);

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
            {
                team.map((el, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.coverteam}>
                            <div className="position-relative">
                                <img src={el.img} width={327} height={340} alt={el.name} className=" object-fit-cover" />
                            </div>
                            <div className="position-absolute d-flex flex-column ms-3 text-center rounded col-8 bottom-0 bg-dark text-white p-2 gap-3" id={styles.information}>
                                <h3 className="m-0">{el.name}</h3>
                                <p className="m-0">{el.role}</p>
                                <div className=' d-flex justify-content-center gap-3 '>
                                    <div className='bg-white d-flex justify-content-center align-items-center'  style={{width:"40px", height:"40px", borderRadius:"50%",color:"black"}}><FaLinkedinIn /></div>
                                    <div className='bg-white d-flex justify-content-center align-items-center'  style={{width:"40px", height:"40px", borderRadius:"50%",color:"black"}}><FaXTwitter /></div>
                                    <div className='bg-white d-flex justify-content-center align-items-center'  style={{width:"40px", height:"40px", borderRadius:"50%",color:"black"}}><FaFacebookF /></div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}
