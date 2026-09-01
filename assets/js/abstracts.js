document.querySelectorAll(".paper-abstract__toggle").forEach(function (button) {
  var abstract = document.getElementById(button.getAttribute("aria-controls"));

  if (!abstract) {
    return;
  }

  button.addEventListener("click", function () {
    var isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    abstract.hidden = isExpanded;
  });
});
