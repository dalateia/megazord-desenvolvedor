function carregar() {
  var init = document.getElementById("txtinit");
  init.focus();
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    // 13 é o código da tecla Enter
    contagem();
  }
}
function contagem() {
  var init = document.getElementById("txtinit");
  var end = document.getElementById("txtend");
  var cont = document.getElementById("txtcont");
  var result = document.getElementById("result");

  init = Number(init.value);
  end = Number(end.value);
  cont = Number(cont.value);
  var contar = "Contando:</br>";

  if (init == 0 && end == 0) {
    window.alert(
      "[ERRO!] É necessário informar um número válido para contagem."
    );
    init.focus();
  } else {
    realizaContagem();
  }
  function realizaContagem() {
    if (cont <= 0) {
      cont = 1;
      window.alert("Impossível contar de 0. Considerando valor 1");
    }
    if (init > end) {
      for (init; init >= end; init -= cont) {
        contar += `${init} &#128073; `;
      }
    } else {
      for (init; init <= end; init += cont) {
        contar += `${init} &#128073; `;
      }
    }
    document.write = result.innerHTML = `${contar} &#128640; `;
  }
}

function limpar() {
  var init = document.getElementById("txtinit");
  var end = document.getElementById("txtend");
  var cont = document.getElementById("txtcont");
  var result = document.getElementById("result");
  document.write = result.innerHTML = "Preparando contagem...";
  init.value = "";
  end.value = "";
  cont.value = "";
  init.focus();
}

window.addEventListener("load", function () {
  var footer = document.getElementById("footer");
  if (document.body.scrollHeight > window.innerHeight) {
    footer.className = "normal-footer";
  } else {
    footer.className = "fixed-footer";
  }
});

function voltarPagina() {
  window.location.href = "../../pages/portifolio.html";
}
