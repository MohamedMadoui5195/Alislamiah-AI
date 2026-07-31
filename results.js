import { db } from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// دالة لتنظيف النصوص ومقارنتها (تتجاهل الرموز والوصلات والمسافات)
function normalizeText(text) {
    if (!text) return "";
    return text.toString()
        .toLowerCase()
        .replace(/[_\-\.\/\\:]/g, " ") // استبدال الرموز بمسافات
        .replace(/(أ|إ|آ)/g, "ا")      // توحيد الألفات
        .replace(/ة/g, "ه")            // توحيد التاء المربوطة
        .trim();
}

// قراءة كلمة البحث من الـ URL
const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get('q') || "";

async function fetchAndFilterResults() {
    const container = document.getElementById('results-container');

    if (!searchQuery.trim()) {
        container.innerHTML = "<p class='status-msg'>يرجى كتابة كلمة للبحث.</p>";
        return;
    }

    try {
        const querySnapshot = await getDocs(collection(db, "sites")); // اسم الـ Collection
        container.innerHTML = "";

        const cleanQuery = normalizeText(searchQuery);
        let matchCount = 0;

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            // استخراج البيانات مع بدائل لمنع undefined
            const title = data.title || data.Title || data.name || "بدون عنوان";
            const description = data.description || data.Description || data.desc || "لا يوجد وصف متوفر.";
            const url = data.url || data.Url || data.link || "#";
            const keywords = data.keywords || ""; // حقل الكلمات الدلالية

            // دمج كل النصوص الخاصة بالموقع في نص واحد للبحث الفائق
            const searchableBlob = normalizeText(`${title} ${description} ${url} ${keywords}`);

            // تقسيم كلمة البحث إلى كلمات منفصلة لزيادة دقة التطابق
            const queryWords = cleanQuery.split(" ");
            const isMatch = queryWords.some(word => word.length > 1 && searchableBlob.includes(word));

            if (isMatch) {
                matchCount++;

                // استخراج Favicon من رابط الموقع
                let domain = "";
                try { domain = new URL(url).hostname; } catch(e) { domain = url; }
                const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;

                // إنشاء الكارت
                const card = document.createElement('div');
                card.className = 'search-card';
                card.innerHTML = `
                    <div class="card-header">
                        <img src="${faviconUrl}" class="card-favicon" alt="icon" onerror="this.src='https://via.placeholder.com/20'">
                        <span class="card-site-name">${title}</span>
                    </div>
                    <div class="card-url">${url}</div>
                    <h3 class="card-title">
                        <a href="${url}" target="_blank">${title}</a>
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
        console.error("خطأ:", error);
        container.innerHTML = `<p style="color:red;">حدث خطأ في تحميل البيانات: ${error.message}</p>`;
    }
}

document.addEventListener('DOMContentLoaded', fetchAndFilterResults);
