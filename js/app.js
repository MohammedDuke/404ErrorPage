const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//============ Show Menu ===========
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

//============ Hide Menu ===========
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//================ Remove Menu When click in menu links =================
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => {
  n.addEventListener("click", linkAction);
});

//================ Remove Menu When click in menu links =================
const sr = ScrollReveal({
  distance: "90px",
  duration: 3000,
});

sr.reveal(`.home__data`, { origin: "top", delay: 400 });
sr.reveal(`.home__img`, { origin: "top", delay: 600 });
sr.reveal(`.home__footer`, { origin: "bottom", delay: 800 });
