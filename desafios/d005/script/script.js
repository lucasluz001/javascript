var botao = window.document.querySelector('input#btn')
var res = window.document.querySelector('div#resultado')
botao.addEventListener('click', converter)

function converter(){
    const metro = parseFloat(prompt('Digite uma distância em metros (m)'))
    const km = metro / 1000
    const hect = metro / 100
    const deca = metro / 10
    const deci = metro * 10
    const cent = metro * 100
    const mili = metro * 1000
    res.innerHTML = `<h2>A distância de ${metro.toLocaleString()} metros, corresponde a...</h2>`
    res.innerHTML += `<p>${km.toLocaleString()} quilômetros (Km)</p>`
    res.innerHTML += `<p>${hect.toLocaleString()} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${deca.toLocaleString()} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${deci.toLocaleString()} decímetros (dm)</p>`
    res.innerHTML += `<p>${cent.toLocaleString()} centímetros (cm)</p>`
    res.innerHTML += `<p>${mili.toLocaleString()} milímetros (mm)</p>`
}
