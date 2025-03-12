var botao = window.document.querySelector('input#btn')
var res = window.document.querySelector('div#resultado')
botao.addEventListener('click', verificar)

function verificar(){
    const precoAntigo =  window.parseFloat(prompt('Qual era o preço anterior?'))
    const precoAtual = window.parseFloat(prompt('Qual é o preço atual do produto?'))
    if (precoAtual > precoAntigo){
        res.innerHTML = `<h2>Analisando os valores informados...</h2>`
        res.innerHTML += `<p>O produto custava ${precoAntigo.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} e agora custa ${precoAtual.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}.</p>`
        res.innerHTML += `<p>O produto está mais caro.</p>`
        let diferenca = precoAtual - precoAntigo
        res.innerHTML += `<p>O preço subiu ${diferenca.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} em relação ao preço anterior.</p>`
        variacaoPercentual = (diferenca/precoAntigo)*100
        res.innerHTML += `<p>Uma variação de ${variacaoPercentual.toFixed(1)}% para cima.</p>`
    } else {
        res.innerHTML = `<h2>Analisando os valores informados...</h2>`
        res.innerHTML += `<p>O produto custava ${precoAntigo.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} e agora custa ${precoAtual.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}.</p>`
        res.innerHTML += `<p>O produto está mais barato.</p>`
        let diferenca = precoAntigo - precoAtual
        res.innerHTML += `<p>O preço caiu ${diferenca.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} em relação ao preço anterior.</p>`
        variacaoPercentual =(diferenca/precoAntigo)*100
        res.innerHTML += `<p>Uma variação de ${variacaoPercentual.toFixed(1)}% para baixo.</p>`
    }
}
