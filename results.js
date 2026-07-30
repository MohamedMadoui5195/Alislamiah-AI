import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const results = document.getElementById("results");

const params = new URLSearchParams(window.location.search);
const search = (params.get("q") || "").trim().toLowerCase();

async function loadSites() {

results.innerHTML="<p>جاري البحث...</p>";

try{

const querySnapshot=await getDocs(collection(db,"sites"));

results.innerHTML="";

let found=false;

querySnapshot.forEach((doc)=>{

const site=doc.data();

if(site.approved!==true) return;

const text=(
(site.title||"")+" "+
(site.description||"")+" "+
(site.category||"")
).toLowerCase();if(search!=="" && !text.includes(search)) return;

found=true;

const domain=new URL(site.url).hostname;

results.innerHTML+=`
<div class="result">

<div class="resultHeader">

<img src="https://www.google.com/s2/favicons?domain=${domain}&sz=64">

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

if(!found){

results.innerHTML=`
<p style="text-align:center;
font-size:20px;
margin-top:40px;">
لا توجد نتائج مطابقة.
</p>
`;

}

}catch(error){

console.error(error);

results.innerHTML=`
<p style="text-align:center;
color:red;">
حدث خطأ أثناء البحث.
</p>
`;

}

}

loadSites();