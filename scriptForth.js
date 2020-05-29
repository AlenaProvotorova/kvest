const buttonCheckForth = document.querySelector(".button-check4");
const inputCodeForth = document.querySelector(".input-code4");

buttonCheckForth.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputCodeForth.value == "153") {
    inputCodeForth.classList.remove("error");
    inputCodeForth.classList.add("success");

    setTimeout(() => {
      inputCodeForth.classList.remove("success");

      window.location.assign(window.location.origin + "/index5.html");
    }, 1500);
  }

  inputCodeForth.classList.add("error");

  setTimeout(() => {
    inputCodeForth.classList.remove("error");
  }, 1500);
});
