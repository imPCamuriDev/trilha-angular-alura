const appCardsButtons = document.querySelectorAll('.app__card-button');

const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco') 
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')

function adicionarAtivo(button) {
    let activeButton = button;
    for (let contador = 0; contador < appCardsButtons.length; contador++) {
        appCardsButtons[contador].classList.remove('active');
    }
    activeButton.classList.add('active');
}
function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
}
function alterarBanner(img) {
    banner.setAttribute('src', img)
}


focoBt.addEventListener('click', () => {

    adicionarAtivo(focoBt)
    alterarBanner('/imagens/foco.png')
    alterarContexto('foco')
})

curtoBt.addEventListener('click', () => {

    adicionarAtivo(curtoBt)
    alterarBanner('/imagens/descanso-curto.png')
    curtoBt.classList.add('ativo');

    alterarContexto('descanso-curto');
})

longoBt.addEventListener('click', () => {
    adicionarAtivo(longoBt)
    alterarBanner('/imagens/descanso-longo.png')
    alterarContexto('descanso-longo');
})