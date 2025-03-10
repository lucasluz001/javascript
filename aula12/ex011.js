var idade = 16
if (idade >= 18 && idade <= 65){
    console.log(`Voto obrigatório`)
} else if (idade >= 16){
    console.log(`Voto opcional`)
} else {
    console.log(`Não vota`)
}

console.log(``)

if(idade >= 18 && idade < 65){
    console.log(`Pode beber`)
} else if (idade >= 65){
    console.log(`Beber nessa idade é arriscado`)
} else {
    console.log(`Não pode beber`)
}
