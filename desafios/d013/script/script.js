var botao = window.document.querySelector('input#btn')
var res = window.document.querySelector('div#resultado')
botao.addEventListener('click', verificar)

function verificar(){
    const nomeAluno = window.prompt('Qual é o nome do aluno?')
    const primeiraNota = window.parseFloat(prompt(`Primeira nota de ${nomeAluno}:`))
    const segundaNota = window.parseFloat(prompt(`Segunda nota de ${nomeAluno}:`))
    const media = parseFloat((primeiraNota + segundaNota) / 2)
    if (media < 3){
        res.innerHTML = `<h2>Analisando a situação de ${nomeAluno}...</h2>`
        res.innerHTML += `<p>Com as notas ${primeiraNota.toLocaleString()} e ${segundaNota.toLocaleString()}, a <strong>média é ${media.toLocaleString()}</strong></p>`
        res.innerHTML += `Com a média abaixo de 3,0, o aluno está <mark id='red'><strong>REPROVADO</strong></mark>`
        document.getElementById("red").style.backgroundColor = "#ff000080";
    } else if (media >= 3 && media <= 6){
        res.innerHTML = `<h2>Analisando a situação de ${nomeAluno}...</h2>`
        res.innerHTML += `<p>Com as notas ${primeiraNota.toLocaleString()} e ${segundaNota.toLocaleString()}, a <strong>média é ${media.toLocaleString()}</strong></p>`
        res.innerHTML += `<p>Com a média entre 3,0 e 6,0 o aluno está em <mark id='yellow'><strong>RECUPERAÇÃO</strong></mark></p>`
        document.getElementById("yellow").style.backgroundColor = "#ffff0080";
    } else {
        res.innerHTML = `<h2>Analisando a situação de ${nomeAluno}...</h2>`
        res.innerHTML += `<p>Com as notas ${primeiraNota.toLocaleString()} e ${segundaNota.toLocaleString()}, a <strong>média é ${media.toLocaleString()}</strong></p>`
        res.innerHTML += `<p>Com a média acima de 6,0, o aluno está <mark id='green'><strong>APROVADO</strong></mark></p>`
        document.getElementById("green").style.backgroundColor = "#00ff0080";
    }
}
