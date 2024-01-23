/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll(".services__modal");
const modalButton = document.querySelectorAll(".services__button");
const modalClose = document.querySelectorAll(".services__modal-close");

let activeModal = (modalClick) => {
  modal[modalClick].classList.add("active-modal");
};

modalButton.forEach((modalButton, i) => {
  modalButton.addEventListener("click", () => {
    activeModal(i);
  });
});

modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modal.forEach((modalRemove) => {
      modalRemove.classList.remove("active-modal");
    });
  });
});

/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper(".testimonial__swiper", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [-100, 0, -500],
      opacity: 0,
    },
    next: {
      translate: [100, 0, -500],
      opacity: 0,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scrollup");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
