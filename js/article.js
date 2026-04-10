const params = new URLSearchParams(window.location.search);
let slug = params.get("slug");

// const path = window.location.pathname;
// const slug = path.replace("/blog/", "")

const titleEl = document.getElementById("article-title");
const dateEl = document.getElementById("article-date");
const contentEl = document.getElementById("article-content");

fetch("/data/articles.json")
    .then(res => res.json())
    .then(data => {

        // Eğer query yoksa (yeni sistem)
        if (!slug) {
            const path = window.location.pathname;
            slug = path.replace("/blog/", "");
        }

        // sondaki slash temizle
        slug = slug.replace(/\/$/, "");
        slug = slug.trim();

        console.log('Slug:', slug)

        const article = data.find(a => a.slug === slug);

        // Eğer makale yoksa
        if (!article) {
            titleEl.innerText = "Makale bulunamadı";
            return;
        }

        // Verileri bas
        titleEl.innerText = article.title;
        dateEl.innerText = article.date || "";

        // content HTML olarak basılır
        contentEl.innerHTML = article.content;

        // SEO title (küçük ama önemli)
        document.title = article.title + " | İsmail Karadağ";

    })
    .catch(err => {
        titleEl.innerText = "Hata oluştu";
        console.error(err);
    });