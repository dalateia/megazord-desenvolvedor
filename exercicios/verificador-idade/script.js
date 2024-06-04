var formAno = document.getElementById("txtano");
var result = document.getElementById("resultado");
function carregar() {
  formAno.focus();
}
function keypress(event) {
  if (event.keyCode === 13) {
    verificar();
  }
}

function verificar() {
  var data = new Date();
  var ano = data.getFullYear();

  if (formAno.value.length == 0 || Number(formAno.value) > ano) {
    window.alert("[ERRO] Verifique os dados novamente!");
  } else {
    var formSex = document.getElementsByName("radsex");
    var idade = ano - Number(formAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (formSex[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade < 5) {
        img.setAttribute("src", "images/menino-bebe.png");
      } else if (idade < 12) {
        img.setAttribute("src", "images/menino-crianca.png");
      } else if (idade < 20) {
        img.setAttribute("src", "images/menino-jovem.png");
      } else if (idade < 50) {
        img.setAttribute("src", "images/homem-adulto.png");
      } else {
        img.setAttribute("src", "images/homem-idoso.png");
      }
    } else if (formSex[1].checked) {
      genero = "mulher";
      if (idade >= 0 && idade < 5) {
        img.setAttribute("src", "images/menina-bebe.png");
      } else if (idade < 12) {
        img.setAttribute("src", "images/menina-crianca.png");
      } else if (idade < 20) {
        img.setAttribute("src", "images/menina-jovem.png");
      } else if (idade < 50) {
        img.setAttribute("src", "images/mulher-adulta.png");
      } else {
        img.setAttribute("src", "images/mulher-idosa.png");
      }
    }
    result.style.textAlign = "center";
    result.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`;
    result.appendChild(img);
  }
  formAno.value = "";
  formAno.focus();
}

function voltarPagina() {
  window.location.href = "../../pages/portifolio.html";
}
