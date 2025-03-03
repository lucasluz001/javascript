// FAÇA UM PROGRAMA QUE EXIBE SE A SOMA DOS NUMEROS FOREM MAIOR QUE 100

var res = window.document.querySelector('div#res')

var n1 = Number(prompt('Digite o primeiro número: '))
var n2 = Number(prompt('Digite o segundo número: '))
var soma = n1 + n2 
if (soma >= 100){
    res.innerHTML += `<p>${soma}</p>`
} else {
    res.innerHTML += `<p> menor que 100. </p>`
}

