// 2 to 3
const buttonCheckTwo = document.querySelector(".button-check2");
const inputCodeTwo = document.querySelector(".input-code2");

buttonCheckTwo.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputCodeTwo.value == "0000") {
    inputCodeTwo.classList.remove("error");
    inputCodeTwo.classList.add("success");

    setTimeout(() => {
      inputCodeTwo.classList.remove("success");

      window.location = "index3.html";
    }, 1500);
  }

  inputCodeTwo.classList.add("error");
  setTimeout(() => {
    inputCodeTwo.classList.remove("error");
  }, 1500);
});
