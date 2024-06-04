window.addEventListener("load", function () {
  var footer = document.getElementById("footer");
  if (document.body.scrollHeight > window.innerHeight) {
    footer.className = "normal-footer";
  } else {
    footer.className = "fixed-footer";
  }
});

function horaCerta() {
  window.location.href = "../exercicios/hora-certa/index.html";
}
function tabuada() {
  window.location.href = "../exercicios/tabuada/index.html";
}
function contagem() {
  window.location.href = "../exercicios/contagem/index.html";
}
function verificadorIdade() {
  window.location.href = "../exercicios/verificador-idade/index.html";
}
function theBigArray() {
  window.location.href = "../exercicios/the-array/index.html";
}
function theRoulette() {
  window.location.href = "../exercicios/roletando/index.html";
}
