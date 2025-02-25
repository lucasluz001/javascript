function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    // ATRIBUI A VARIAVEL hora VALOR DE HORAS EM TEMPO REAL
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    // TESTA A VARIAVEL hora E MUDA A IMAGEM E BACKGROUND
    if(hora >=0 && hora < 12){
        // BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#fbc57d'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#f68f45'
    }else {
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#4a4e51'
    }
}

