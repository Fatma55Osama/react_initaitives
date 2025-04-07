import React from 'react'
import styles from './index.module.css'
import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiMenu2Fill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
export default function Footer() {
  return (
    <div className={styles.parentfooter}>
      <div className='container d-flex justify-content-between text-end py-5 '>
        <div className='d-flex flex-column gap-3'>
          <h2>النشرة الاخبارية</h2>
          <input type="email" placeholder='ادخل الايميل الخاص بك' className='py-2 px-3 text-end' />
          <div className=''>
            <button className='py-1 px-3 text-white'>اشتراك</button>
          </div>
        </div>
        <div className='d-flex flex-column gap-3'>
          <h2>الشركة</h2>
          <ul className='d-flex gap-5 justify-content-between '>
            <div className='d-flex flex-column  align-items-end gap-3'>
              <li className='d-flex align-items-center gap-2'>الرئيسية <IoIosArrowForward/> </li>
              <li className='d-flex align-items-center gap-2'>عن المبادرة<IoIosArrowForward /></li>
              <li className='d-flex align-items-center gap-2'>مؤشرات المبادرة <IoIosArrowForward /></li>
            </div>
            <div className='d-flex flex-column  align-items-end gap-3'>
              <li className='d-flex align-items-center gap-2'>خدمات المباردة <IoIosArrowForward/> </li>
              <li className='d-flex align-items-center gap-2'>الركن الإعلامي<IoIosArrowForward/> </li>
              <li className='d-flex align-items-center gap-2'>تواصل معنا <IoIosArrowForward/> </li>
            </div>

          </ul>
        </div>
        <div className='d-flex flex-column  gap-3'>
          <h2>العنوان</h2>
          <ul className='d-flex flex-column align-items-end gap-3'>
            <li className='d-flex align-items-center gap-2'>كورنيش النيل - المعادى - ص.ب 11632 القاهرة <MdLocationPin style={{ fontSize: "24px" }} /></li>
            <li className='d-flex align-items-center gap-2'>02050524225 <MdLocalPhone style={{ fontSize: "24px" }} /></li>
            <li className='d-flex align-items-center gap-2'>npc@gov.eg <MdEmail style={{ fontSize: "24px" }} /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
