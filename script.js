const dropdown = document.getElementById("customDropdown");
dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});

window.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 10500);
