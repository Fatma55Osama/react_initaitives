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
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function SilderTeam() {
    const [team, setTeam] = useState([
        { img: person1, name: 'مريم أحمد', role: 'مستشارة صحية' },
        { img: person2, name: 'سارة محمود', role: 'منظمة فعاليات' },
        { img: person3, name: 'نور خالد', role: 'أخصائية تغذية' },
        { img: person4, name: 'فاطمة محمد', role: 'مديرة مشاريع' },
        { img: person3, name: 'نور خالد', role: 'أخصائية تغذية' },
        { img: person4, name: 'فاطمة محمد', role: 'مديرة مشاريع' },
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
                                <img src={el.img} width={327} height={353} alt={el.name} className="w-100 h-100 object-fit-cover" />
                            </div>
                            <div className="position-absolute d-flex flex-column ms-5 text-center rounded col-9 bottom-0 bg-dark text-white p-2 gap-3" id={styles.information}>
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
