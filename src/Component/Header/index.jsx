import React from 'react'
import styles from './index.module.css'
import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiMenu2Fill } from 'react-icons/ri';
import { FaUserAlt } from "react-icons/fa";
import { IoSearch } from 'react-icons/io5';
import logo from '../../assets/1000Logo.png'
export default function Header() {
    
    return (
        <div className={styles.header + ' col-12 '}>
            <div className={styles.part1 + " d-flex   align-items-center align-content-between justify-content-between gap-5 "}>
                
                <div className='  ms-3 justify-content-center '>
                    <img src={logo} width={100} alt="" />
                </div>
                <div className=' col-8 me-4 d-flex justify-content-between '>
                         <p>تواصل معنا</p>
                        <p> الركن الإعلامي</p>
                        <p>خدمات المباردة</p>
                        <p>مؤشرات المبادرة</p>
                        <p>عن المبادرة</p>
                        <p> الرئيسية</p>
                </div>
                
            </div>
            <div className={styles.part2 + " col-12 d-flex flex-row "}>
                <div className='col-12'>
                    {/* <div className='co-11  py-4 px-4 d-flex align-items-center justify-content-between'>
                        <div className='text-center '>
                        <h1 className='text-center'>PrimeCare </h1>
                        </div>
                        <div className='bg d-flex align-items-center gap-5' >
                            <div className='text-uppercase d-flex align-items-center  gap-2'>
                                <span> Login</span>
                            <FaUserAlt /> 
                            </div>
                            <IoSearch style={{fontSize:"20px"}} />
                            </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}
