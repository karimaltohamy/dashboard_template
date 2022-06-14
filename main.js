let btnOpen = document.querySelector(".menu-btn");
let btnClose = document.querySelector(".btn-close");
let aside = document.querySelector("aside");
let themsMode = document.querySelector(".thems-mode");

btnOpen.addEventListener("click", () => {
    aside.classList.add("active-menu")
});

btnClose.addEventListener("click", () => {
    aside.classList.remove("active-menu")
});

themsMode.addEventListener("click", ()=> {
    document.body.classList.toggle("dark-theme-variable");

    themsMode.querySelector("span:first-child").classList.toggle("active");
    themsMode.querySelector("span:last-child").classList.toggle("active");
})