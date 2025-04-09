import React, { useState } from 'react'
import Header from '../../Component/Header'
import styles from './index.module.css'
import SildeSwiper from '../../Component/SlideSwip'
import bebrona from '../../assets/service1.png'
import babyclothes from '../../assets/service2.png'
import baby from '../../assets/service3.png'
import babywalk from '../../assets/service4.png'
import mome from '../../assets/about-img.jpg'
import mome2 from '../../assets/we_img.jpg'
import goveren1 from '../../assets/Alex.png'
import goveren2 from '../../assets/Asyot.png'
import goveren3 from '../../assets/Behera.png'
import goveren4 from '../../assets/Dekahlia.png'
import goveren5 from '../../assets/Faym.png'
import goveren6 from '../../assets/Kal.png'
import goveren7 from '../../assets/Kafr.png'
import goveren8 from '../../assets/Sohag.png'
import SilderTeam from '../../Component/ٍSliderTeam'
import infograph1 from '../../assets/480961442_1072905718196753_3909525553070117877_n.jpg'
import infograph2 from '../../assets/489338128_1072905688196756_6690411787947090353_n.jpg'
import meet1 from '../../assets/destination-1.jpg'
import meet2 from '../../assets/destination-2.jpg'
import meet3 from '../../assets/destination-3.jpg'
import meet4 from '../../assets/destination-4.jpg'
import Footer from '../../Component/Footer'
import pr4 from '../../assets/pr4.png'
import pr3 from '../../assets/pr3.png'
import pr5 from '../../assets/pr5.png'
import pr6 from '../../assets/about.jpg'
import SwiperLink from '../../Component/SwiperLink'
import { FaChild, FaFemale, FaUsers } from 'react-icons/fa'

