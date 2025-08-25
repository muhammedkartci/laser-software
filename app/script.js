const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-btn");

let index = 0;

nextBtn.addEventListener("click", () => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
});
