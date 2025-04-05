// let verdade = True;

// let a = 10;

// if(verdade){
//     console.log('dentro do IF:', a);
//     let b = 20; 
// }

// let b = 30
// console.log('Fora do IF:', b)

// "or" são dois ||, "and" são dois &&;
// dois iguais ==, desconsidera se é numero ou string, se o conteúdo for o msm ele da como certo;
// três iguais ===, faz igual em python;
// maior > ou menor <, maior e igual >==, menor e igual <==


const input = document.querySelector("#input")
console.log(input);

const botao = document.querySelector("#botao")
botao.addEventListener("click", function(){
    console.log(number(input.value));
})

// => mesma coisa que function
// parseInt e parseFloat e tem o number

