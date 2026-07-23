<!DOCTYPE html>


<img src="icon.png" width="70">


<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Alislamiah AI</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Tahoma,Arial,sans-serif;
}

body{
background:#ffffff;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}

.container{
width:90%;
max-width:700px;
text-align:center;
}

.logo{
font-size:52px;
font-weight:bold;
color:#1565C0;
margin-bottom:10px;
}

.subtitle{
font-size:18px;
color:#666;
margin-bottom:40px;
}

.searchBox{
width:100%;
height:60px;
border:none;
border-radius:35px;
padding:0 25px;
font-size:20px;
outline:none;
box-shadow:0 2px 10px rgba(0,0,0,.15);
transition:.3s;
}

.searchBox:focus{
box-shadow:0 4px 18px rgba(0,0,0,.25);
}

.searchButton{
margin-top:25px;
padding:14px 45px;
font-size:20px;
background:#1565C0;
color:white;
border:none;
border-radius:30px;
cursor:pointer;
}

.searchButton:hover{
background:#0D47A1;
}

</style>

</head>

<body>

<div class="container">

<div class="logo">
Alislamiah AI
</div>

<div class="subtitle">
ابحث أو اطرح سؤالك
</div>

<input
id="search"
class="searchBox"
type="text"
placeholder="ابحث أو اطرح سؤالك..."
onkeydown="if(event.key==='Enter')goSearch();">

<br>

<button class="searchButton" onclick="goSearch()">
إرسال
</button>

</div>

<script>

function goSearch(){

let q=document.getElementById("search").value.trim();

if(q==="") return;

window.location.href="results.html?q="+encodeURIComponent(q);

}

</script>

</body>
</html>
