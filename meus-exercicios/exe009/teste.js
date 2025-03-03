// FAÇA UM PROGRAMA QUE LEIA TRÊS NÚMEROS E EXIBA O MAIOR ENTRE ELES

function encontraMaiorNumero(num1,num2,num3){
   if (num1 > num2 && num1 > num3){
        console.log(`O maior número é ${num1}`)
   }else if (num2 > num1 && num2 > num3){
        console.log(`O maior número é ${num2}`)
   }else {
        console.log(`O maior número é ${num3}`)
   }
}

var calculo = encontraMaiorNumero(14,13,17)
console.log(calculo)