var link = document.querySelector("section.search-hotel .button-brown");
var popup = document.querySelector(".mod");
var form = popup.querySelector("form");




link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("mod-close");
  popup.classList.add("mod-bounce");

});
