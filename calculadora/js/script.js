var spanHora = document.querySelector ("#resposta");
console.log(spanHora)

var inputGanhoPorMes = document.querySelector ('#ganho-mes')
console.log(inputGanhoPorMes)

var inputHorasPorDia = document.querySelector('#horas-dia')
console.log(inputHorasPorDia)


function calcularValorHora(){
    var qtdTotalDeHoras = inputHorasPorDia.valueAsNumber * 22
    var valorDeHora = (inputGanhoPorMes.valueAsNumber / qtdTotalDeHoras).toFixed(2);

    spanHora.textContent = "R$" + valorDeHora 
}

