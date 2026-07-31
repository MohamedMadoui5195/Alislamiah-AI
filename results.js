// استيراد الدوال الخاصة بـ Firestore من ملف firebase.js الخاص بك
import { db } from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// دالة جلب المواقع من قواعد البيانات
async function loadSites() {
    const resultsContainer = document.getElementById('results-container'); // تأكد أن هذا ID الـ div في الـ HTML
    resultsContainer.innerHTML = "<p>جاري تحميل النتائج...</p>";

    try {
        const querySnapshot = await getDocs(collection(db, "sites")); // اسم الـ Collection في Firebase
        resultsContainer.innerHTML = ""; // تفريغ نص التحميل

        if (querySnapshot.empty) {
            resultsContainer.innerHTML = "<p>لا توجد نتائج لعرضها.</p>";
            return;
        }

        querySnapshot.forEach((doc) => {
            // ⚠️ النقطة الأهم: يجب استخراج البيانات عبر doc.data()
            const data = doc.data();

            // فحص واستخراج البيانات مع دعم أسماء الحقول سواء كانت كابيتال أو سمول
            const title = data.title || data.Title || data.name || "بدون عنوان";
            const description = data.description || data.Description || data.desc || "لا يوجد وصف متوفر.";
            const url = data.url || data.Url || data.link || "#";

            // استخراج النطاق للحصول على Favicon الموقع
            let domain = "";
            try {
                domain = new URL(url).hostname;
            } catch(e) {
                domain = url;
            }
            const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;

            // بناء كارت النتيجة بالتصميم الاحترافي
            const cardHTML = `
                <div class="search-card" style="margin-bottom: 24px; text-align: right; direction: rtl;">
                    <div class="card-header" style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                        <img src="${faviconUrl}" alt="icon" style="width: 18px; height: 18px; border-radius: 50%;" onerror="this.src='https://via.placeholder.com/18'">
                        <span style="font-size: 14px; color: #202124;">${title}</span>
                    </div>
                    <div style="font-size: 12px; color: #4d5156; word-break: break-all; margin-bottom: 4px;">${url}</div>
                    <h3 style="margin: 0 0 4px 0;">
                        <a href="${url}" target="_blank" style="font-size: 20px; color: #1a0dab; text-decoration: none;">${title}</a>
                    </h3>
                    <p style="font-size: 14px; color: #4d5156; margin: 0; line-height: 1.5;">${description}</p>
                </div>
            `;

            resultsContainer.innerHTML += cardHTML;
        });

    } catch (error) {
        console.error("خطأ في جلب البيانات:", error);
        resultsContainer.innerHTML = `<p style="color: red;">حدث خطأ أثناء تحميل البيانات: ${error.message}</p>`;
    }
}

// تشغيل الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', loadSites);
