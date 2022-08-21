$(document).ready(function () {
    $("a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $("html,body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function() {
                    window.location.hash = hash;
                }
            );
        }
    });
});

const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
    label.innerHTML = label.innerText
    .split("")
    .map(
        (letter, idx) =>
        '<span style="transition-delay:${idx * 50}ms">${letter}</span>'
    )
    .join("");
});

var userEmail = document.getElementById("sEmail");
var userName = document.getElementById("sName");

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }