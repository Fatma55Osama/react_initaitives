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

        <Route path="عن المبادرة/المبادرة في السطور" element={<h1>عن المبادرة/المبادرة في السطور</h1>} />
        <Route path="عن المبادرة/كلمة رئيس المبادرة" element={<h1>عن المبادرة/كلمة رئيس المبادرة</h1>} />
        <Route path="عن المبادرة/محاور المبادرة" element={<h1>عن المبادرة/محاور المبادرة</h1>} />
        <Route path="عن المبادرة/مراحل المبادرة" element={<h1>عن المبادرة/مراحل المبادرة</h1>} />
        <Route path="عن المبادرة/اليات التنفيذ" element={<h1>عن المبادرة/اليات التنفيذ</h1>} />

        <Route path="مؤشرات المبادرة/مستهدفات المبادرة" element={<h1>مؤشرات المبادرة/مستهدفات المبادرة</h1>} />
        <Route path="مؤشرات المبادرة/جهود المشورة" element={<h1>مؤشرات المبادرة/جهود المشورة</h1>} />
        <Route path="مؤشرات المبادرة/مؤشرات ذات صلة" element={<h1>مؤشرات المبادرة/مؤشرات ذات صلة</h1>} />

        <Route path="خدمات المبادرة/خط سير المستفيدين" element={<h1>خدمات المبادرة/خط سير المستفيدين</h1>} />
        <Route path="خدمات المبادرة/المشورة الأسرية" element={<h1>خدمات المبادرة/المشورة الأسرية</h1>} />
        <Route path="خدمات المبادرة/مشورة الحامل" element={<h1>خدمات المبادرة/مشورة الحامل</h1>} />
        <Route path="خدمات المبادرة/مشورة ماقبل الزواج" element={<h1>خدمات المبادرة/مشورة ماقبل الزواج</h1>} />
        <Route path="خدمات المبادرة/مشورة الأطفال" element={<h1>خدمات المبادرة/مشورة الأطفال</h1>} />
        <Route path="خدمات المبادرة/نماذج مضيئة" element={<h1>خدمات المبادرة/نماذج مضيئة</h1>} />

        <Route path="الركن الإعلامي/الأخبار" element={<h1>الركن الإعلامي/الأخبار</h1>} />
        <Route path="الركن الإعلامي/ألبومات الصور" element={<h1>الركن الإعلامي/ألبومات الصور</h1>} />
        <Route path="الركن الإعلامي/مكتبة الفيديو" element={<h1>الركن الإعلامي/مكتبة الفيديو</h1>} />
        <Route path="الركن الإعلامي/قائمة الإنفوجراف" element={<h1>الركن الإعلامي/قائمة الإنفوجراف</h1>} />
        <Route path="الركن الإعلامي/الرسائل التوعوية" element={<h1>الركن الإعلامي/الرسائل التوعوية</h1>} />

        <Route path="تواصل معنا/أرقام التواصل" element={<h1>تواصل معنا/أرقام التواصل</h1>} />
        <Route path="تواصل معنا/إسأل استشر" element={<h1>تواصل معنا/إسأل استشر</h1>} />
        <Route path="تواصل معنا/أسئلة شائعة" element={<h1>تواصل معنا/أسئلة شائعة</h1>} />
        <Route path="تواصل معنا/قائمة الإنفوجراف" element={<h1>تواصل معنا/قائمة الإنفوجراف</h1>} />
        <Route path="تواصل معنا/رأيك يهمنا" element={<h1>تواصل معنا/رأيك يهمنا</h1>} />

      </Route>
    </Routes>
  </div>
  );
}
