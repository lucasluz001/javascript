// Variável composta | Array | Vetor
let num = [4, 3, 2, 5, 1]

// Acrescenta um valor a uma posição desejada
num[5] = 7

// Acrescenta um valor a última posição
num.push(6)

// Mostra o vetor em ordem crescente
num.sort()

console.log(num)

// Mostra quantos elementos possui o vetor
console.log(`O vetor tem ${num.length} posições.`)

// Mostra o valor da posição desejada
console.log(`O primeiro valor do vetor é ${num[0]}.`)

let pos = num.indexOf(5)

if (pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor 5 está na posição ${pos}`)
}
