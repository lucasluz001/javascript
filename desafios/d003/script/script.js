var botao = window.document.querySelector('input#btn')
botao.addEventListener('click', antesEDepois)

function antesEDepois(){
    const numero = window.Number(prompt('Digite um número qualquer'))
    window.alert(`Antes de ${numero}, temos o número ${numero - 1}\n Depois de ${numero}, temos o número ${numero + 1}`)
}
