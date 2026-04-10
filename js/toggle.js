const toggle = document.getElementById("menu-toggle");
const navList = document.querySelector(".nav-list");

toggle.addEventListener("click", () => {
    navList.classList.toggle("active");
});