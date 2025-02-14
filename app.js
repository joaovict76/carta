/**
 * Sorteio de uma carta
 * Exemplo de uso de vetor
 * @author João Victor
 */

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js')
        .then(() => {
            console.log("Service worker registrado!")
        })
}


function sortear() {
    let nipes = ['♥','♦','♣','♠'];
    let faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

    // Sorteio do índice do vetor
    let nipeSorteado = nipes[Math.floor(Math.random() * nipes.length)];
    let faceSorteada = faces[Math.floor(Math.random() * faces.length)];

    // Determinar a cor com base no nipe sorteado
    let cor = (nipeSorteado === '♥' || nipeSorteado === '♦') ? '#ff0000' : '#000';

    // Renderizar o canto superior esquerdo da carta
    document.getElementById('supEsq').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`;
    document.getElementById('supEsq').style.color = cor;

    // Renderizar o centro da carta
    let cc = document.getElementById('centroCarta');
    if (faceSorteada === 'J') {
        cc.innerHTML = `<img src="./img/valete.png" alt="Valete" width="100" height="100">`;
    } else if (faceSorteada === 'Q') {
        cc.innerHTML = `<img src="./img/dama.png" alt="Dama" width="100" height="100">`;
    } else if (faceSorteada === 'K') {
        cc.innerHTML = `<img src="./img/rei.png" alt="Rei" width="100" height="100">`;
    } else {
        cc.innerHTML = `${nipeSorteado}`;
        cc.style.color = cor;
    }

    // Renderizar o canto inferior direito da carta
    document.getElementById('infDir').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`;
    document.getElementById('infDir').style.color = cor;
}

// Registrar Service Worker para PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(() => console.log('Service Worker registrado!'))
        .catch(err => console.error('Erro no Service Worker:', err));
}
