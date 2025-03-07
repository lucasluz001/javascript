let pessoa = {nome: 'Lucas',
     sexo: 'M', 
     peso: 55,
      engordar(p=0){
        console.log('Engordou')
        this.peso += p
      }}

console.log(pessoa)