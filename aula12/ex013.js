var agora = new Date()
var diaSem = agora.getDay()
/*
    Dias da semana para p Javascript

    0 = Domingo 
    1 = Segunda
    2 = Terça
    3 = Quarta 
    4 = Quinta 
    5 = Sexta
    6 = Sábado
*/

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda')
        break
    case 2: 
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4: 
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6: 
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}

console.log('')

escolha = 2
console.log('Escolha 3 opções:')
switch (escolha){
    case 1:
        console.log(`Você escolheu um chocolate`)
        break
    case 2:
        console.log(`Você escolheu uma paçoca`)
        break
    case 3:
        console.log(`Você escolheu um bombom`)
        break
    default:
        console.log(`Opção inválida.`)
}