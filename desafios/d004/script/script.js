var botao = window.document.querySelector('input#btn')
botao.addEventListener('click', comprar)

function comprar(){
    const produto = window.prompt('Qual produto você está comprando?')
    const preco = window.Number(prompt(`Quanto custa o(a) ${produto} que você está comprando?`))
    const valor = window.Number(prompt(`Qual foi o valor que você deu para pagar o(a) ${produto}`))
    const troco = valor - preco
    if(troco < 0){
        window.alert(`Dinheiro insuficiente para comprar o(a) ${produto}`)
    }else {
        window.alert(`Você comprou o(a) ${produto} que custou ${preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}.\nDeu ${valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} em dinheiro e vai receber ${troco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} de troco.\nVolte Sempre!`)
    }
}