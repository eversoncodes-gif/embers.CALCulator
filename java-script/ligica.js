//aqui sao todas variaveis que vou usar ao longo do codigo
const display=document.getElementById("display");
const botoes=document.querySelectorAll(" .numeros button");
const operadores=document.querySelectorAll(".operador:not(#igual)")
const igual = document.getElementById("igual")
const limpar=document.getElementById("limpar")

//aqui e o que acontece somente com os numeros
botoes.forEach(botao => {
       botao.addEventListener("click", () =>{display.value += 
        botao.textContent;}); 
});

//aqui e a parte dos operadores +,-,x,: todos excepto igualidade 
operadores.forEach(operador=>
    {
    operador.addEventListener("click",()=>{
        let valor=operador.textContent;
        if (valor ==="&times") 
            {
            valor ="*";
            }
        if (valor ==="&divide") 
            {
                valor="/";
            }
        display.value +=
    operador.textContent})});

//aqui a parte do apagar onde so pego a minha variavel limpar acima do codigo e resolvo com 
limpar.addEventListener("click",() =>{display.value =""})

//apagar apenas um elemento 
const apagarUm=document.getElementById("apagar");
apagarUm.addEventListener("click",()=>{
    display.value=display.value.slice(0,-1)
})



// operador de igual a parte que estou desenvolvendo    
igual.addEventListener("click",()=>{
    const espressao=display.value;
    console.log(espresao);
})


// function adicionarNoDisplay(valor){
// display.value += valor
// }

// function LimparDisplay(){
//     display.value =""
// }




