import { db } from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// دالة لتنظيف النصوص ومقارنتها (تتجاهل الرموز والوصلات والمسافات والهمزات)
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

    if (!container) return;

    if (!searchQuery.trim()) {
        container.innerHTML = "<p class='status-msg'>يرجى كتابة كلمة للبحث.</p>";
        return;
    }

    try {
        const querySnapshot = await getDocs(collection(db, "sites"));
        container.innerHTML = "";

        const cleanQuery = normalizeText(searchQuery);
        let matchCount = 0;

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            // إهمال العناصر غير المفعّلة إن وجدت
            if (data.approved === false) return;

            // استخراج البيانات مع بدائل لضمان عدم حدوث خطأ
            const title = data.title || data.Title || data.name || "بدون عنوان";
            const description = data.description || data.Description || data.desc || "لا يوجد وصف متوفر.";
            const url = data.url || data.Url || data.link || "#";
            
            // معالجة الكلمات المفتاحية سواء كانت نصاً أم مصفوفة
            const keywords = Array.isArray(data.keywords) 
                ? data.keywords.join(" ") 
                : (data.keywords || "");

            // دمج البيانات في نص واحد للبحث الفائق
            const searchableBlob = normalizeText(`${title} ${description} ${url} ${keywords}`);

            // تقسيم عبارة البحث إلى كلمات منفصلة
            const queryWords = cleanQuery.split(" ").filter(word => word.length > 0);
            
            // مطابقة الكلمات
            const isMatch = queryWords.some(word => searchableBlob.includes(word));

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
                        <a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>
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
        console.error("خطأ أثناء جلب البيانات:", error);
        container.innerHTML = `<p style="color:red; text-align:center;">حدث خطأ في تحميل البيانات: ${error.message}</p>`;
    }
}

document.addEventListener('DOMContentLoaded', fetchAndFilterResults);
