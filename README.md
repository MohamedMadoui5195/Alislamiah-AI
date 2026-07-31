<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>الإسلامية - Alislamiah</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- 1. واجهة البحث الرئيسية (Search View) -->
    <div id="searchView" class="view active-view">
        <div class="search-card">
            <h1 class="logo-title">الإسلامية</h1>
            <p class="subtitle">محرك البحث والذكاء الاصطناعي الفائق</p>
            <div class="input-box">
                <input type="text" id="searchInput" placeholder="ابحث عن موقع أو اسأل الذكاء الاصطناعي..." onkeypress="handleEnterKey(event)">
                <button onclick="handleSearch()">بحث</button>
            </div>
        </div>
    </div>

    <!-- 2. واجهة التخيير (Decision View) -->
    <div id="decisionView" class="view">
        <div class="decision-card">
            <h2>لديك محادثة سابقة قائمة!</h2>
            <p>هل ترغب في مواصلة حوارك السابق أم بدء محادثة جديدة؟</p>
            <div class="decision-buttons">
                <button class="btn-primary" onclick="continueChat()">متابعة المحادثة السابقة</button>
                <button class="btn-secondary" onclick="startNewChat()">بدء محادثة جديدة</button>
            </div>
            <button class="btn-link" onclick="showView('searchView')">الرجوع للرئيسية</button>
        </div>
    </div>

    <!-- 3. واجهة المحادثة والذكاء الاصطناعي (Chat View) -->
    <div id="chatView" class="view">
        <div class="chat-container">
            <!-- شريط علوي -->
            <div class="chat-header">
                <h3>مساعد الإسلامية Smart AI</h3>
                <button onclick="showView('searchView')" class="btn-back">الرئيسية ↩</button>
            </div>

            <!-- منطقة عرض الرسائل -->
            <div id="chatMessages" class="chat-messages">
                <!-- الرسائل ستظهر هنا ديناميكياً -->
            </div>

            <!-- مربع إرسال الرسالة -->
            <div class="chat-input-area">
                <input type="text" id="chatInput" placeholder="اكتب سؤالك هنا..." onkeypress="handleChatEnter(event)">
                <button onclick="sendChatMessage()">إرسال</button>
            </div>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>
