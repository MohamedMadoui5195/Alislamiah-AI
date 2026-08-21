// قاعدة البيانات المحلية الأولية للتجربة
const localLibrary = [
    { keywords: ["صيام", "مريض"], answer: "يجوز للمريض الذي يرجى برؤه الفطر في رمضان وعليه القضاء." }
];

// دالة معالجة رسالة المستخدم وإرسالها للتشات
async function processUserMessage() {
    const inputField = document.getElementById('ai-input');
    const userText = inputField.value.trim();
    if (!userText) return;

    const chatHistory = document.getElementById('chat-history');
    if (!chatHistory) return;

    // عرض رسالة المستخدم بتدرج إنستغرام
    chatHistory.innerHTML += `
        <div class="flex justify-end mb-2">
            <div class="chat-bubble insta-gradient text-white">${userText}</div>
        </div>`;
    inputField.value = '';

    // جلب الرد ومعالجته
    const response = await getAIResponse(userText);
    renderBotResponse(response, chatHistory);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// دالة محاكاة منطق البحث والقواعد التي اتفقنا عليها
async function getAIResponse(query) {
    const localMatch = localLibrary.find(item => item.keywords.some(kw => query.includes(kw)));
    if (localMatch) {
        return { type: "direct", text: localMatch.answer };
    }

    // شرط الرفض الصارم عند انعدام المصدر
    if (query.includes("مجهول")) {
        return { type: "strict_reject", text: "تعذر إمكانية الجواب على سؤالك" };
    }

    // شرط منح الخيار في المسائل غير المؤكدة أو الاحتمالية
    if (query.includes("هل")) {
        return { type: "uncertain", text: "هي هكذا..... ولك القرار لأن المعلومة غير مؤكدة." };
    }

    // الرد الافتراضي في حال نجاح البحث
    return { type: "direct", text: "تم جلب هذه الإجابة من المصادر الموثوقة عبر محرك البحث." };
}

// دالة عرض رد الذكاء الاصطناعي في واجهة المحادثة
function renderBotResponse(response, container) {
    let htmlContent = '';
    
    if (response.type === "strict_reject") {
        htmlContent = `<div class="chat-bubble bg-red-600 text-white">${response.text}</div>`;
    } else if (response.type === "uncertain") {
        htmlContent = `
            <div class="chat-bubble insta-border bg-white">
                ${response.text}
                <div class="mt-3 flex gap-2">
                    <button class="bg-gray-200 px-3 py-1 rounded text-sm font-bold text-black">عرض التفاصيل</button>
                    <button class="bg-gray-200 px-3 py-1 rounded text-sm font-bold text-black">إلغاء</button>
                </div>
            </div>`;
    } else {
        htmlContent = `<div class="chat-bubble insta-border bg-white">${response.text}</div>`;
    }
    
    container.innerHTML += `<div class="flex justify-start mb-2">${htmlContent}</div>`;
}
