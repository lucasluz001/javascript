enviar.addEventListener('click', verificar)

function verificar(){
    var formAno = window.document.getElementById('ano')
    var formSexo = window.document.getElementById('sexo')
    var res = window.document.getElementById('res')
    var data = new Date()
    var ano = data.getFullYear()

    // VERIFICA SE ESTÁ VAZIO E SE O ANO DIGITADO FOR MAIOR QUE O ANO ATUAL
    if (formAno.value.length == 0 || formAno.value > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente.')
    }else {
        var formSexo = document.getElementsByName('sexo')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        // VERIFICA O SEXO
        if(formSexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // CRIANÇA
                img.setAttribute('src', 'imagens/criancam.jpg')
            }else if (idade < 21){
                // JOVEM
                img.setAttribute('src', 'imagens/adolescentem.jpg')
            }else if (idade < 70){
                // ADULTO
                img.setAttribute('src', 'imagens/homem.jpg')
            }else{
                //IDOSO
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }else if(formSexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // CRIANÇA
                img.setAttribute('src', 'imagens/criancam.jpg')
            }else if (idade < 21){
                // JOVEM
                img.setAttribute('src', 'imagens/adolescentef.jpg')
            }else if (idade < 70){
                // ADULTO
                img.setAttribute('src', 'imagens/mulher.jpg')
            }else{
                //IDOSA
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}