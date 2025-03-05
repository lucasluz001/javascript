let num = window.document.querySelector('input#num')
let lista = window.document.querySelector('select#lista')
let res = window.document.querySelector('div#res')
var numeros = []

// VERIFICA SE O NÚMERO ESTÁ ENTRE 1 E 100
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
// VERIFICA SE O NÚMERO ESTÁ NA ARRAY
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
// ADICIONA UM NÚMERO NA ARRAY
function adicionar(){ 
    if (isNumero(num.value) && !inLista(num.value, numeros)){
        numeros.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert("Valor inválido ou já encontrado na lista.")
    }
    // LIMPA A CAIXA DE TEXTO
    num.value = ''
    // CRIA O FOCO NA CAIXA DE TEXTO
    num.focus()
}
// FUNÇÕES MOSTRAR TOTAL, SOMA, MENOR NUMERO, MAIOR NUMERO E MÉDIA
function finalizar(){
    if (numeros.length == 0){
        window.alert("Adicione valores antes de finalizar")
    } else {
        let total = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0
        for(let pos in numeros){
            soma += numeros[pos]
            if (numeros[pos] > maior)
                maior = numeros[pos]
            if (numeros[pos] < menor)
                menor = numeros[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}