const modal = document.getElementById("legal-modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".modal-close");

function openLegal(page) {
    fetch(`/legal/${page}.html`)
        .then(res => res.text())
        .then(data => {
            modalBody.innerHTML = data;
            modal.classList.add("active");

            // 🔥 BODY SCROLL KAPAT
            document.body.classList.add("modal-open");
            
            // 🔥 SCROLL RESET
            document.querySelector(".modal-content").scrollTop = 0;
        })
        .catch(() => {
            modalBody.innerHTML = "<p>İçerik yüklenemedi.</p>";
            modal.classList.add("active");
        });
}

function closeModal() {
    modal.classList.remove("active");

    // 🔥 BODY SCROLL GERİ AÇ
    document.body.classList.remove("modal-open");
}

closeBtn.addEventListener("click", closeModal);

// footer linkleri
document.getElementById("kvkk-btn").addEventListener("click", (e) => {
    e.preventDefault();
    openLegal("kvkk");
});

document.getElementById("privacy-btn").addEventListener("click", (e) => {
    e.preventDefault();
    openLegal("privacy");
});

// kapatma
closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});



// const kvkkBtn = document.getElementById("kvkk-btn");
// const privacyBtn = document.getElementById("privacy-btn");

// const kvkkModal = document.getElementById("kvkk-modal");
// const privacyModal = document.getElementById("privacy-modal");

// kvkkBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     kvkkModal.classList.add("active");
// });

// privacyBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     privacyModal.classList.add("active");
// });

// document.querySelectorAll(".modal-close").forEach(btn => {
//     btn.addEventListener("click", () => {
//         document.getElementById(btn.dataset.close).classList.remove("active");
//     });
// });