<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#08142b">
<link rel="search" type="application/opensearchdescription+xml" href="opensearch.xml" title="Alislamiah AI">

<title>Alislamiah-AI Browser</title>

<style>
/* =====================================================
   RESET
===================================================== */
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-tap-highlight-color:transparent;
}

html{
    width:100%;
    min-height:100%;
    scroll-behavior:smooth;
}

body{
    width:100%;
    min-height:100vh;
    background:
        radial-gradient(circle at 50% 25%, rgba(0,115,255,.18), transparent 34%),
        radial-gradient(circle at 100% 70%, rgba(0,190,255,.10), transparent 35%),
        linear-gradient(145deg, #040a17 0%, #07142a 55%, #06172c 100%);
    color:#ffffff;
    font-family: Arial, "Segoe UI", Tahoma, sans-serif;
    overflow-x:hidden;
}

:root{
    --blue:#087fff;
    --blue-light:#08b9ef;
    --text:#ffffff;
    --muted:#aebbd2;
    --border: rgba(255,255,255,.14);
    --card: rgba(255,255,255,.075);
}

.app{
    width:100%;
    max-width:700px;
    min-height:100vh;
    margin:0 auto;
    padding: 14px 14px 30px;
}

.topbar{
    width:100%;
    height:48px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:15px;
    margin-bottom:8px;
}

.top-button{
    width:44px;
    height:44px;
    border-radius:14px;
    border: 1px solid rgba(255,255,255,.13);
    background: rgba(255,255,255,.055);
    color:#ffffff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:21px;
    cursor:pointer;
    transition:.18s;
}

.top-button:active{
    transform:scale(.92);
}

.top-title{
    font-size:15px;
    font-weight:700;
    letter-spacing:.3px;
}

.brand{
    text-align:center;
    margin-top:4px;
}

.brand-name{
    color:#168cff;
    font-size:34px;
    line-height:1.2;
    font-weight:800;
    letter-spacing:-1px;
    text-shadow: 0 0 30px rgba(22,140,255,.25);
}

.brand-line{
    width:94%;
    height:1px;
    margin: 12px auto 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.70), transparent);
}

