// FAÇA UM PROGRAMA QUE LEIA UM NÚMERO E DETERMINE SE ELE É POSITIVO, NEGATIVO OU ZERO

function verificaNumero(numero){
   if (numero < 0){
          console.log(`O número ${numero} é negativo`)
   } else if (numero > 0){
          console.log(`O número ${numero} é positivo`)
   } else {
          console.log(`O número ${numero} é zero`)
   }
}

var calculo = verificaNumero(0)
console.log(calculo)