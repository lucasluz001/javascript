// FAÇA UM PROGRAMA QUE LEIA UM NÚMERO E DETERMINE SE ELE É POSITIVO, NEGATIVO OU ZERO

var res = window.document.querySelector('div#res')

function verificaNumero(){
    numero = Number(prompt('Digite um número: '))
    if (numero < 0 ){
          res.innerHTML = `<p>O número ${numero} é negativo</p>`
    } else if (numero > 0 ){
          res.innerHTML = `<p>O número ${numero} é positivo</p>`
    }else {
          res.innerHTML = `<p>O numero ${numero} é Zero</p>`
    }
}