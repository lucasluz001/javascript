var botao = window.document.querySelector('input#btn')
var res = window.document.querySelector('div#resultado')
botao.addEventListener('click', reajustar)

function reajustar(){
    const funcionario = window.prompt('Qual é o nome do funcionário?')
    const salario = window.parseFloat(prompt(`Qual é o salário de ${funcionario}`))
    const reajustePorcentagem = window.prompt(`O salário de ${funcionario} vai ser reajustado em qual porcentagem?`)
    const porcentagem = reajustePorcentagem / 100
    const aumento = parseFloat(salario * porcentagem) 
    const salarioNovo = parseFloat(salario + aumento)
    res.innerHTML = `<p>O salário atual era R$${salario.toLocaleString()}</p>`
    res.innerHTML += `<p>Com um aumento de ${reajustePorcentagem}%, o salário vai aumentar R$${aumento.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${funcionario} vai passar a ganhar R$${salarioNovo.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
}
