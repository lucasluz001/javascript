// FAÇA UM PROGRAMA QUE EXIBA 3 NÚMERO NA TELA

var res = window.document.querySelector('div#res')

function personagemMorreu (dano, saude){
    dano = Number(prompt('Digite o dano: '))
    saude = Number(prompt('Digite a saude: '))
    if (saude - dano <= 0){
        res.innerHTML = `<p>Seu personagem recebeu ${dano} de dano e morreu. Saúde igual a ${saude}.</p>`
    }else {
        res.innerHTML = `<p>Seu personagem recebeu ${dano} de dano e sobreviveu. Saúde igual a ${saude}.</p>`
    }


}