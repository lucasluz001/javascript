// FAÇA UMA FUNÇÃO QUE RECEBA 2 PARÂMETROS, DANO E SAUDE. A FUNÇÃO DEVE RETORNAR 1 SE O DANO FOR MATAR O PERSONAGEM (OU SEJA DEIXAR A SAUDE MENOR OU IGUAL A ZERO) E 0 CASO O CONTRÁRIO.


function personagemMorreu (dano, saude){
    if (saude - dano <= 0){
        return 1
    }else {
        return 0
    }
    
}
var luta = personagemMorreu(5,4)
console.log(luta)
