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