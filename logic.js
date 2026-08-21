// logic.js - محرك البحث الصارم

async function processUserMessage(userQuery) {
    // 1. البحث في قاعدة البيانات الداخلية (أولاً)
    let response = await searchInInternalDatabase(userQuery);
    if (response) return displayResponse(response);

    // 2. البحث في مواقع التطبيق (ثانياً)
    response = await searchInAppSources(userQuery);
    if (response) return displayResponse(response);

    // 3. البحث في جوجل (ثالثاً وأخيراً)
    response = await searchInGoogle(userQuery);
    if (response) {
        return displayResponse(response);
    } else {
        // الرد في حال عدم العثور على نتيجة موثوقة (شرط الصرامة)
        return displayResponse("عذراً، المعلومات غير مؤكدة في المصادر المتاحة.");
    }
}

// دوال المحاكاة للبحث
async function searchInInternalDatabase(query) {
    // هنا تضع فتاوى جاهزة مخزنة مسبقاً
    if (query.includes("صيام")) return "الصيام للمريض يجوز فيه الفطر إذا كان في ذلك مشقة معتبرة.";
    return null; 
}

async function searchInAppSources(query) {
    // هنا يتم البحث في الروابط المحددة داخل تطبيقك
    return null; 
}

async function searchInGoogle(query) {
    // هنا يتم ربط API بحث جوجل
    return "تم العثور على نتيجة من محرك بحث جوجل...";
}

function displayResponse(text) {
    const history = document.getElementById('chat-history');
    history.innerHTML += `
        <div class="flex justify-start">
            <div class="border-gradient text-gray-800 px-5 py-3 rounded-2xl max-w-[80%]">${text}</div>
        </div>`;
    history.scrollTop = history.scrollHeight;
}
