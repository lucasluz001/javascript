var botao = window.document.querySelector('input#btn')
var res = window.document.querySelector('div#resultado')
botao.addEventListener('click', converter)
var cotacaoDolar = window.prompt('Antes de mais nada. Quanto está a cotação do dolar agora?')

function converter(){
    const real = window.prompt('Quantos R$ você tem na carteira?')
    const conversao = real / cotacaoDolar
    res.innerHTML = `<p>Você obteve ${conversao.toLocaleString('en-US',{style:'currency',currency:'USD'})}.</p>`

}
