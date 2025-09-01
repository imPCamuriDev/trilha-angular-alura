const appCardsButtons = document.querySelectorAll(".app__card-button");

const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio('/sons/luna-rise-part-one.mp3')
musica.loop = true;

musicaFocoInput.addEventListener('change', function() {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});


function adicionarAtivo(button) {
  let activeButton = button;
  for (let contador = 0; contador < appCardsButtons.length; contador++) {
    appCardsButtons[contador].classList.remove("active");
  }
  activeButton.classList.add("active");
}
function alterarBanner(img) {
  banner.setAttribute("src", img);
}
function alterarContexto(contexto) {
  html.setAttribute("data-contexto", contexto);
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `Otimize sua produtividade,<br> <strong class="app__title-strong">mergulhe no que importa.</strong>`;
      adicionarAtivo(focoBt);
      alterarBanner("/imagens/foco.png");
      break;
    case "descanso-curto":
      titulo.innerHTML = `Que tal dar uma respirada?<br> <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
      adicionarAtivo(curtoBt);
      alterarBanner("/imagens/descanso-curto.png");
      break;
    case "descanso-longo":
      titulo.innerHTML = `Hora de voltar à superfície<br> <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
      adicionarAtivo(longoBt);
      alterarBanner("/imagens/descanso-longo.png");
      break;
  }
}

focoBt.addEventListener("click", () => {
  alterarContexto("foco");
});

curtoBt.addEventListener("click", () => {
  alterarContexto("descanso-curto");
});

longoBt.addEventListener("click", () => {
  alterarContexto("descanso-longo");
});
