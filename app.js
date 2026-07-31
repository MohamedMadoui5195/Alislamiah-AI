function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
    const target = document.getElementById(viewId);
    if (target) target.classList.add('active-view');
}

// بحث جوجل الطبيعي المباشر تماماً مثل القديم
function triggerSearch() {
    const input = document.getElementById("searchInput");
    const query = input.value.trim();
    if (!query) return;

    // فحص إن كان رابط موقع مباشر
    if ((query.includes(".") && !query.includes(" ")) || query.startsWith("http")) {
        window.location.href = query.startsWith("http") ? query : "https://" + query;
    } else {
        // توجيه لبحث جوجل مباشرة بدون أي واجهات إضافية
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

// فتح واجهة التشات الجديدة فقط عند الضغط على زر التشات
function openChatInterface() {
    showView('chatView');
    loadChatHistory();
}

function sendChatMessage() {
    const input = document.getElementById("chatInput");
    const msg = input.value.trim();
    if (!msg) return;
    
    appendMessage(msg, 'user');
    input.value = "";
    simulateAiResponse(msg);
}

function appendMessage(text, sender) {
    const container = document.getElementById("chatMessages");
    const item = document.createElement("div");
    item.classList.add("msg-item", sender);

    const label = document.createElement("span");
    label.classList.add("msg-label");
    label.innerText = sender === 'user' ? 'المستخدم' : 'مساعد الإسلامية 🕌';

    const bubble = document.createElement("div");
    bubble.classList.add("bubble", sender);
    bubble.innerText = text;

    item.appendChild(label);
    item.appendChild(bubble);
    container.appendChild(item);
    container.scrollTop = container.scrollHeight;

    localStorage.setItem("chatHistory", container.innerHTML);
}

function loadChatHistory() {
    const saved = localStorage.getItem("chatHistory");
    if (saved) document.getElementById("chatMessages").innerHTML = saved;
}

function simulateAiResponse(text) {
    setTimeout(() => {
        appendMessage(`أهلاً بك! تم استلام رسالتك في التشات: ${text}`, 'ai');
    }, 600);
}

function handleChatEnter(e) { 
    if (e.key === 'Enter') sendChatMessage(); 
}
