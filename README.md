<!DOCTYPE html>

<img src="icon.png" width="70">

<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alislamiah-AI</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- 1. الرئيسية الأصليّة -->
    <div id="searchView" class="view active-view">
        <div class="home-container">
            <h1 class="main-title">Alislamiah-AI</h1>
            <p class="search-subtext">ابحث أو اطرح سؤالك</p>
            <input type="text" id="searchInput" class="main-input" placeholder="ابحث أو اطرح سؤالك..." onkeypress="handleEnter(event)">
            <button class="main-btn" onclick="handleSearch()">إرسال</button>
        </div>
    </div>

    <!-- 2. واجهة التخيير (تظهر فور الضغط على إرسال) -->
    <div id="decisionView" class="view">
        <div class="decision-container">
            <div class="header-nav">
                <button class="btn-back" onclick="showView('searchView')">&lt; Back</button>
                <h3>Alislamiah-AI</h3>
            </div>
            <h2 class="decision-title">أتود الاستمرار في المحادثة السابقة أم بدء تشات جديد؟</h2>
            <button class="gradient-btn" onclick="continueChat()">متابعة المحادثة السابقة</button>
            <button class="gradient-btn" onclick="startNewChat()">بدء محادثة جديدة</button>
        </div>
    </div>

    <!-- 3. واجهة التشات -->
    <div id="chatView" class="view">
        <div class="chat-container">
            <div class="header-nav">
                <button class="btn-back" onclick="showView('searchView')">&lt; Back</button>
                <h3>Alislamiah-AI</h3>
            </div>
            <div id="chatMessages" class="chat-messages"></div>
            <div class="chat-input-bar">
                <input type="text" id="chatInput" placeholder="اكتب سؤالك..." onkeypress="handleChatEnter(event)">
                <button class="send-btn" onclick="sendChatMessage()">إرسال</button>
            </div>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>
