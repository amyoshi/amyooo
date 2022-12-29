/* when hamburger menu is open, website logo so dissapear. when hamburger menu is closed, logo should be visable */
let loader = document.getElementById("preloader");
let loaderloader = document.getElementById("preloader-bg");

let dismissLoadingImg = function () {
  loader.style.display = "none";
};

let dismissLoadingScreen = function () {
  loaderloader.style.display = "none";
};

let wait3second = function () {
  let result = setTimeout(dismissLoadingScreen, 1000);
};

let wait3seconds = function () {
  let result = setTimeout(dismissLoadingImg, 1000);
};

window.addEventListener("load", wait3second);
window.addEventListener("load", wait3seconds);

// to keep styling on active nav links //
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  console.log(link.href);
});

/* function calls menu element, gives menu the class open and toggles it */

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}
