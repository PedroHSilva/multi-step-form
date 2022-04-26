const page = document.querySelector(".page");
const firstNextBtn = document.querySelector(".next-btn");
const secNextBtn = document.querySelector(".next-1");
const thirdNextBtn = document.querySelector(".next-2");
const firstPrevBtn = document.querySelector(".prev-1");
const secPrevBtn = document.querySelector(".prev-2");
const thirdPrevBtn = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");

const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let max = 4;
let current = 1;

firstNextBtn.addEventListener("click", () => {
    page.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
secNextBtn.addEventListener("click", () => {
    page.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});
thirdNextBtn.addEventListener("click", () => {
    page.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
});

firstPrevBtn.addEventListener("click", () => {
    page.style.marginLeft = "0%";
    current -= 1;
    bullet[current - 1].classList.remove("active");
    progressText[current - 1].classList.remove("active");
    progressCheck[current - 1].classList.remove("active");
});
secPrevBtn.addEventListener("click", () => {
    page.style.marginLeft = "-25%";
    current -= 1;
    bullet[current - 1].classList.remove("active");
    progressText[current - 1].classList.remove("active");
    progressCheck[current - 1].classList.remove("active");
});
thirdPrevBtn.addEventListener("click", () => {
    page.style.marginLeft = "-50%";
    current -= 1;
    bullet[current - 1].classList.remove("active");
    progressText[current - 1].classList.remove("active");
    progressCheck[current - 1].classList.remove("active");
});

submitBtn.addEventListener("click", () => {
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
    setTimeout(function() {
        alert("Formulario enviado");
        location.reload();
    }, 400);
});