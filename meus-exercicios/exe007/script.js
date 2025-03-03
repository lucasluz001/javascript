// FAÇA UM PROGRAMA QUE EXIBA 3 NÚMERO NA TELA

var res = window.document.querySelector('div#res')

function limitaPosicao(){
    var posicao = Number(prompt('Digite a posição do inimigo: '))
    if (posicao < 0){
        posicao = 0
        res.innerHTML = `<p> O inimigo estava fora do mapa, agora está reposicionado na posição: ${posicao}`
    }if (posicao > 100){
        posicao = 100 
        res.innerHTML = `<p> O inimigo estava fora do mapa, agora está reposicionado na posição: ${posicao}`
    } else {
        res.innerHTML = `<p> O inimigo está na posição: ${posicao} `
    }
}