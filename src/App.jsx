import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import AOS from 'aos';
import MainLayout from "./Component/MainLayout";
export default function App() {
 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100, 
      once: false,
    });
    return () => {
      AOS.refresh(); 
  };
  }, []);
  return (
    <div className="App d-flex flex-column">
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path="about/initiativeLine" element={<h1>عن المبادرة/المبادرة في السطور</h1>} />
        <Route path="about/speechpresident" element={<h1>عن المبادرة/كلمة رئيس المبادرة</h1>} />
        <Route path="about/themes" element={<h1>عن المبادرة/محاور المبادرة</h1>} />
        <Route path="about/stages" element={<h1>عن المبادرة/مراحل المبادرة</h1>} />
        <Route path="about/implementation" element={<h1>عن المبادرة/اليات التنفيذ</h1>} />
        <Route path="about/initiativeCenters" element={<h1>مراكز المبادرة</h1>}/>
        <Route path="about/datainitiative" element={<h1>تاريخ المبادرة</h1>}/>

        <Route path="indicators/targets" element={<h1>مؤشرات المبادرة/مستهدفات المبادرة</h1>} />
        <Route path="indicators/efforts" element={<h1>مؤشرات المبادرة/جهود المشورة</h1>} />
        <Route path="indicators/relatedindicator" element={<h1>مؤشرات المبادرة/مؤشرات ذات صلة</h1>} />

        <Route path="serviceinitiative/targettraffic" element={<h1>خدمات المبادرة/خط سير المستفيدين</h1>} />
        <Route path="serviceinitiative/famliycounseling" element={<h1>خدمات المبادرة/المشورة الأسرية</h1>} />
        <Route path="serviceinitiative/pregnantmashura" element={<h1>خدمات المبادرة/مشورة الحامل</h1>} />
        <Route path="serviceinitiative/premarriage" element={<h1>خدمات المبادرة/مشورة ماقبل الزواج</h1>} />
        <Route path="serviceinitiative/childrenmashura" element={<h1>خدمات المبادرة/مشورة الأطفال</h1>} />
        <Route path="serviceinitiative/teams" element={<h1>خدمات المبادرة/نماذج مضيئة</h1>} />

        <Route path="mediacorner/news" element={<h1>الركن الإعلامي/الأخبار</h1>} />
        <Route path="mediacorner/alpomphoto" element={<h1>الركن الإعلامي/ألبومات الصور</h1>} />
        <Route path="mediacorner/vedio" element={<h1>الركن الإعلامي/مكتبة الفيديو</h1>} />
        <Route path="mediacorner/infograph" element={<h1>الركن الإعلامي/قائمة الإنفوجراف</h1>} />
        <Route path="mediacorner/awarenessmassage" element={<h1>الركن الإعلامي/الرسائل التوعوية</h1>} />

        <Route path="contactus/number" element={<h1>تواصل معنا/أرقام التواصل</h1>} />
        <Route path="contactus/ask" element={<h1>تواصل معنا/إسأل استشر</h1>} />
        <Route path="contactus/frequentlyask" element={<h1>تواصل معنا/أسئلة شائعة</h1>} />
        <Route path="contactus/infograph" element={<h1>تواصل معنا/قائمة الإنفوجراف</h1>} />
        <Route path="contactus/youropinion" element={<h1>تواصل معنا/رأيك يهمنا</h1>} />

      </Route>
    </Routes>
  </div>
  );
}
