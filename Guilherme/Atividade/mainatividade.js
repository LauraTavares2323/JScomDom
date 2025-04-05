const input1 = document.querySelector("#input1")

const input2 = document.querySelector("#input2")

const bootao = document.querySelector("#Botao")

const resultado = document.querySelector("#resultado")


const botao = document.querySelector("#Botao")
botao.addEventListener('click', function(){
    let valor = 0
    valor = Number(input1.value) + Number(input2.value);
    resultado.textContent = "Resultado: " + valor;

})

