import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const results = document.getElementById("results");

const params = new URLSearchParams(window.location.search);
const search = (params.get("q") || "").trim().toLowerCase();

async function loadSites() {

  results.innerHTML = "<p>جاري البحث...</p>";

  try {

    const snapshot = await getDocs(collection(db, "sites"));

    if (snapshot.empty) {
      results.innerHTML = "<p>لا توجد نتائج.</p>";
      return;
    }

    let sites = [];

    const words = search
      .split(/\s+/)
      .map(w => w.trim())
      .filter(w => w.length > 0);

    snapshot.forEach((doc) => {

      const site = doc.data();

      if (site.approved !== true) return;

      let score = 0;

      const title = (site.title || "").toLowerCase();
      const description = (site.description || "").toLowerCase();
      const category = (site.category || "").toLowerCase();
      const keywords = (site.keywords || "").toLowerCase();
      words.forEach(word => {

        if (title === word) score += 100;

        if (title.includes(word)) score += 60;

        if (keywords.includes(word)) score += 50;

        if (category.includes(word)) score += 40;

        if (description.includes(word)) score += 25;

        const synonyms = {
          "الإسلامية":["اسلامية","اسلامي","alislamiah","islam","islamic"],
          "اسلامية":["الإسلامية","اسلامي","alislamiah","islam","islamic"],
          "اسلامي":["الإسلامية","اسلامية","alislamiah","islam","islamic"],
          "القرآن":["قران","quran"],
          "قران":["القرآن","quran"],
          "يوتيوب":["youtube"],
          "youtube":["يوتيوب"]
        };

        if (synonyms[word]) {

          synonyms[word].forEach(s => {

            if (
              title.includes(s) ||
              keywords.includes(s) ||
              category.includes(s) ||
              description.includes(s)
            ) {
              score += 35;
            }

          });

        }

      });

      score += Number(site.priority || 0);

      if (score > 0) {

        sites.push({
          score,
          site
        });

      }

    });

    sites.sort((a, b) => b.score - a.score);

    results.innerHTML = "";

    if (sites.length === 0) {
      results.innerHTML = "<p>لا توجد نتائج مطابقة.</p>";
      return;
    }

    sites.forEach(item => {

      const site = item.site;

      results.innerHTML += `
        <div class="result">
          <h3>${site.title || ""}</h3>
          <p>${site.description || ""}</p>
          <a href="${site.url}" target="_blank">
            ${site.url}
          </a>
        </div>
      `;

    });

  } catch (error) {

    console.error(error);

    results.innerHTML = "<p>حدث خطأ أثناء تحميل النتائج.</p>";

  }

}

loadSites();