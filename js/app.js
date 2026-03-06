const hamb = document.querySelector(
  ".header .header__nav-bar .header__nav-list .header__hamb",
);

const mobile_menu = document.querySelector(
  ".header .header__nav-bar .header__nav-list ul",
);

const header = document.querySelector(".header.container");

hamb.addEventListener("click", () => {
  hamb.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 600) {
    header.style.backgroundColor = "#88C070";
  } else {
    header.style.backgroundColor = "rgba(31, 30, 30, 0.24)";
  }
});
