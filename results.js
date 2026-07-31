import { db } from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// دالة توحيد ونظافة النص
function normalizeText(text) {
    if (!text) return "";
    return text.toString()
        .toLowerCase()
        .replace(/(أ|إ|آ)/g, "ا")
        .replace(/ة/g, "ه")
        .replace(/[\u064B-\u0652]/g, "")
        .replace(/[_\-\.\/\\:,]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

// دالة لفتح الموقع داخل التطبيق بدون الخروج منه
window.openSiteInApp = function(url) {
    const modal = document.createElement('div');
    modal.className = 'site-modal-overlay';
    modal.id = 'active-site-modal';
    
    modal.innerHTML = `
        <div class="site-modal-header">
            <button class="btn-close-modal" onclick="document.getElementById('active-site-modal').remove()">
                ✖ إغلاق والعودة للتطبيق
            </button>
            <span style="font-size:12px; opacity:0.8; word-break:break-all;">${url}</span>
        </div>
        <iframe src="${url}" class="site-modal-frame"></iframe>
    `;
    
    document.body.appendChild(modal);
};

const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get('q') || "";

async function fetchAndFilterResults() {
    const container = document.getElementById('results-container');
    if (!container) return;

    if (!searchQuery.trim()) {
        container.innerHTML = "<p class='status-msg'>يرجى كتابة كلمة للبحث.</p>";
        return;
    }

    try {
        const querySnapshot = await getDocs(collection(db, "sites"));
        container.innerHTML = ""; // مسح رسالة التحميل فقط

        const cleanQuery = normalizeText(searchQuery);
        const queryWords = cleanQuery.split(" ").filter(w => w.length > 0);
        let matchCount = 0;

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const isApproved = data.Approved !== undefined ? data.Approved : (data.approved !== undefined ? data.approved : true);
            if (isApproved === false) return;

            const title = data.title || data.Title || "بدون عنوان";
            const description = data.description || data.Description || "لا يوجد وصف متوفر.";
            const url = data.url || data.Url || "#";
            const keywords = data.keywords || "";
            const category = data.category || "";

            const searchableBlob = normalizeText(`${title} ${description} ${url} ${keywords} ${category}`);
            const isMatch = queryWords.some(word => searchableBlob.includes(word));

            if (isMatch) {
                matchCount++;

                const card = document.createElement('div');
                card.className = 'search-card';
                card.innerHTML = `
                    <div class="card-url">${url}</div>
                    <h3 class="card-title">
                        <a onclick="openSiteInApp('${url}')">${title}</a>
                    </h3>
                    <p class="card-description">${description}</p>
                `;
                container.appendChild(card);
            }
        });

        if (matchCount === 0) {
            container.innerHTML = `<p class='status-msg'>لم نجد نتائج تطابق: <strong>${searchQuery}</strong></p>`;
        }

    } catch (error) {
        console.error("خطأ الفايربيس:", error);
        container.innerHTML = `<p class='status-msg' style='color:red;'>حدث خطأ أثناء جلب البيانات.</p>`;
    }
}

document.addEventListener('DOMContentLoaded', fetchAndFilterResults);
