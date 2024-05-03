const globalBtn = document.getElementById("global");
const closeBtn = document.getElementById("close");
const modalElem = document.getElementById("modal");

globalBtn.onclick = () => {
  modalElem.style.display = "block";
  setTimeout(() => {
    modalElem.classList.add("open");
  }, 100);
};

closeBtn.onclick = () => {
  modalElem.classList.remove("open");

  setTimeout(() => {
    modalElem.style.display = "none";
  }, 1000);
};
