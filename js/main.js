// Dropdown menu on mobile
const menubtn = document.querySelector(".menu-icon");
const mainMenu = document.querySelector(".navbar");

// function Toogle menu
function toogleMenu() {
  menubtn.addEventListener("click", () => {
    if (menubtn.firstElementChild.classList.contains("fa-bars")) {
      menubtn.firstElementChild.classList.replace("fa-bars", "fa-times");
      menubtn.firstElementChild.style.color = "#fff";
      mainMenu.style.display = "block";
    } else {
      mainMenu.style.display = "none";
      menubtn.firstElementChild.classList.replace("fa-times", "fa-bars");
      menubtn.firstElementChild.style.color = "#272a31";
    }
  });
}

// function invoation
toogleMenu();