export default function HomePage() {
  const [Baby, setBaby] = useState([{ img: pr5, title: 'المشورة الاسرية' }, { img: pr3, title: 'مشورة ما قبل الزواج' },
  { img: pr4, title: 'مشورة الحامل' },
  { img: babywalk, title: 'مشورة الاطفال' }])
  const [governorate, setGovernorate] = useState([{ img: goveren1, name: 'محافظة الاسكندرية' }, { img: goveren2, name: 'محافظة أسيوط' }, { img: goveren3, name: 'محافظة البحيرة' }, { img: goveren4, name: 'محافظة الدقهلية' }, { img: goveren5, name: 'محافظة الفيوم' }, { img: goveren6, name: 'محافظة القليوبية' }, { img: goveren7, name: 'محافظة كفر الشيخ' }, { img: goveren8, name: 'محافظة سوهاج' }])
  const data = [{ icon: <FaFemale />,bordercolor:"#734079",background:"#734079", number: " 689 ألف ", pargraph: "عدد المستفيدات من مشورة الحامل" }, { icon: <FaChild />,bordercolor:"#e8b33c",background:"#e8b33c", number: "783 ألف", pargraph: "عدد المستفيدين من مشورة الأطفال" }, { icon: <FaUsers />,bordercolor:"#734079",background:"#734079", number: "645 ألف", pargraph: "عدد المستفيدات من المشورة الأسرية" }]
  return (
    <div className={styles.parent}>
      <Header />
      <div id={styles.bgimg}>
        <SildeSwiper />
      </div>
      <div className='col-12  py-3' id={styles.sectionBaby}>
        <div className='container col-9 d-flex align-items-center mt-4  justify-content-between '>
          {
            Baby.map((el, index) => (
              <div key={index} className=' text-white  d-flex flex-column align-items-center gap-1 justify-content-center' id={styles.cardbaby} >

                <img src={el.img} width={45} height={50} style={{ objectFit: "contain" }} alt="" />
                <h3>{el.title}</h3>
                <p>{el.text}</p>
              </div>

            ))
          }


        </div>
      </div>
      <div className='col-12  ' id={styles.sectionAbout}>
        <div className='container py-3 d-flex justify-content-center'>
          <div id={styles.imgmom}>
            <img src={pr6} alt="" />
          </div>
          <div className=' text-white d-flex text-end' id={styles.about}>
            <div className='container  d-flex flex-column justify-content-center mx-2 '>
              <h2>المبادرة في السطور </h2>
              <p className='m-0 '>  المبادرة الألف يوم الذهبية مبادرة رئيس الجمهورية
                تحت مظلة 100 مليون صحة، أطلق الدكتور خالد عبد الغفار وزير الصحة والسكان في 22/8/2023 مبادرة رئيس الجمهورية "الألف يوم الذهبية لتنمية الأسرة المصرية"، من أجل تحسين الخصائص السكانية كمًّا ونوعًا؛ لتحقيق التنمية، وتحسين معدلات الإنجاب.

                تعد المبادرة من أهم مبادرات بناء الإنسان المصري؛ نظرًا لأنها تُمثل منهجًا شموليًّا لأول 1000 يوم من حياة الإنسان، بهدف رفع الوعي بأهمية الألف يوم الأولى من الحياة، حيث يتم تكوين 85% من قدرات الطفل العقلية والنفسية والجسدية خلال هذه الفترة الحيوية.

                المشورة الأسرية

                مشورة ماقبل الزواج

                مشورة الحامل

                مشورة الأطفال</p>
              <div className='d-flex align-items-center justify-content-end gap-2'>
                <hr />
                <div className='col-12 d-flex mt-5 justify-content-start'>
                  <span className='text-start'>المزيد </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='col-12' id={styles.Babysitters}>
        <div className='container Col-12 d-flex align-items-center'>
          <div className=' text-white d-flex ' id={styles.sitters}>
            <div className='container text-end d-flex flex-column justify-content-center align-items-center gap-4 '>
              <h2> مراكز المبادرة </h2>

              <div className='  col-12 d-flex flex-wrap  gap-3' >
                {
                  governorate.map((el, index) => (
                    <div key={index} className={`col-5 d-flex flex-column   d-flex justify-content-center align-items-center rounded py-2 gap-2 ${styles.govern}   `}>
                      <img src={el.img} width={60} height={80} alt="" />
                      <span className='text-black'>{el.name}</span>
                    </div>
                  ))
                }
              </div>


            </div>

          </div>
          <div className='d-flex justify-content-center align-items-center' id={styles.coverimg}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7292976.845213789!2d25.58236680079767!3d26.807369200316565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2seg!4v1743973127881!5m2!1sen!2seg"
              width="600"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      <div className='col-12'>
        <div className='container text-center d-flex flex-column justify-content-center gap-4 ' id={styles.allimg}>
          <div className='d-flex justify-content-center '>
            <div id={styles.textinfo} className='bg-white px-4'>
              <h1>ألبوم الصور</h1>
            </div>
          </div>

          <div className='d-flex  gap-4'>
            <div className='part1 col-6 d-flex flex-column gap-3'>
              <div className='position-relative '>
                <div className='col-12' id={styles.borderimg}>
                  <img src={meet1} height={491} id={styles.img} alt="" />
                </div>
                <div className='position-absolute end-0 bottom-0 mb-3 me-3 px-3 py-1 bg-white'>
                  <h5>إجتماع المجلس الاقليمى للسكان برئاسة محافظ المنوفية</h5>
                </div>
              </div>


              <div className='col-12 d-flex gap-3'>
                <div className='position-relative '>
                  <div className={styles.widthbord + ' col-6'} id={styles.borderimg}>
                    <img src={meet2} height={274} width={359} id={styles.img} alt="" />
                  </div>
                  <div className='position-absolute end-0 bottom-0 mb-3 mx-3  py-1 bg-white'>
                    <h6>نائب وزير الصحة تناقش مع الجهات التنفيذية الخطة العاجلة لتحقيق أهداف الاستراتيجية الوطنية للسكان والتنمية 2030</h6>
                  </div>
                </div>
                <div className='position-relative '>

                  <div className={styles.widthbord + ' col-6'} id={styles.borderimg}>
                    <img src={meet3} height={274} width={359} id={styles.img} alt="" />
                  </div>
                  <div className='position-absolute end-0 bottom-0 mb-3 mx-2  py-1 bg-white'>
                    <h5>الخطة العاجلة لتحسين الخصائص السكانية في المناطق ذات المؤشرات المنخفضة تُعد نموذجًا رائدًا لضمان الحقوق الإنجابية وتعزيز تكامل جهود الدولة لتحقيق الأهداف الوطنية</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='part2 col-5 flex-grow-1'>
              <div className='position-relative '>

                <div id={styles.borderimg}>
                  <img src={meet4} width={632} height={782} id={styles.img} alt="" />
                </div>
                <div className='position-absolute end-0 bottom-0 mb-3 mx-2 px-2  py-1 bg-white'>
                  <h5>تجربة مصر في تحسين الخصائص السكانية أمام جامعة الدول العربية</h5>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='col-12'>
        <div className='container  col-12 d-flex text-center flex-column  align-items-center  gap-5' id={styles.infograp}>
          <div id={styles.textinfo} className='bg-white px-4'>

            <h1>إنفوجراف</h1>
          </div>
          <div className=' col-9 d-flex justify-content-between'>
            <div className='bg-white shadow d-flex flex-column gap-3'>
              <div id={styles.borderimg}>
                <img src={infograph1} id={styles.img} width={407} alt="" />
              </div>
              <p>الوصول إلى خفض معدل الإنجاب بنسبة 7% عن العام الماضي </p>

            </div>
            <div className='bg-white shadow d-flex flex-column gap-3'>
              <div id={styles.borderimg}>
                <img src={infograph2} id={styles.img} width={407} alt="" />
              </div>
              <p>التوسع في تقديم خدمات تنظيم الأسرة</p>
            </div>
          </div>
        </div>
      </div>
      <div className='col-12 pt-5'>
        <div className={styles.bgsection2 + " d-flex justify-content-center align-items-center"} >
          <h1 className='mb-5'>" الحصول على التطعيمات وفقاً للجدول الزمني يحمي طفلك من الأمراض المعدية" </h1>
        </div>
      </div>
      <div className='col-12'>
        <div className='container  d-flex flex-column justify-content-center align-items-center gap-5' id={styles.ourTeams}>
          <div className='d-flex flex-column justify-content-center  align-items-center text-center gap-4' id={styles.descript}>
            <div id={styles.textinfo} className='bg-white px-4'>
              <h1> المبادرة في أرقام</h1>
            </div>
          </div>
          <div className='col-12 '>
            <div className='container d-flex justify-content-between'>
              {
                data.map((el, index) => (
                  <div className=' d-flex flex-column justify-content-center align-items-center gap-3 py-4' style={{width:"400px",border:`1px solid ${el.bordercolor}`}}>
                    <div className={styles.divicon + " d-flex justify-content-center align-items-center" } style={{backgroundColor:el.background, fontSize:"40px", color:"white"}}>
                      {el.icon}
                    </div>
                    <div className='text-center'>
                    <h4>{el.number}</h4>
                     <span>{el.pargraph}</span>
                    </div>
                  </div>

                ))
              }
            </div>
          </div>

        </div>
      </div>
      <div className='col-12'>
        <div className='container  d-flex flex-column justify-content-center align-items-center gap-4' id={styles.ourTeams}>
          <div className='d-flex flex-column justify-content-center  align-items-center text-center gap-4' id={styles.descript}>
            <div id={styles.textinfo} className='bg-white px-4'>
              <h1>نماذج مضيئة</h1>
            </div>
            {/* <p className='m-0'>يضم فريق المبادرة نخبة من الأطباء والمتخصصين في صحة الأم والطفل، يعملون بتكامل لتقديم الدعم والرعاية خلال الألف يوم الأولى</p> */}
          </div>
          <div className='col-12'>
            <SilderTeam />
          </div>
        </div>
      </div>

      {/* <div className='col-12' id={styles.contant}>
        <div className='container py-5 text-center d-flex flex-column justify-content-center align-items-center'>
          <div id={styles.textinfo} className='bg-white px-4'>
            <h1>تواصل معنا</h1>
          </div>
          <form className='col-7   d-flex flex-column justify-content-center  gap-3'>
            <div className='d-flex flex-column gap-2 '>
              <input type="name" className='shadow py-3 text-end' placeholder='الاسم كامل' />
              <div className='d-flex justify-content-between gap-2 text-end' id={styles.twoinput}>
                <input type="email" className='shadow py-3 col-6 text-end' placeholder='الايميل' />
                <input type="number" className='shadow py-3 col-6 text-end' placeholder='رقم التليفون' />
              </div>
              <textarea placeholder="ارسل رساله" className='shadow text-end' id=""></textarea>
            </div>
            <div >

              <button className='py-3 px-5 text-center'>Send</button>
            </div>
          </form>

        </div>
      </div> */}
      <div className='col-12'>
        <div className='container  d-flex flex-column justify-content-center align-items-center gap-4' id={styles.ourTeams}>
          <div className='d-flex flex-column justify-content-center  align-items-center text-center gap-4' id={styles.descript}>
            <div id={styles.textinfo} className='bg-white px-4'>
              <h1>روابط هامة</h1>
            </div>
            {/* <p className='m-0'>يضم فريق المبادرة نخبة من الأطباء والمتخصصين في صحة الأم والطفل، يعملون بتكامل لتقديم الدعم والرعاية خلال الألف يوم الأولى</p> */}
          </div>
          <div className='col-12'>
            <SwiperLink />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
