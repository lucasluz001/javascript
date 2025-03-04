function parOuImpar(n){
    if (n % 2 == 0){
        return "Par"
    }else {
        return "Impar"
    }
}

let res = parOuImpar(2)
console.log(res)