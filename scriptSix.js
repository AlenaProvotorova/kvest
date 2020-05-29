const buttonCheckSix = document.querySelector(".button-check6");
const inputCodeSix = document.querySelector(".input-code6");

buttonCheckSix.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputCodeSix.value == "Юрий" || inputCodeSix.value == "юрий") {
    inputCodeSix.classList.remove("error");
    inputCodeSix.classList.add("success");

    setTimeout(() => {
      inputCodeSix.classList.remove("success");

      window.location.assign(window.location.origin + "index7.html");
    }, 1500);
  }

  inputCodeSix.classList.add("error");
  setTimeout(() => {
    inputCodeSix.classList.remove("error");
  }, 1500);
});
