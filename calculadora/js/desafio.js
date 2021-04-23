console.log("desafioReprograma")

var entrada = document.querySelector('input')
console.log(entrada)

var inputValorHora = entrada.value
console.log("valor-hora")

var saida = document.querySelector("#respostaProjeto")

console.log("#saida.textcontent")

saida.textcontent = respostaProjeto

function clicar() {
    var respostaProjeto = entrada.value
    console.log = ("#respostaProjeto")

}


var spanHora = document.querySelector ("#resposta");
console.log (spanHora)

var inputValorHora = document.querySelector ("#valor-hora")
console.log (inputValorHora)

var inputHorasDoProjeto = document.querySelector ("#horas-projeto")
console.log (inputHorasDoProjeto)

function calcularProjeto (){

    var qtdTotalDeHoras = inputHorasDoProjeto.valueAsNumber * 22
    var valorDeHora = (inputValorHora.valueAsNumber / qtdTotalDeHoras).toFixed(2); 
}