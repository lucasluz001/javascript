// Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário.

var res = window.document.querySelector('div#res')

function tabuada(){
      const numero = window.prompt('Digite um número para gerar a tabuada.')
      res.innerHTML = ''
      for (let multiplicador = 1; multiplicador <=10; multiplicador ++){
            resultado = numero * multiplicador
            res.innerHTML += `<p>${numero} x ${multiplicador} = ${resultado}</p>`
        }
}