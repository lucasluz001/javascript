var botao = window.document.querySelector('input#btn')
var res = window.document.querySelector('div#resultado')
botao.addEventListener('click', reajustar)

function reajustar(){
    const ano = window.Number(prompt('Qual é o ano que você quer verificar?'))
    if (ano % 4 == 0){
        res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`
        res.innerHTML += `<p>O ano de ${ano} 
            <mark id="markGreen"><strong>É BISSEXTO</strong></mark> ✅</p>`
        document.getElementById("markGreen").style.backgroundColor = "#00ff0080";
    } else {
        res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`
        res.innerHTML += `<p>O ano de ${ano} 
            <mark id="markRed"><strong>NÃO É BISSEXTO</strong></mark> ❌</p>`
        document.getElementById("markRed").style.backgroundColor = "#ff000080";
    }
}
