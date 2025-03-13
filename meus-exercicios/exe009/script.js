// FAÇA UM PROGRAMA QUE LEIA TRÊS NÚMEROS E EXIBA O MAIOR ENTRE ELES

var res = window.document.querySelector('div#res')

function encontraMaiorNumero(){
    num1 = Number(prompt('Digite o primeiro número: '))
    num2 = Number(prompt('Digite o segundo número: '))
    num3 = Number(prompt('Digite o terceiro número: '))
    if (num1 > num2 && num1 > num3){
        res.innerHTML = `O maior número é ${num1}`
   }else if (num2 > num1 && num2 > num3){
        res.innerHTML = `O maior número é ${num2}`
   }else {
        res.innerHTML = `O maior número é ${num3}`
   }
}