let leftTapped = false;
let rightTapped = false;

const wrapper = document.getElementById("invite-wrapper");
const leftFold = document.getElementById("left-fold");
const rightFold = document.getElementById("right-fold");

leftFold.addEventListener("click", () => {
  leftTapped = true;
  leftFold.style.opacity = "0.8";
  tryOpen();
});

rightFold.addEventListener("click", () => {
  rightTapped = true;
  rightFold.style.opacity = "0.8";
  tryOpen();
});

function tryOpen() {
  if (leftTapped && rightTapped) {
    wrapper.classList.add("open");
  }
}
