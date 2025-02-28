enviar.addEventListener('click', calcular)

function calcular(){
    var numero = window.document.querySelector('input#numero')
    var tabuada = window.document.querySelector('select#tabuada')
    if (numero.value.length == 0){
        window.alert('Por favor digite um número.')
    } else {
        var num = Number(numero.value)
        var mult = 1
        // LIMPA A CAIXA TODA VEZ QUE O CÓDIGO RODAR
        tabuada.innerHTML= ''
        // ENQUANTO mult FOR MENOR OU IGUAL A 10 
        while (mult <=10){
            // CRIA UM OPTION PRA CADA CONTA NO SELECT
            var item = document.createElement('option')
            // CONTA DE MULTIPLICAÇÃO
            item.text = `${num} * ${mult} = ${num*mult}`
            // CRIA UM VALUE PRA CADA CONTA
            item.value =  `tab${mult}`
            // EXECUTA O OPTION
            tabuada.appendChild(item)
            mult++
        }
        
    }
}