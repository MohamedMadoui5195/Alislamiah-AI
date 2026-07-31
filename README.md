
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Alislamiah-AI</title>
<link rel="stylesheet" href="style.css?v=103">
<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}
body{
background:#0b1020;
color:white;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
overflow:hidden;
}
.background{
position:absolute;
width:100%;
height:100%;
background:
radial-gradient(circle at 20% 20%,#1e5eff55,transparent 30%),
radial-gradient(circle at 80% 30%,#00bfff44,transparent 25%),
radial-gradient(circle at 50% 80%,#0066ff33,transparent 30%);
filter:blur(20px);
}
.container{
position:relative;
width:90%;
max-width:850px;
text-align:center;
z-index:1;
}
.logo{
width:100px;
height:100px;
margin:auto;
border-radius:25px;
background:linear-gradient(135deg,#0077ff,#00c3ff);
display:flex;
justify-content:center;
align-items:center;
font-size:36px;
font-weight:bold;
box-shadow:0 0 35px rgba(0,153,255,.5);
}
h1{
margin-top:20px;
font-size:36px;
}
p{
margin-top:6px;
color:#c7d7ff;
font-size:16px;
margin-bottom:25px;
}
.search{
display:flex;
background:white;
border-radius:18px;
overflow:hidden;
}
.search input{
flex:1;
padding:16px;
border:none;
outline:none;
font-size:18px;
}
.search button{
width:80px;
border:none;
background:#0077ff;
color:white;
font-size:20px;
cursor:pointer;
transition:0.3s;
}
.search button:hover{
background:#005bb5;
}
.quick{
display:flex;
justify-content:center;
flex-wrap:wrap;
gap:12px;
margin-top:30px;
}
.item{
width:85px;
height:85px;
background:rgba(255,255,255,.08);
border:1px solid rgba(255,255,255,.15);
border-radius:18px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
cursor:pointer;
transition:.3s;
backdrop-filter:blur(10px);
text-decoration:none;
color:white;
font-size:13px;
}
.item:hover{
transform:translateY(-5px);
background:rgba(255,255,255,.15);
}
.item span{
font-size:28px;
margin-bottom:5px;
}
footer{
position:absolute;
bottom:15px;
width:100%;
text-align:center;
color:#9fb4d6;
font-size:13px;
}
</style>

<script>
function searchAI(){
let q = document.getElementById("search").value.trim();
if(q !== ""){
window.location.href = "results.html?q=" + encodeURIComponent(q);
}
}

document.addEventListener("DOMContentLoaded", () => {
let inputField = document.getElementById("search");
if(inputField){
inputField.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
searchAI();
}
});
}
});
</script>
</head>

<body>

<div class="background"></div>

<div class="container">
    <div class="logo">AI</div>
    <h1>Alislamiah AI Browser</h1>
    <p>الذكاء الاصطناعي • البحث • السرعة • الخصوصية</p>

    <div class="search">
        <input id="search" type="text" placeholder="ابحث أو اطرح سؤالك...">
        <button onclick="searchAI()">🔍</button>
    </div>

    <div class="quick">
        <a href="results.html?q=Firebase" class="item"><span>🔥</span>Firebase</a>
        <a href="results.html?q=Alislamiah_net" class="item"><span>🌐</span>Alislamiah</a>
        <a href="results.html?q=YouTube" class="item"><span>▶️</span>YouTube</a>
        <a href="results.html?q=Quran" class="item"><span>📖</span>Quran</a>
        <a href="settings.html" class="item"><span>⚙️</span>Settings</a>
        <a href="results.html?q=Favorites" class="item"><span>⭐</span>Favorites</a>
    </div>
</div>

<footer>
© 2026 Alislamiah AI Browser
</footer>

<!-- Firebase Auth Guard -->
<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
    import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyBFPwbDSeMzI5e0L8DeXNZovcr47JtlZnU",
      authDomain: "alislamiah-ai.firebaseapp.com",
      projectId: "alislamiah-ai",
      storageBucket: "alislamiah-ai.appspot.com",
      messagingSenderId: "956902867596",
      appId: "1:956902867596:web:0e99d136f74565535f1a9",
      measurementId: "G-MV3BQG10T2"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = "signin.html";
      }
    });
</script>

</body>
</html>
