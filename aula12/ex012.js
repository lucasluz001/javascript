var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12){
    console.log(`Bom dia!`)
} else if (hora < 18){
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}

var nota = 1
console.log(`Sua nota na prova foi ${nota}`)
if (nota < 5){
    console.log(`Reprovado`)
} else if (nota == 10){
    console.log(`Aprovado com distinção`)
} else if( nota > 10 ){
    console.log(`Nota inválida`)
} else {
    console.log(`Aprovado`)
}