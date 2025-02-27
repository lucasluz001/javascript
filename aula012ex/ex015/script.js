enviar.addEventListener('click', verificar)

function verificar(){
    // DECLARAÇÃO DE VARIÁVEIS
    var formAno = window.document.getElementById('ano')
    var res = window.document.getElementById('res')
    var data = new Date()
    var ano = data.getFullYear()

    // VERIFICA SE ESTÁ VAZIO E SE O ANO DIGITADO FOR MAIOR QUE O ANO ATUAL
    if (formAno.value.length == 0 || formAno.value > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente.')
    }else {
        // SE NÃO ESTIVER VAZIO E MAIOR QUE O ANO ATUAL ENTÃO CRIE ESSAS VARIÁVEIS
        var formSexo = document.getElementsByName('sexo')
        var idade = ano - Number(formAno.value)
        var genero = ''
        // CRIA UMA VARIÁVEL QUE CRIA UMA IMAGEM NO DOCUMENTO
        var img = document.createElement('img')
        // PARA A IMAGEM CRIA O id = foto
        img.setAttribute('id', 'foto')
        // VERIFICA SE O SEXO MASCULINO TA SELECIONADO
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
            //VERIFICA SE O SEXO FEMININO TA SELECIONADO
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
        // O MÉTODO appendChild DEVOLVE UMA REFERÊNCIA AO NÓ ADICIONADO
        // res = PAI, ONDE SERÁ ADICIONADO A IMAGEM
        // img = FILHO, A IMAGEM QUE SERÁ ADICIONADA A res
        res.appendChild(img)
    }
}