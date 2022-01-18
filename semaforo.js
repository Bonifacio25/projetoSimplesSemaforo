const img = document.getElementById('imgSemaforo');
const buttons = document.getElementById('buttons');
let coresIndex = 0;
let intervaloID = null;

const trafegoDaLuz = (event) => {
    pararAutomatico();
    ligarLuz[event.target.id]();    
}

const proximaIndex = () => {
    if (coresIndex < 2) {
        coresIndex++
    } else {
        coresIndex = 0;
    }
}

const pararAutomatico = () => {
    clearInterval (intervaloID)
}

const mudarDeCor = () => {
    const cores = ['botaoVermelho', 'botaoAmarelo', 'botaoVerde']
    const color = cores[coresIndex];
    ligarLuz[color]();
    proximaIndex();
}

const ligarLuz =  {
    'botaoVermelho': () => img.src = './img/semaforovermelho.png',
    'botaoAmarelo': () => img.src = './img/semaforoamarelo.png',
    'botaoVerde': () => img.src = './img/semaforoverde.png',
    'botaoAutomatico': () => intervaloID = setInterval( mudarDeCor, 1000)
}
buttons.addEventListener('click', trafegoDaLuz);