// 1. استيراد المكتبات عبر روابط CDN المباشرة والمناسبة لـ GitHub Pages
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 2. إعدادات فايربيز الخاصة بمشروعك (alislamiah-ai)
const firebaseConfig = {
  apiKey: "AIzaSyBFPwbDSeMzI5eOL8DeXNZovcr47JtlZnU",
  authDomain: "alislamiah-ai.firebaseapp.com",
  projectId: "alislamiah-ai",
  storageBucket: "alislamiah-ai.firebasestorage.app",
  messagingSenderId: "956902867596",
  appId: "1:956902867596:web:0e99d136f745655535f1a9",
  measurementId: "G-MV3BQG10T2"
};

// 3. تهيئة الفايربيز
const app = initializeApp(firebaseConfig);

// 4. تصدير قاعدة البيانات Firestore لكي يستطيع ملف results.js قراءتها
export const db = getFirestore(app);
