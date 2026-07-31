// المتغير المرجعي للسؤال الحالي
let pendingQuery = "";

// 1. دالة التنقل الفوري بين الشاشات
function showView(viewId) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active-view');
    });
    const target = document.getElementById(viewId);
    if (target) {
        target.classList.add('active-view');
    }
}

// 2. منطق التوجيه المزدوج (Dual-Intent Routing)
function handleSearch() {
    const input = document.getElementById("searchInput");
    const query = input.value.trim();

    if (!query) return;

    // فحص هل المدخل رابط أم سؤال محادثة
    const isUrl = (query.includes(".") && !query.includes(" ")) || query.startsWith("http");

    if (isUrl) {
        // إذا كان رابطاً -> يفتح في لسان جديد أو موجه خارجي
        let targetUrl = query.startsWith("http") ? query : "https://" + query;
        window.open(targetUrl, '_blank');
    } else {
        // إذا كان سؤالاً لـ AI
        pendingQuery = query;
        const hasHistory = localStorage.getItem("chatHistory") !== null;

        if (hasHistory) {
            // توجيه لشاشة التخيير فوراً
            showView('decisionView');
        } else {
            // توجيه لشاشة التشات مباشرة
            startNewChat();
        }
    }
}

// 3. خيارات شاشة التخيير
function continueChat() {
    showView('chatView');
    loadChatHistory();
    if (pendingQuery) {
        appendMessage(pendingQuery, 'user');
        simulateAiResponse(pendingQuery);
        pendingQuery = "";
    }
}

function startNewChat() {
    localStorage.removeItem("chatHistory");
    document.getElementById("chatMessages").innerHTML = "";
    showView('chatView');
    
    if (pendingQuery) {
        appendMessage(pendingQuery, 'user');
        simulateAiResponse(pendingQuery);
        pendingQuery = "";
    }
}

// 4. إدارة نظام الرسائل والتخزين المحلي
function sendChatMessage() {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (!message) return;

    appendMessage(message, 'user');
    input.value = "";
    simulateAiResponse(message);
}

function appendMessage(text, sender) {
    const messagesContainer = document.getElementById("chatMessages");
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", sender);
    msgDiv.innerText = text;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // حفظ في localStorage
    saveChatHistory();
}

function saveChatHistory() {
    const messagesContainer = document.getElementById("chatMessages");
    localStorage.setItem("chatHistory", messagesContainer.innerHTML);
}

function loadChatHistory() {
    const saved = localStorage.getItem("chatHistory");
    if (saved) {
        document.getElementById("chatMessages").innerHTML = saved;
    }
}

// الرد الافتراضي التجريبي
function simulateAiResponse(userText) {
    setTimeout(() => {
        appendMessage(`أهلاً بك في الإسلامية! لقد استلمت سؤالك: "${userText}". كيف يمكنني مساعدتك أكثر؟`, 'ai');
    }, 600);
}

// أحداث الضغط على Enter
function handleEnterKey(e) { if (e.key === 'Enter') handleSearch(); }
function handleChatEnter(e) { if (e.key === 'Enter') sendChatMessage(); }
