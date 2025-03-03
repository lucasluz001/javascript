// FAÇA UM PROGRAMA QUE CONVERTA UMA TEMPERATURA DE FAHRENHEIT PARA CÉLSIUS

var res = window.document.querySelector('div#res')

var f = Number(prompt('Escreva uma temperatura em Fahrenheit: '))
var c = ((f - 32)*5)/9
res.innerHTML += `<p>${c.toFixed(2)}</p>`