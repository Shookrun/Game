const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const main = document.getElementById("main");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");

  
    if (menu.classList.contains("hidden")) {
        setTimeout(() => {
            main.style.display = "flex";
        }, 2000);
    } else {
    
        main.style.display = "none";
    }
});

