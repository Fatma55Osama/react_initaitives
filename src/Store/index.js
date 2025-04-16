import { create } from "zustand";
import meet1 from "../assets/destination-1.jpg";
import meet2 from "../assets/destination-2.jpg";
import meet3 from "../assets/destination-3.jpg";
import meet4 from "../assets/destination-4.jpg";
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.jpg";

export const usepathes = create(() => ({
  path: [
    {
      title: "تواصل معنا",
      links: [
        { name: "أرقام التواصل", path: "تواصل معنا/أرقام التواصل" },
        { name: "إسأل استشر", path: "تواصل معنا/إسأل استشر" },
        { name: "أسئلة شائعة", path: "تواصل معنا/أسئلة شائعة" },
        { name: "قائمة الإنفوجراف", path: "تواصل معنا/قائمة الإنفوجراف" },
        { name: "رأيك يهمنا", path: "تواصل معنا/رأيك يهمنا" },
      ],
    },
    {
      title: "الركن الإعلامي",
      links: [
        { name: "الأخبار", path: "الركن الإعلامي/الأخبار" },
        { name: "ألبومات الصور", path: "الركن الإعلامي/ألبومات الصور" },
        { name: "مكتبة الفيديو", path: "الركن الإعلامي/مكتبة الفيديو" },
        { name: "قائمة الإنفوجراف", path: "الركن الإعلامي/قائمة الإنفوجراف" },
        { name: "الرسائل التوعوية", path: "الركن الإعلامي/الرسائل التوعوية" },
      ],
    },
    {
      title: "خدمات المبادرة",
      links: [
        { name: "خط سير المستفيدين", path: "خدمات المبادرة/خط سير المستفيدين" },
        { name: "المشورة الأسرية", path: "خدمات المبادرة/المشورة الأسرية" },
        { name: "مشورة الحامل", path: "خدمات المبادرة/مشورة الحامل" },
        {
          name: "مشورة ماقبل الزواج",
          path: "خدمات المبادرة/مشورة ماقبل الزواج",
        },
        { name: "مشورة الأطفال", path: "خدمات المبادرة/مشورة الأطفال" },
        { name: "نماذج مضيئة", path: "خدمات المبادرة/نماذج مضيئة" },
      ],
    },
    {
      title: "مؤشرات المبادرة",
      links: [
        {
          name: "مستهدفات المبادرة",
          path: "مؤشرات المبادرة/مستهدفات المبادرة",
        },
        { name: "جهود المشورة", path: "مؤشرات المبادرة/جهود المشورة" },
        { name: "مؤشرات ذات صلة", path: "مؤشرات المبادرة/مؤشرات ذات صلة" },
      ],
    },
    {
      title: "عن المبادرة",
      links: [
        { name: "المبادرة في السطور", path: "عن المبادرة/المبادرة في السطور" },
        { name: "كلمة رئيس المبادرة", path: "عن المبادرة/كلمة رئيس المبادرة" },
        { name: "محاور المبادرة", path: "عن المبادرة/محاور المبادرة" },
        { name: "مراحل المبادرة", path: "عن المبادرة/مراحل المبادرة" },
        { name: "اليات التنفيذ", path: "عن المبادرة/اليات التنفيذ" },
      ],
    },
    {
      title: "الرئيسية",
      path: "/",
    },
  ],
}));
export const useData = create(() => ({
  dataphotos: [
    { img: meet1, text: "إجتماع المجلس الاقليمى للسكان برئاسة محافظ المنوفية" },
    { img: meet2, text: "إجتماع المجلس الاقليمى للسكان برئاسة محافظ المنوفية" },
    { img: meet3, text: "إجتماع المجلس الاقليمى للسكان برئاسة محافظ المنوفية" },
    { img: meet4, text: "إجتماع المجلس الاقليمى للسكان برئاسة محافظ المنوفية" },
  ],
  setphoto: (photo) => set(() => ({ dataphotos: photo })),
}));
export const usedomain = create(() => ({
  domain: "https://localhost:7091",
}));
export const useallActiveEmployees = create((set) => ({
  Employees: [
    // { img: team1, name: "أ. نسرين حسن", role: "رئيسة التمريض" },
    // { img: team2, name: "د. سامح أبو النجا", role: "أخصائي طب الأطفال" },
    // { img: team3, name: "د. منى مصطفى", role: "أخصائي النساء والتوليد" },

    // { img: team4, name: "د. محمد السيد", role: "أخصائي أمراض النساء" },
  ],
  setallEmployees: (employ) => set(() => ({ Employees: employ })),
}));
export const useInfograph = create((set) => ({
  infograph: [],
  setInfograph: (info) => set(() => ({ infograph: info })),
}));
