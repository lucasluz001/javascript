// FAÇA UM PROGRAMA QUE LEIA 3 NÚMEROS E OS MOSTRE A MÉDIA 
var res = window.document.querySelector('div#res')
var med = window.document.querySelector('div#med')

var n1 = Number(prompt("Digite o primeiro número: (0-10) "))
var n2 = Number(prompt("Digite o segundo número: (0-10) "))
var n3 = Number(prompt("Digite o terceiro número: (0-10) "))

var media = (n1 + n2 + n3) / 3

res.innerHTML += `<p>${n1}</p><br>`
res.innerHTML += `<p>${n2}</p><br>`
res.innerHTML += `<p>${n3}</p><br>`
med.innerHTML += `<p>${media}</p>`
