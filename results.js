import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const results = document.getElementById("results");

async function loadSites() {
  results.innerHTML = "<p>جاري تحميل النتائج...</p>";

  try {
    const querySnapshot = await getDocs(collection(db, "sites"));

    results.innerHTML = "";

    if (querySnapshot.empty) {
      results.innerHTML = "<p>لا توجد مواقع حاليا.</p>";
      return;
    }

    querySnapshot.forEach((doc) => {
      const site = doc.data();

      // تم إصلاح التغليف هنا بعلامات (`) Backticks
      results.innerHTML += `
        <div class="result">
          <h3>${site.title}</h3>
          <p>${site.description}</p>
          <a href="${site.url}" target="_blank">${site.url}</a>
        </div>
      `;
    });

  } catch (error) {
    console.error("حدث خطأ:", error);
    results.innerHTML = "<p>حدث خطأ أثناء تحميل النتائج.</p>";
  }
}

loadSites();
