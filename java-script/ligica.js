//aqui sao todas variaveis que vou usar ao longo do codigo
const display=document.getElementById("display");
const botoes=document.querySelectorAll(" .numeros button");
const operadores=document.querySelectorAll(".operador")
const igual=document.getElementById("igual")
const apagar=document.getElementById("limpar")

//aqui e o que acontece somente com os numeros
botoes.forEach(botao => {
       botao.addEventListener("click", () =>{display.value += 
        botao.textContent;}); 
});

//aqui e a parte dos operadores +,-,x,: todos excepto igualidade 
operadores.forEach(operador=>{operador.addEventListener("click",()=>{display.value +=
    operador.textContent})});

 //aqui a parte do apagar onde so pego a minha variavel limpar acima do codigo e resolvo com 
limpar.addEventListener("click",() =>{display.value =""})
igual.addEventListener("click",()=>{
    display.value
})


// function adicionarNoDisplay(valor){
// display.value += valor
// }

// function LimparDisplay(){
//     display.value =""
// }




