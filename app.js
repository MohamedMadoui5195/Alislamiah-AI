let pendingQuery = "";

// 1. التنقل السلس بين الواجهات
function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
    const target = document.getElementById(viewId);
    if (target) target.classList.add('active-view');
}

// 2. عند ضغط "إرسال" في الصفحة الرئيسية
function handleSearch() {
    const input = document.getElementById("searchInput");
    const query = input.value.trim();
    if (!query) return;

    // حفظ السؤال لنقله لاحقاً للتشات
    pendingQuery = query;

    // توجيه المستخدم فوراً لواجهة التخيير (Decision UI)
    showView('decisionView');
}

// 3. خيار "متابعة المحادثة السابقة"
function continueChat() {
    showView('chatView');
    loadChatHistory(); // استرجاع المحادثات القديمة
    
    if (pendingQuery) {
        appendMessage(pendingQuery, 'user');
        simulateAiResponse(pendingQuery);
        pendingQuery = ""; // تفريغ بعد الإرسال
    }
}

// 4. خيار "بدء محادثة جديدة"
function startNewChat() {
    localStorage.removeItem("chatHistory"); // مسح السجل القديم
    document.getElementById("chatMessages").innerHTML = ""; // تنظيف الشاشة
    showView('chatView');
    
    if (pendingQuery) {
        appendMessage(pendingQuery, 'user');
        simulateAiResponse(pendingQuery);
        pendingQuery = ""; // تفريغ بعد الإرسال
    }
}

// 5. إرسال رسالة من داخل الشات
function sendChatMessage() {
    const input = document.getElementById("chatInput");
    const msg = input.value.trim();
    if (!msg) return;
    
    appendMessage(msg, 'user');
    input.value = "";
    simulateAiResponse(msg);
}

// 6. عرض الرسائل وحفظها في localStorage
function appendMessage(text, sender) {
    const container = document.getElementById("chatMessages");
    const wrapper = document.createElement("div");
    wrapper.classList.add("msg-wrapper", sender);

    const label = document.createElement("span");
    label.classList.add("sender-label");
    label.innerText = sender === 'user' ? 'المستخدم' : 'مساعد الإسلامية 🕌';

    const bubble = document.createElement("div");
    bubble.classList.add("msg-bubble", sender);
    bubble.innerText = text;

    wrapper.appendChild(label);
    wrapper.appendChild(bubble);
    container.appendChild(wrapper);
    container.scrollTop = container.scrollHeight;

    // حفظ حالة المحادثة
    localStorage.setItem("chatHistory", container.innerHTML);
}

function loadChatHistory() {
    const saved = localStorage.getItem("chatHistory");
    if (saved) document.getElementById("chatMessages").innerHTML = saved;
}

// رد تجريبي سريع
function simulateAiResponse(text) {
    setTimeout(() => {
        appendMessage(`أهلاً بك! تم استلام سؤالك بخصوص: ${text}`, 'ai');
    }, 600);
}

function handleEnter(e) { if (e.key === 'Enter') handleSearch(); }
function handleChatEnter(e) { if (e.key === 'Enter') sendChatMessage(); }
