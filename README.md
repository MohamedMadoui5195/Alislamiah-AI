<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Alislamiah AI Browser</title>

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
width:120px;
height:120px;
margin:auto;
border-radius:30px;
background:linear-gradient(135deg,#0077ff,#00c3ff);
display:flex;
justify-content:center;
align-items:center;
font-size:42px;
font-weight:bold;
box-shadow:0 0 35px rgba(0,153,255,.5);
}

h1{
margin-top:25px;
font-size:42px;
}

p{
margin-top:8px;
color:#c7d7ff;
font-size:18px;
margin-bottom:35px;
}

.search{
display:flex;
background:white;
border-radius:18px;
overflow:hidden;
}

.search input{
flex:1;
padding:18px;
border:none;
outline:none;
font-size:18px;
color: #333;
}

.search button{
width:90px;
border:none;
background:#0077ff;
color:white;
font-size:22px;
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
gap:15px;
margin-top:40px;
}

.item{
width:95px;
height:95px;
background:rgba(255,255,255,.08);
border:1px solid rgba(255,255,255,.15);
border-radius:20px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
cursor:pointer;
transition:.3s;
backdrop-filter:blur(10px);
text-decoration:none;
color:white;
}

.item:hover{
transform:translateY(-8px);
background:rgba(255,255,255,.15);
}

.item span{
font-size:34px;
margin-bottom:8px;
}

footer{
position:absolute;
bottom:20px;
width:100%;
text-align:center;
color:#9fb4d6;
font-size:14px;
}
</style>

<script>
function searchAI(){
    let inputField = document.getElementById("search");
    if(!inputField) return;
    let q = inputField.value.trim();

    if(q !== ""){
        let isQuestion = q.includes("؟") || q.toLowerCase().startsWith("كيف") || q.toLowerCase().startsWith("ما") || q.toLowerCase().startsWith("لماذا") || q.length > 25;
        
        if(isQuestion){
            window.location.href = "chat.html?q=" + encodeURIComponent(q);
        } else {
            window.location.href = "results.html?q=" + encodeURIComponent(q);
        }
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
<input id="search" type="text" placeholder="ابحث في الويب أو اطرح سؤالاً...">
<button onclick="searchAI()">🔍</button>
</div>

<div class="quick">
<a href="results.html?q=Google" class="item"><span>🌍</span>Google</a>
<a href="chat.html" class="item"><span>🤖</span>AI</a>
<a href="results.html?q=YouTube" class="item"><span>▶️</span>YouTube</a>
<a href="results.html?q=Quran" class="item"><span>📖</span>Quran</a>
<a href="settings.html" class="item"><span>⚙️</span>Settings</a>
<a href="results.html?q=Favorites" class="item"><span>⭐</span>Favorites</a>
</div>

</div>

<footer>
© 2026 Alislamiah AI Browser
</footer>

</body>
</html>
