<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نتائج البحث</title>
    <style>
        body {
            background: #0b1020;
            color: white;
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        .top-nav {
            display: flex;
            gap: 10px;
            align-items: center;
            margin-bottom: 20px;
        }
        .top-nav button, .top-nav input {
            padding: 10px 15px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.15);
            background: rgba(255, 255, 255, 0.08);
            color: white;
        }
        .top-nav input {
            flex-grow: 1;
        }
        .result-card {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            padding: 20px;
            margin-bottom: 15px;
            border-radius: 15px;
        }
        .result-card h3 {
            color: #00c3ff;
            margin-bottom: 8px;
        }
        .result-card p {
            color: #c7d7ff;
            margin-bottom: 10px;
        }
        a { 
            color: #fff; 
            background: #0077ff; 
            padding: 8px 15px; 
            border-radius: 8px; 
            text-decoration: none; 
            display: inline-block;
        }
        .bottom-nav {
            display: flex;
            justify-content: space-around;
            margin-top: 30px;
            padding-top: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.15);
        }
        .bottom-nav button {
            padding: 10px 20px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.15);
            background: rgba(255, 255, 255, 0.08);
            color: white;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <!-- الشريط العلوي للأزرار والبحث -->
    <div class="top-nav">
        <button onclick="history.back()">رجوع</button>
        <input type="text" id="search-input" placeholder="ابحث هنا...">
        <button onclick="performSearch()">بحث</button>
    </div>

    <!-- حاوية عرض النتائج الخاصة بك -->
    <div id="results-container"></div>

    <!-- الأزرار السفلية (بدون ربط نيوز) -->
    <div class="bottom-nav">
        <button onclick="location.href='index.html'">الرئيسية</button>
    </div>

    <script>
        // قاعدة البيانات الخاصة بك (جميع النتائج)
        const database = [
            {
                title: "Alarabiya.net",
                description: "أهم الأخبار العاجلة من العالم العربي والعالم",
                url: "https://www.alarabiya.net",
                keywords: "alarabiya, news, أخبار, عربي"
            },
            {
                title: "موقع إخباري تاني",
                description: "هذا موقع تجريبي آخر للتأكد من عرض جميع النتائج",
                url: "https://www.example.com",
                keywords: "example, test, news, أخبار"
            }
        ];

        // التقاط كلمة البحث من الرابط
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('q');
        let container = document.getElementById("results-container");

        if (query) {
            document.getElementById("search-input").value = query;
            
            // تصفية النتائج من قاعدة البيانات حسب ما كتبه المستخدم
            let filteredResults = database.filter(item => 
                item.title.toLowerCase().includes(query.toLowerCase()) || 
                item.keywords.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase())
            );

            if (filteredResults.length > 0) {
                displayResults(filteredResults);
            } else {
                container.innerHTML = `<p style="text-align: center; color: #ff7676;">لا توجد نتائج مطابقة لـ: "${query}"</p>`;
            }
        } else {
            // عرض كل قاعدة البيانات إذا لم يتم إدخال بحث
            displayResults(database);
        }

        // دالة عرض النتائج
        function displayResults(data) {
            container.innerHTML = ""; 
            data.forEach(site => {
                let card = document.createElement("div");
                card.className = "result-card";
                card.innerHTML = `
                    <h3>${site.title}</h3>
                    <p>${site.description}</p>
                    <a href="${site.url}" target="_blank">زيارة الموقع</a>
                `;
                container.appendChild(card);
            });
        }

        // وظيفة تنفيذ البحث
        function performSearch() {
            let val = document.getElementById("search-input").value.trim();
            if(val) {
                window.location.href = `results.html?q=${encodeURIComponent(val)}`;
            }
        }
    </script>

</body>
</html>
