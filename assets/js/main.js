// Back To Top Button
let backBtn = document.createElement("span");
backBtn.classList.add("btn");
backBtn.classList.add("btn-primary");
backBtn.classList.add("back-top");
backBtn.classList.add("d-none");
document.body.appendChild(backBtn);

window.onscroll = function () {
  this.scrollY >= 700
    ? backBtn.classList.remove("d-none")
    : backBtn.classList.add("d-none");
};

backBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// // Gallery Filter
const galleryBtns = document.querySelectorAll(".portfolio-btns .btn");
galleryBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    activeState(event);
    document.querySelectorAll(".row .box").forEach((section) => {
      section.style.display = "none";
    });
    document
      .querySelectorAll(`.row .box.${event.target.dataset.section}`)
      .forEach((e) => {
        e.style.setProperty("display", "block", "important");
      });
  });
});

// Active Buttons Function
function activeState(event) {
  event.target.parentElement.querySelectorAll(".active").forEach((active) => {
    active.classList.remove("active");
  });
  event.target.classList.add("active");
}
