// FAÇA UM PROGRAMA QUE LEIA UM NÚMERO E VERIFIQUE SE ELE É PAR OU ÍMPAR. EXIBA UMA MENSAGEM INDICANDO O RESULTADO.

var res = window.document.querySelector('div#res')

function verificaParOuImpar(){
    numero = Number(prompt('Digite um número: '))
    var conta = numero % 2
    if (conta == 0){
        res.innerHTML = `<p>O número ${numero} é par</p>`
    } else {
        res.innerHTML = `<p>O número ${numero} é ímpar</p>`
    }
}