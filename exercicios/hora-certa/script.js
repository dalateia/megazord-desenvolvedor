function carregar() {
  let exibir = document.getElementById("exibir");
  let saudacao = document.getElementById("saudacao");
  let img = document.getElementById("imagem");
  let main = document.querySelector("main");
  let title = document.querySelector("main h1");
  let data = new Date();
  let hh = data.getHours();
  let mm = data.getMinutes();
  let ss = data.getSeconds();
  /*   let hh = data.getHours();
  let mm = data.getMinutes();
  let ss = data.getSeconds(); */
  //validando a necessidade de adicionar zero na exibição
  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  exibir.innerHTML = `${hh}:${mm}:${ss}`;

  if (hh >= 0 && hh < 12) {
    document.write = saudacao.innerHTML = "Bom dia!";
    img.src = "images/morning-edit.png";
    main.style.background = "#478aa0";
  } else if (hh >= 12 && hh <= 18) {
    document.write = saudacao.innerHTML = "Boa tarde!";
    img.src = "images/afternoon-edit.png";
    main.style.background = "#f58a1b";
  } else {
    document.write = saudacao.innerHTML = "Boa noite!";
    img.src = "images/night-edit.png";
    main.style.background = "#363636";
    title.style.color = "#ffffff";
  }
}

carregar();
setInterval(carregar, 1000);

function voltarPagina() {
  window.location.href = "../../pages/portifolio.html";
}
