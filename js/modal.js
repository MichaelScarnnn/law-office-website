const modal = document.getElementById("legal-modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".modal-close");

let scrollY = 0;

function openLegal(page) {

    scrollY = window.scrollY; // mevcut scroll u kaydetmek

    fetch(`/legal/${page}.html`)
        .then(res => res.text())
        .then(data => {
            modalBody.innerHTML = data;
            modal.classList.add("active");

            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";
            
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

    // 🔥 BODY SCROLL eski haline getirmek
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";

    // scroll u geri yuklemek
    window.scrollTo(0, scrollY);
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