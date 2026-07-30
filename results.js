import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const results = document.getElementById("results");

const params = new URLSearchParams(window.location.search);
const query = (params.get("q") || "").trim().toLowerCase();

async function loadSites(){

results.innerHTML="<p>جاري البحث...</p>";

try{

const snapshot=await getDocs(collection(db,"sites"));

results.innerHTML="";

let count=0;

snapshot.forEach((doc)=>{

const site=doc.data();

if(site.approved!==true) return;

const title=(site.title||"").toLowerCase();
const description=(site.description||"").toLowerCase();
const category=(site.category||"").toLowerCase();
const text = `${title} ${description} ${category}`;

if(query && !text.includes(query)) return;

count++;

let icon = "";

try{
const domain = new URL(site.url).origin;
icon = `${domain}/favicon.ico`;
}catch(e){
icon = "favicon.png";
}

results.innerHTML += `
<div class="result">

<div class="resultTop">

<img class="resultIcon"
src="${icon}"
onerror="this.src='favicon.png'">

<div>

<a class="resultTitle"
href="${site.url}"
target="_blank">

${site.title}

</a>

<a class="resultUrl"
href="${site.url}"
target="_blank">

${site.url}

</a>

</div>

</div>

<p class="resultDesc">

${site.description}

</p>

</div>
`;

});

if(count===0){

results.innerHTML=`
<div style="text-align:center;padding:40px">
<h2>لا توجد نتائج</h2>
<p>جرّب كلمات بحث أخرى.</p>
</div>
`;

}

}catch(error){

console.error(error);

results.innerHTML=`
<div style="text-align:center;padding:40px;color:red;">
حدث خطأ أثناء تحميل النتائج.
</div>
`;

}

}

loadSites();