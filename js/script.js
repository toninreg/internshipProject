let modal = document.querySelectorAll(".modal");

let btn = document.querySelectorAll(".botoes");

let span = document.querySelectorAll(".fechar");

btn.forEach(function(btn) {
  btn.addEventListener("click", function() {
    var modal = this.nextElementSibling;
    modal.style.display = "block";
  });
});

span.forEach(function(span) {
  span.addEventListener("click", function() {
    let modal = this.parentElement.parentElement;
    modal.style.display = "none";
  });
});

window.addEventListener("click", function(event) {
  modals.forEach(function(modal) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});