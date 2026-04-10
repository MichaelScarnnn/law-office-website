const params = new URLSearchParams(window.location.search);
const category = params.get("cat");

const titleMap = {
    "ceza-hukuku": "Ceza Hukuku",
    "medeni-hukuk": "Medeni Hukuk",
    "is-hukuku": "İş Hukuku",
    "idare-hukuku": "İdare Hukuku",
    "arabuluculuk": "Arabuluculuk"
};

const titleEl = document.getElementById("category-title");
const container = document.getElementById("articles-container");

// Başlık kontrol
titleEl.innerText = titleMap[category] || "Makaleler";

// JSON çek
fetch("data/articles.json")
    .then(res => res.json())
    .then(data => {

        const filtered = data.filter(a => a.category === category);

        // boş durum
        if (filtered.length === 0) {
            container.innerHTML = "<p>Bu kategoriye ait henüz makale bulunmamaktadır.</p>";
            return;
        }

        // performanslı render
        let html = "";

        filtered.forEach(article => {
            html += `
                <a href="article.html?slug=${article.slug}" class="article-card">
                    <p class="category-article-date">${article.date}</p>
                    <h3>${article.title}</h3>
                    <p>${article.summary}</p>
                </a>
            `;
        });

        container.innerHTML = html;

    })
    .catch(err => {
        container.innerHTML = "<p>Veriler yüklenirken hata oluştu.</p>";
        console.error(err);
    });