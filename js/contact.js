document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("contact-form");
    const successPopup = document.getElementById("success-popup");
    const errorPopup = document.getElementById("error-popup");

    function showPopup(popup) {
        popup.classList.add("show");

        setTimeout(() => {
            popup.classList.remove("show");
        }, 4000);
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const data = new FormData(form);

        fetch("https://formspree.io/f/xgopblvk", {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {

                form.reset();
                showPopup(successPopup);

            } else {
                showPopup(errorPopup);
            }
        })
        .catch(() => {
            showPopup(errorPopup);
        });
    });
});

document.getElementById("kvkk-link").addEventListener("click", function(e) {
    e.preventDefault(); // 🔥 KRİTİK
    openLegal("kvkk");
});