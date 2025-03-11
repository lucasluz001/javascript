var botao = window.document.querySelector('input#btn')
var res = window.document.querySelector('div#resultado')
botao.addEventListener('click', converter)

function converter(){
    const celsius = parseFloat(prompt('Digite uma temperatura em °C (Celsius)'))
    const kelvin = celsius + 273.15
    const fahrenheit = (celsius * 9/5)+32
    res.innerHTML = `<h2>A temperatura de ${celsius.toLocaleString()} °C, corresponde a...</h2>`
    res.innerHTML += `<p>${kelvin.toLocaleString()}°K (Kelvin)</p>`
    res.innerHTML += `<p>${fahrenheit.toLocaleString()}°F (Fahrenheit)</p>`

}
