import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFPwbDSeMzI5eOL8DeXNZovcr47JtlZnU",
  authDomain: "alislamiah-ai.firebaseapp.com",
  projectId: "alislamiah-ai",
  storageBucket: "alislamiah-ai.firebasestorage.app",
  messagingSenderId: "956902867596",
  appId: "1:956902867596:web:0e99d136f745655535f1a9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };