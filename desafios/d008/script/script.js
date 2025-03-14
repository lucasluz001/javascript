var botao = window.document.querySelector('input#btn')
var res = window.document.querySelector('div#resultado')
botao.addEventListener('click', calcular)

function calcular(){
    const produto = window.prompt('Qual é o produto que você está comprando?')
    const preco = window.parseFloat(prompt(`Qual é o preço do(a) ${produto}?`))
    const desconto = preco * 0.10
    const diferenca = preco - desconto
    res.innerHTML = `<p>O preço original era ${preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar ${desconto.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} de desconto (-10%).</p>`
    res.innerHTML += `<p>No fim, você vai pagar ${diferenca.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} no produto ${produto}.</p>`
}
