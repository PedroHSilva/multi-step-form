const page = document.querySelector(".page");
const firstNextBtn = document.querySelector(".next-btn");
const secNextBtn = document.querySelector(".next-1");
const thirdNextBtn = document.querySelector(".next-2");
const firstPrevBtn = document.querySelector(".prev-1");
const secPrevBtn = document.querySelector(".prev-2");
const thirdPrevBtn = document.querySelector(".prev-3");

firstNextBtn.addEventListener("click", () => {
    page.style.marginLeft = "-25%";
});
secNextBtn.addEventListener("click", () => {
    page.style.marginLeft = "-50%";
});
thirdNextBtn.addEventListener("click", () => {
    page.style.marginLeft = "-75%";
});

firstPrevBtn.addEventListener("click", () => {
    page.style.marginLeft = "0%";
});
secPrevBtn.addEventListener("click", () => {
    page.style.marginLeft = "-25%";
});
thirdPrevBtn.addEventListener("click", () => {
    page.style.marginLeft = "-50%";
});