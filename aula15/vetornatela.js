let num = [15,35,17,16]

console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
/*
for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
// Para cada posição em num
for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}