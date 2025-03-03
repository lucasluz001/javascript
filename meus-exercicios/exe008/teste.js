// FAÇA UM PROGRAMA QUE LEIA UM NÚMERO E VERIFIQUE SE ELE É PAR OU ÍMPAR. EXIBA UMA MENSAGEM INDICANDO O RESULTADO.

function verificaParOuImpar(numero){
    var conta = numero % 2
    if (conta == 0){
        console.log(`${numero} é par`)
    }else {
        console.log(`${numero} é ímpar`) 
    }
}

var calculo = verificaParOuImpar(11)
console.log(calculo)