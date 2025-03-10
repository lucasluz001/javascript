function funcaoMensagem(){
var botao1 = window.document.querySelector('input#btn1')
var botao2 = window.document.querySelector('input#btn2')
var botao3 = window.document.querySelector('input#btn3')

botao1.addEventListener('click', function(){
    window.alert('Você cliclou no 1º botão!')
})

botao2.addEventListener('click', function(){
    window.alert('Vcoê clicou no 2º botão!')
})

botao3.addEventListener('click', function(){
    window.alert('Você cliclou no 3º botão!')
})
}