const get = (element) => document.getElementById(element);
const navBtn = get("nav-btn");

const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("opened");
  });
});

navBtn.addEventListener("click", function () {
  document.body.classList.toggle("opened");
});
