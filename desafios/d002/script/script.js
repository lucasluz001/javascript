var botao = window.document.querySelector('input#btn')
botao.addEventListener('click', quizz)

function quizz(){
    const qualSeuNome = window.prompt('Qual seu nome?')
    const qualSuaIdade = window.prompt('Qual sua idade?')
    window.alert(`Acabei de conhecer o(a) ${qualSeuNome}, que tem ${qualSuaIdade} anos de idade!`)
}