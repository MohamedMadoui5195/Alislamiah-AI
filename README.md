<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alislamiah-AI</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- 1. الرئيسية المطابقة للأصل تماماً -->
    <div id="searchView" class="view active-view">
        <div class="header-top">
            <h2 class="top-logo">Alislamiah-AI</h2>
        </div>

        <div class="home-content">
            <span class="code-tag">&lt;DOCTYPE html!&gt;</span>
            
            <div class="logo-img-wrapper">
                <img src="icon.png" width="70" alt="Logo" class="main-img">
            </div>

            <h1 class="brand-title">
                Alislamiah<br>
                <span>AI</span>
            </h1>

            <p class="sub-title">ابحث أو اطرح سؤالك</p>

            <form action="https://www.google.com/search" method="GET" class="search-form" id="searchForm">
                <input type="text" name="q" id="searchInput" class="main-input" placeholder="ابحث أو اطرح سؤالك..." required>
                <button type="submit" class="main-btn">إرسال</button>
            </form>
        </div>
    </div>

    <!-- 2. واجهة التخيير -->
    <div id="decisionView" class="view">
        <div class="decision-container">
            <div class="top-nav">
                <button class="back-link" onclick="showView('searchView')">&lt; Back</button>
                <span class="logo-title-small">Alislamiah-AI</span>
            </div>
            <h3 class="question-text">أتود الاستمرار في المحادثة السابقة أم بدء تشات جديد؟</h3>
            <button class="grad-btn" onclick="continueChat()">متابعة المحادثة السابقة</button>
            <button class="grad-btn" onclick="startNewChat()">بدء محادثة جديدة</button>
        </div>
    </div>

    <!-- 3. واجهة التشات -->
    <div id="chatView" class="view">
        <div class="chat-wrapper">
            <div class="top-nav">
                <button class="back-link" onclick="showView('searchView')">&lt; Back</button>
                <span class="logo-title-small">Alislamiah-AI</span>
            </div>
            <div id="chatMessages" class="messages-area"></div>
            <div class="bottom-input-bar">
                <input type="text" id="chatInput" placeholder="اكتب سؤالك..." onkeypress="handleChatEnter(event)">
                <button class="chat-send-btn" onclick="sendChatMessage()">إرسال</button>
            </div>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>
