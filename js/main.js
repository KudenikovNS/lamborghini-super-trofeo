/* SWIPER */
const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".blog__slider-button_right",
    prevEl: ".blog__slider-button_left",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

/* MENU-MOBILE */
const menuBtn = document.querySelector(".header__nav-menu-btn");
const menuMobile = document.querySelector(".header__nav-menu-mobile");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("header__nav-menu-mobile_open");
});
