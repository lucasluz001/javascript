enviar.addEventListener('click', contar)

function contar(){
    var inicio = window.document.querySelector('input#inicio')
    var fim = window.document.querySelector('input#fim')
    var passo = window.document.querySelector('input#passo')
    var res = window.document.querySelector('div#res')

    // TESTA AS VARIÁVEIS, CASO ESTEJA FALTANDO NÚMERO NA INPUT
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar..'
        window.alert("Insira um número nos campos abaixo por favor.")
    // SE NAO EXECUTA OS CODIGOS A SEGUIR
    }else {
        res.innerHTML = 'Contando:<br> '
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value)
        // SE O p FOR MENOR OU IGUAL A ZERO
        if (p <= 0){
            window.alert('Passo Inválido! Considerando Passo 1')
            p = 1
        }
        // SE i FOR MENOR QUE f, A CONTAGEM SERÁ CRESCENTE
        if (i < f){
            // LAÇO, ENQUANTO O contador FOR MENOR OU IGUAL A f SOME contador COM p
            for(var contador = i; contador <= f; contador += p){
                res.innerHTML += `${contador} \u{270D}`
            }
        // SENÃO DECRESCENTE
        }else {
            // LAÇO, ENQUANTO O contador FOR MAIOR OU IGUAL A f SUBTRAIA contador COM p
            for(var contador = i; contador >= f; contador -= p){
                res.innerHTML += `${contador} \u{270D}`
    
            }
            
        }
         res.innerHTML += `\u{1F3C1}`
    }
   
}