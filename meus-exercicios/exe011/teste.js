// Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário.

function tabuada(numero){
   for (multiplicador = 1; multiplicador <=10; multiplicador ++){
       resultado = numero * multiplicador
       console.log(`${numero} x ${multiplicador} = ${resultado}`)
   }
}

var calculo = tabuada(2)
console.log(calculo)