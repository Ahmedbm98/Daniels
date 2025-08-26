// Change Navbar Color When Scroll
let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (scrollY >= 500) {
    nav.classList.add("scroll"); /* This Class IN CSS File */
  } else {
    nav.classList.remove("scroll");
  }
});

// Change Navbar Color in Small Media Screen
let navbar = document.querySelector("#navbarNav");
let navbarToggle = document.querySelector(".navbar-toggler");
navbarToggle.addEventListener("click", function () {
  if (navbar.classList.toggle("show")) {
    navbar.classList.remove("show");
    navbar.classList.add("toggle"); /* This Class IN CSS File */
  }
});

//  Typing Text Animation
var typed = new Typed(".typing-txt", {
  strings: ["Larry Daniels", "Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});

//  Increase Counter
let section = document.querySelector("#counter");
let counter = document.querySelectorAll(".content-counter h2");
let start = false;

function startCounter(ele) {
  let stopCount = ele.dataset.count;
  let stopInterval = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == stopCount) {
      clearInterval(stopInterval);
    }
  }, 1000 / stopCount);
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= section.offsetTop) {
    // console.log(this.scrollY);
    if (!start) {
      counter.forEach((el) => startCounter(el));
    }
    start = true;
  }
});

//  Button To Scroll Top
let btn = document.querySelector("#btn");

window.addEventListener("scroll", function () {
  if (scrollY >= 600) {
    btn.style.visibility = "visible";
  } else {
    btn.style.visibility = "hidden";
  }
});

btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Loading
window.addEventListener("load", function () {
  let loader = document.querySelector("#loading");

  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
});
