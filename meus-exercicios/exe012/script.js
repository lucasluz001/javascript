// Faça um programa que leia um vetor numérico de 10 posições. Depois, ordene o vetor em ordem crescente e apresente os elementos ordenados.

var res = window.document.querySelector(`div#res`)

function ordenar(){
      const vetor = [10]
      for (let p = 0; p < 10; p++){
          const addVet = parseFloat(prompt('Número que deseja colocar no vetor:'))
          vetor[p] = addVet
      }
      
      var maior = vetor[0]
      for(let i = 0; i < vetor.length - 1; i++){
          if(vetor[i] > maior){
              maior = vetor[i]
          } 
      }
      res.innerHTML = ''
      res.innerHTML += `<p>Vetor = [${vetor}]</p><br>`
      res.innerHTML += `<p>Maior número do vetor = ${maior}</p><br>`
      res.innerHTML += `Vetor ordenado = [${vetor.sort((a,b) => a-b)}]`
      }

      