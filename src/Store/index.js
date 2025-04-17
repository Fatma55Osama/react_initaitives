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
        { name: "أرقام التواصل", path: "contactus/number"},
        { name: "إسأل استشر", path: "contactus/ask" },
        { name: "أسئلة شائعة", path: "contactus/frequentlyask"},
        { name: "قائمة الإنفوجراف", path: "contactus/infograph" },
        { name: "رأيك يهمنا", path: "contactus/youropinion" },
      ],
    },
    {
      title: "الركن الإعلامي",
      links: [
        { name: "الأخبار", path: "mediacorner/news" },
        { name: "ألبومات الصور", path: "mediacorner/alpomphoto"},
        { name: "مكتبة الفيديو", path: "mediacorner/vedio" },
        { name: "قائمة الإنفوجراف", path:"mediacorner/infograph" },
        { name: "الرسائل التوعوية", path:"mediacorner/awarenessmassage" },
      ],
    },
    {
      title: "خدمات المبادرة",
      links: [
        { name: "خط سير المستفيدين", path: "serviceinitiative/targettraffic"},
        { name: "المشورة الأسرية", path: "serviceinitiative/famliycounseling" },
        { name: "مشورة الحامل", path: "serviceinitiative/pregnantmashura" },
        {
          name: "مشورة ماقبل الزواج",
          path: "serviceinitiative/premarriage",
        },
        { name: "مشورة الأطفال", path: "serviceinitiative/childrenmashura" },
        { name: "نماذج مضيئة", path: "serviceinitiative/teams" },
      ],
    },
    {
      title: "مؤشرات المبادرة",
      links: [
        {
          name: "مستهدفات المبادرة",
          path: "indicators/targets",
        },
        { name: "جهود المشورة", path: "indicators/efforts"},
        { name: "مؤشرات ذات صلة", path: "indicators/relatedindicator"  },
      ],
    },
    {
      title: "عن المبادرة",
      links: [
        { name: "المبادرة في السطور", path:"about/initiativeLine" },
        { name: "كلمة رئيس المبادرة", path: "about/speechpresident"},
        { name: "محاور المبادرة", path: "about/themes"},
        { name: "مراحل المبادرة", path:"about/stages"},
        { name: "اليات التنفيذ", path: "about/implementation"},
        {name:'مراكز المبادرة',path:"about/initiativeCenters"},
        {name:'تاريخ المبادرة',path:"about/datainitiative" },
                
      ],
    },
    {
      title: "الرئيسية",
      path: "/",
    },
  ],
}));
// export const useData = create(() => ({
//   dataphotos: [
//     { img: meet1, text: "إجتماع المجلس الاقليمى للسكان برئاسة محافظ المنوفية" },
//     { img: meet2, text: "إجتماع المجلس الاقليمى للسكان برئاسة محافظ المنوفية" },
//     { img: meet3, text: "إجتماع المجلس الاقليمى للسكان برئاسة محافظ المنوفية" },
//     { img: meet4, text: "إجتماع المجلس الاقليمى للسكان برئاسة محافظ المنوفية" },
//   ],
//   setphoto: (photo) => set(() => ({ dataphotos: photo })),
// }));
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

export const useImportantlink = create((set) => ({
  importantlink: [],
  setImportantlink: (important) => set(() => ({ importantlink: important })),
}));

export const useNews = create((set) => ({
  allnews: [],
  setInews: (newwes) => set(() => ({ allnews: newwes })),
}));
export const useAbout = create((set) => ({
  allabout: [],
  setallabout: (about) => set(() => ({ allabout: about })),
}));
export const useAwarnessMsg = create((set) => ({
  allawarness: [],
  setallawarness: (awarn) => set(() => ({ allawarness: awarn })),
}));
export const useServicemain = create((set) => ({
  allservice: [],
  setservice: (serv) => set(() => ({ allservice: serv })),
}));
export const useGovs = create((set) => ({
  allgovs: [],
  setgovs: (gov) => set(() => ({ allgovs: gov })),
}));