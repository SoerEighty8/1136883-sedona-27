var link = document.querySelector("section.search-hotel .button-brown");
var popup = document.querySelector(".mod");
var form = popup.querySelector("form");
var cheсkin = popup.querySelector("[name=check-in]");
var chekout = popup.querySelector("[name=check-out]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("mod-close");
  popup.classList.add("mod-bounce");
  cheсkin.focus();
  popup.classList.remove("mod-error");
});

form.addEventListener("submit", function (evt) {
  if (!cheсkin.value || !chekout.value) {
      evt.preventDefault();
      popup.classList.remove("mod-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("mod-error");
      console.log("Нужно ввести логин и пароль");
    }
});
