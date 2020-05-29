const buttonCheckThree = document.querySelector(".button-check3");
const inputCodeThree = document.querySelector(".input-code3");

buttonCheckThree.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputCodeThree.value == "7677") {
    inputCodeThree.classList.remove("error");
    inputCodeThree.classList.add("success");

    setTimeout(() => {
      inputCodeThree.classList.remove("success");

      window.location.assign(window.location.origin + "index4.html");
    }, 1500);
  }

  inputCodeThree.classList.add("error");
  setTimeout(() => {
    inputCodeThree.classList.remove("error");
  }, 1500);
});
