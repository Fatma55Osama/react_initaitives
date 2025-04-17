import React from 'react'
import styles from './index.module.css'
import { useAbout } from '../../Store'
import pr6 from '../../assets/about.jpg'
export default function About() {
      const {allabout}=useAbout()
    return (
        <div className='col-12  ' id={styles.sectionAbout}>
            <div className='container py-3 d-flex justify-content-center'>
                <div id={styles.imgmom} data-aos="fade-up" data-aos-offset="10" data-aos-delay="100" data-aos-once="false">
                    <img src={pr6} alt="" />
                </div>
                <div className=' text-white d-flex text-end  ' data-aos="fade-up" data-aos-offset="10" data-aos-delay="500" data-aos-once="false" id={styles.about}>
                    <div className='container   d-flex flex-column justify-content-center mx-2 '>
                        <h6>المبادرة في السطور </h6>
                        <h4>
                            الألف يوم الذهبية

                            <span> مبادرة رئيس الجمهورية</span>
                        </h4>
                        {
                            allabout.map((el) => (
                                <p key={el.aboutId} className='m-0 mt-4'>{el.aboutText}  </p>
                            ))
                        }

                        <div className='d-flex align-items-center justify-content-end gap-2'>
                            <hr />
                            <div className='col-12 d-flex mt-5 justify-content-start'>
                                <button className='text-start text-white py-2 px-3'>المزيد </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
