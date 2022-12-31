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

// keeps contact nav btn inactive //
function contact() {
  const contactbtn = document.getElementById("contact-bg");
  contactbtn.scrollIntoView();
}

// to keep styling on active nav links //
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

/* function calls menu element, gives menu the class open and toggles it */

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}
