// FAÇA UM PROGRAMA QUE LEIA 3 NÚMERO E OS MOSTRE NA TELA
var res = window.document.querySelector('div#res')

var n1 = prompt("Digite o primeiro número: ")
var n2 = prompt("Digite o segundo número: ")
var n3 = prompt("Digite o terceiro número: ")

res.innerHTML += `<p>${n1}</p><br>`
res.innerHTML += `<p>${n2}</p><br>`
res.innerHTML += `<p>${n3}</p><br>`