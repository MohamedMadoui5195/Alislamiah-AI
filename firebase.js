import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// إعدادات مشروع Firebase الخاص بك
const firebaseConfig = {
  apiKey: "AIzaSyBFPwbDSeMzI5eOL8DeXNZovcr47JtlZnU",
  authDomain: "alislamiah-ai.firebaseapp.com",
  projectId: "alislamiah-ai",
  storageBucket: "alislamiah-ai.firebasestorage.app",
  messagingSenderId: "956902867596",
  appId: "1:956902867596:web:0e99d136f745655535f1a9",
  measurementId: "G-MV3BQG10T2"
};

// تهيئة تطبيق Firebase
const app = initializeApp(firebaseConfig);

// تهيئة قاعدة البيانات Firestore وتصديرها للاستخدام في ملفات أخرى
export const db = getFirestore(app);
