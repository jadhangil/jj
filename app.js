const inputs = document.querySelectorAll(".input_c");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus_c");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus_c");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