.ai-logo{
    width:165px;
    height:165px;
    margin: 28px auto 20px;
    border-radius:43px;
    display:flex;
    align-items:center;
    justify-content:center;
    background: linear-gradient(145deg, #087cff 0%, #08b9ee 100%);
    box-shadow: 0 18px 55px rgba(0,120,255,.32), inset 0 1px 1px rgba(255,255,255,.38);
    position:relative;
    overflow:hidden;
}

.ai-logo::before{
    content:"";
    position:absolute;
    inset:-5px;
    border-radius:47px;
    border: 1px solid rgba(70,185,255,.20);
}

.ai-logo span{
    color:#ffffff;
    font-size:60px;
    font-weight:800;
    position:relative;
    z-index:2;
}

.ai-logo img{
    width:100%;
    height:100%;
    object-fit:cover;
    position:relative;
    z-index:2;
}

.hero{
    width:100%;
    text-align:center;
}

.hero h1{
    font-size:31px;
    line-height:1.3;
    font-weight:800;
}

.hero-line{
    width:87%;
    height:1px;
    margin: 17px auto 14px;
    background: rgba(255,255,255,.65);
}

.hero p{
    color:#bdc9df;
    font-size:18px;
    line-height:1.8;
}

.search-area{
    width:100%;
    margin-top:23px;
}

.search-box{
    width:100%;
    height:64px;
    display:flex;
    direction:ltr;
    background:#ffffff;
    border-radius:21px;
    overflow:hidden;
    box-shadow: 0 15px 45px rgba(0,0,0,.27), 0 0 30px rgba(0,130,255,.08);
}

.search-button{
    width:84px;
    min-width:84px;
    border:none;
    outline:none;
    background: linear-gradient(145deg, #087fff, #0870e4);
    color:#ffffff;
    font-size:27px;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:.15s;
}

.search-button:active{
    transform:scale(.96);
}

.search-input{
    width:100%;
    min-width:0;
    border:none;
    outline:none;
    background:#ffffff;
    color:#1d2938;
    font-size:17px;
    padding: 0 18px;
    text-align:right;
    direction:rtl;
}

.search-input::placeholder{
    color:#999999;
}

.shortcuts-title{
    text-align:center;
    color:#aebbd2;
    font-size:15px;
    margin: 27px 0 14px;
}

.shortcuts{
    width:100%;
    display:grid;
    grid-template-columns: repeat(3,1fr);
    gap:12px;
}

.shortcut{
    min-height:142px;
    border-radius:24px;
    border: 1px solid rgba(255,255,255,.14);
    background: linear-gradient(145deg, rgba(255,255,255,.095), rgba(255,255,255,.045));
    box-shadow: 0 12px 30px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.04);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:10px;
    cursor:pointer;
    user-select:none;
    transition: transform .16s ease, background .16s ease, border-color .16s ease;
}

.shortcut:hover{
    background: rgba(255,255,255,.11);
    border-color: rgba(25,145,255,.40);
}

.shortcut:active{
    transform:scale(.94);
}

.shortcut-icon{
    width:60px;
    height:60px;
    border-radius:18px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:38px;
}

.shortcut-name{
    color:#ffffff;
    font-size:15px;
    font-weight:600;
}

.footer{
    text-align:center;
    margin-top:30px;
    padding-bottom:5px;
    color:#91a5c5;
    font-size:14px;
    line-height:1.8;
}

.footer strong{
    color:#b9c8e2;
}

.menu-overlay{
    position:fixed;
    inset:0;
    background: rgba(0,0,0,.62);
    opacity:0;
    visibility:hidden;
    transition:.25s;
    z-index:1000;
}

.menu-overlay.show{
    opacity:1;
    visibility:visible;
}

.side-menu{
    position:absolute;
    top:0;
    right:0;
    width:82%;
    max-width:330px;
    height:100%;
    padding: 24px 17px;
    background: linear-gradient(160deg, #0b1930, #07101f);
    border-left: 1px solid rgba(255,255,255,.09);
    transform: translateX(100%);
    transition:.30s;
    overflow-y:auto;
}

.menu-overlay.show .side-menu{
    transform: translateX(0);
}

.menu-header{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:28px;
}

.menu-header h2{
    font-size:20px;
}

.close-menu{
    width:42px;
    height:42px;
    border: 1px solid rgba(255,255,255,.13);
    border-radius:13px;
    background: rgba(255,255,255,.06);
    color:#ffffff;
    font-size:19px;
    cursor:pointer;
}

.menu-item{
    width:100%;
    height:56px;
    margin-bottom:10px;
    border:none;
    border-radius:15px;
    background: rgba(255,255,255,.055);
    color:#ffffff;
    display:flex;
    align-items:center;
    gap:14px;
    padding: 0 17px;
    font-size:15px;
    cursor:pointer;
    text-align:right;
}

.menu-item:active{
    background: rgba(20,130,255,.20);
}
</style>

</head>

<body>

<!-- =====================================================
     MAIN APP (القسم الرئيسي)
===================================================== -->
<div id="home-view" class="app">

    <!-- TOP BAR -->
    <div class="topbar">
        <button class="top-button" type="button" onclick="openMenu()">☰</button>
        <div class="top-title">Alislamiah AI</div>
    </div>

    <!-- BRAND -->
    <div class="brand">
        <div class="brand-name">Alislamiah-AI</div>
        <div class="brand-line"></div>
    </div>

    <!-- AI LOGO -->
    <div class="ai-logo" id="mainAiLogo">
        <span>AI</span>
    </div>

    <!-- HERO -->
    <div class="hero">
        <h1>Alislamiah AI Browser</h1>
        <div class="hero-line"></div>
        <p>الذكاء الاصطناعي • البحث • السرعة • الخصوصية</p>
    </div>

    <!-- SEARCH -->
    <div class="search-area">
        <div class="search-box">
            <button class="search-button" type="button" onclick="performSearch()">🔍</button>
            <input id="searchInput" class="search-input" type="text" autocomplete="off" placeholder="ابحث في الويب أو اطرح سؤالاً..." onkeydown="handleSearchKey(event)">
        </div>
    </div>

    <!-- SHORTCUT TITLE -->
    <div class="shortcuts-title">الوصول السريع</div>

    <!-- SHORTCUTS -->
    <div class="shortcuts">
        <div class="shortcut" onclick="goToShortcut('youtube', 'YouTube', 'https://www.youtube.com', 'https://www.youtube.com/favicon.ico')">
            <div class="shortcut-icon">▶️</div>
            <div class="shortcut-name">YouTube</div>
        </div>

        <div class="shortcut" onclick="goToShortcut('ai', 'AI Assistant', 'results.html?shortcut=ai', '')">
            <div class="shortcut-icon">🤖</div>
            <div class="shortcut-name">AI</div>
        </div>

        <div class="shortcut" onclick="goToShortcut('alislamiah', 'Alislamiah', 'https://www.alislamiah.com', 'icon.png')">
            <div class="shortcut-icon">🌐</div>
            <div class="shortcut-name">Alislamiah</div>
        </div>

        <div class="shortcut" onclick="goToShortcut('favorites', 'Favorites', 'favorites.html', '')">
            <div class="shortcut-icon">⭐</div>
            <div class="shortcut-name">Favorites</div>
        </div>

        <div class="shortcut" onclick="window.location.href='Settings.html'">
            <div class="shortcut-icon">⚙️</div>
            <div class="shortcut-name">Settings</div>
        </div>

        <div class="shortcut" onclick="goToShortcut('quran', 'Quran', 'quran.html', '')">
            <div class="shortcut-icon">📖</div>
            <div class="shortcut-name">Quran</div>
        </div>
    </div>

    <!-- FOOTER -->
    <div class="footer">
        <strong>Alislamiah AI Browser</strong><br>2026 ©
    </div>

</div>

<!-- =====================================================
     SIDE MENU
===================================================== -->
<div id="menuOverlay" class="menu-overlay" onclick="closeMenu(event)">
    <div class="side-menu" onclick="event.stopPropagation()">
        <div class="menu-header">
            <h2>Alislamiah AI</h2>
            <button class="close-menu" type="button" onclick="closeMenu()">✕</button>
        </div>

        <button class="menu-item" type="button" onclick="window.location.href='index.html'; closeMenu();">🏠 الرئيسية</button>
        <button class="menu-item" type="button" onclick="goToShortcut('quran', 'Quran', 'quran.html', '')">📖 Quran</button>
        <button class="menu-item" type="button" onclick="goToShortcut('favorites', 'Favorites', 'favorites.html', '')">⭐ Favorites</button>
        <button class="menu-item" type="button" onclick="goToShortcut('ai', 'AI Assistant', 'results.html?shortcut=ai', ''); closeMenu();">🤖 AI</button>
        <button class="menu-item" type="button" onclick="window.location.href='Settings.html'">⚙️ Settings</button>
        <button class="menu-item" type="button" onclick="goToShortcut('alislamiah', 'Alislamiah', 'https://www.alislamiah.com', 'icon.png')">🌐 Alislamiah</button>
        <button class="menu-item" type="button" onclick="goToShortcut('youtube', 'YouTube', 'https://www.youtube.com', 'https://www.youtube.com/favicon.ico')">▶️ YouTube</button>
        <!-- رابط السجل المضاف هنا -->
        <button class="menu-item" type="button" onclick="window.location.href='history.html'; closeMenu();">🕒 History</button>
    </div>
</div>

<script>
const RESULTS_PAGE = "results.html";
const HISTORY_KEY = "alislamiah_history";

/* دالة لحفظ السجل في LocalStorage */
function addToHistory(title, url, icon) {
    try {
        let history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
        // إضافة العنصر الجديد في البداية
        history.unshift({
            title: title,
            url: url,
            icon: icon || "",
            time: Date.now()
        });
        // الاحتفاظ بآخر 100 عنصر فقط لمنع الامتلأ
        if (history.length > 100) {
            history = history.slice(0, 100);
        }
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch (e) {
        console.error(e);
    }
}

/* تحديث أيقونة AI الكبرى حسب محرك البحث */
function updateMainAiLogo() {
    const engine = localStorage.getItem("searchEngine") || "Alislamiah";
    const logoContainer = document.getElementById("mainAiLogo");

    if (!logoContainer) return;

    if (engine === "Alislamiah") {
        logoContainer.innerHTML = '<img src="icon.png" alt="Alislamiah">';
    } else if (engine === "Google") {
        logoContainer.innerHTML = '<img src="https://www.google.com/favicon.ico" alt="Google" style="width:70px; height:70px; object-fit:contain;">';
    } else if (engine === "Microsoft Bing") {
        logoContainer.innerHTML = '<img src="https://www.bing.com/sa/simg/favicon-2x.ico" alt="Microsoft Bing" style="width:70px; height:70px; object-fit:contain;">';
    }
}

window.addEventListener("load", function() {
    updateMainAiLogo();
});

window.addEventListener("storage", function(event) {
    if (event.key === "searchEngine") {
        updateMainAiLogo();
    }
});

function goToShortcut(shortcut, title, targetUrl, icon){
    addToHistory(title || shortcut, targetUrl || (RESULTS_PAGE + "?shortcut=" + shortcut), icon);
    const url = RESULTS_PAGE + "?shortcut=" + encodeURIComponent(shortcut);
    window.location.href = url;
}

function performSearch(){
    const input = document.getElementById("searchInput");
    const query = input.value.trim();
    if(query === ""){ input.focus(); return; }
    
    // تسجيل عملية البحث في السجل
    const engine = localStorage.getItem("searchEngine") || "Alislamiah";
    let searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
    if(engine === "Alislamiah") searchUrl = RESULTS_PAGE + "?q=" + encodeURIComponent(query);
    else if(engine === "Microsoft Bing") searchUrl = "https://www.bing.com/search?q=" + encodeURIComponent(query);

    addToHistory(query, searchUrl, engine === "Google" ? "https://www.google.com/favicon.ico" : (engine === "Microsoft Bing" ? "https://www.bing.com/favicon.ico" : "icon.png"));

    const url = RESULTS_PAGE + "?q=" + encodeURIComponent(query);
    window.location.href = url;
}

function handleSearchKey(event){
    if(event.key === "Enter"){
        event.preventDefault();
        performSearch();
    }
}

function openMenu(){
    const overlay = document.getElementById("menuOverlay");
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeMenu(event){
    if(event){
        const overlay = document.getElementById("menuOverlay");
        if(event.target !== overlay) return;
    }
    const overlay = document.getElementById("menuOverlay");
    overlay.classList.remove("show");
    document.body.style.overflow = "";
}

document.addEventListener("keydown", function(event){
    if(event.key === "Escape"){
        document.getElementById("menuOverlay").classList.remove('show');
        document.body.style.overflow = "";
    }
});
</script>

</body>
</html>
