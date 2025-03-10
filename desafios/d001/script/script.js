function funcaoMensagem(){
var botao1 = window.document.querySelector('input#btn1')
var botao2 = window.document.querySelector('input#btn2')
var botao3 = window.document.querySelector('input#btn3')

// Ao clicar no botão é disparado a função que possui o alert
botao1.addEventListener('click', function(){
    window.alert('Você cliclou no 1º botão!')
})
// Ao clicar no botão é disparado a função que possui o alert
botao2.addEventListener('click', function(){
    window.alert('Vcoê clicou no 2º botão!')
})
// Ao clicar no botão é disparado a função que possui o alert
botao3.addEventListener('click', function(){
    window.alert('Você cliclou no 3º botão!')
})
}