var tabNum = document.getElementById("txttab");
var tabSelect = document.getElementById("tabselect");
function carregar() {
  tabNum.focus();
}
function handleKeyPress(event) {
  if (event.keyCode === 13) {
    // 13 é o código da tecla Enter
    gerarTabuada();
  }
}

function gerarTabuada() {
  var valor = Number(tabNum.value);

  if (valor == 0) {
    window.alert("[ERRO] Não há como calcular a tabuada de 0.");
  } else {
    tabSelect.innerHTML = "";
    calcular();
  }
  function calcular() {
    for (let baseCont = 1; baseCont <= 10; baseCont++) {
      var result = 0;
      result = valor * baseCont;
      var item = document.createElement("option");
      item.text = `${valor} x ${baseCont} = ${result}`;
      tabSelect.appendChild(item);
    }
  }

  tabNum.value = "";
  tabNum.focus();
}
function limpar() {
  var tabNum = document.getElementById("txttab");
  var tabSelect = document.getElementById("tabselect");
  tabNum.value = "";
  tabSelect.innerHTML = "";
  tabNum.focus();
}
function voltarPagina() {
  window.location.href = "../../pages/portifolio.html";
}
