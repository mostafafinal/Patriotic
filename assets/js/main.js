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
