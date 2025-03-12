var botao = window.document.querySelector('input#btn')
var res = window.document.querySelector('div#resultado')
botao.addEventListener('click', reajustar)

function reajustar(){
    const a = window.prompt(`Qual é o valor de a?`)
    const b = window.prompt(`Qual é o valor de b?`)
    const c = window.prompt(`Qual é o valor de c?`)
    delta = b**2 - 4 * a * c
    res.innerHTML = `<h2>Resolvendo Bhaskara</h2>`
    res.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>△ = ${b}² - 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi <mark><strong>△ = ${delta}</strong></mark></p>`
}
