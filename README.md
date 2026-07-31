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

    <header class="header-top">
        <div class="logo-title">Alislamiah-AI</div>
    </header>

    <div class="home-body">
        <p class="code-text">&lt;DOCTYPE html!&gt;</p>

        <h1 class="main-brand">Alislamiah<br>AI</h1>

        <p class="search-label">ابحث أو اطرح سؤالك</p>

        <form action="https://www.google.com/search" method="GET" class="search-form">
            <input type="text" name="q" placeholder="ابحث أو اطرح سؤالك..." required>
            <br>
            <button type="submit" class="send-home-btn">إرسال</button>
        </form>
    </div>

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
