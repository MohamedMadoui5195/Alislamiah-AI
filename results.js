// توجيه المدخلات بذكاء
function handleInput() {
    const inputElement = document.getElementById("searchInput");
    const query = inputElement.value.trim();

    if (!query) return;

    // 1. فحص هل المدخل رابط أم سؤال؟
    const isWebsite = query.includes(".") && !query.includes(" ") || query.startsWith("http");

    if (isWebsite) {
        // 🌐 توجيه مباشر للمتصفح (بدون أي واجهات تخيير)
        let url = query.startsWith("http") ? query : "https://" + query;
        window.location.href = "results.html?url=" + encodeURIComponent(url);
    } else {
        // 💬 التعامل مع المحادثة
        // فحص هل توجد محادثة سابقة مخزنة؟
        const hasHistory = localStorage.getItem("chatHistory") !== null;

        if (hasHistory) {
            // 🔄 يوجد سجل سابق -> إظهار واجهة التخيير
            openDecisionView(query);
        } else {
            // 🆕 أول مرة -> الانتقال للتشات مباشرة
            startNewChatDirectly(query);
        }
    }
}

// إظهار واجهة التخيير
function openDecisionView(query) {
    document.getElementById('searchView').style.display = 'none';
    const decisionView = document.getElementById('decisionView');
    decisionView.style.display = 'flex';
    
    // حفظ السؤال لاستخدامه عند التفاعل
    decisionView.dataset.currentQuery = query;
}

// دالة العودة للبحث
function goBackToSearch() {
    document.getElementById('decisionView').style.display = 'none';
    document.getElementById('searchView').style.display = 'flex';
}

// بدء تشات جديد مباشرة (لأول مرة)
function startNewChatDirectly(query) {
    // سنربطها فوراً بواجهة المحادثة الجديدة (ChatView)
    console.log("بدء محادثة جديدة بالسؤال:", query);
}
