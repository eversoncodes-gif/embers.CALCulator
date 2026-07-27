const display=document.getElementById("display");

const botoes=document.querySelectorAll(" .numeros button");

botoes.forEach(botao => {
       botao.addEventListener("click", () =>{display.value += 
        botao.textContent;}); 
});


/*nesta parte vem as funcoes que eu vou usar para calcular */
function adicionarNoDisplay(valor){
display.value += valor
}

function LimparDisplay(){
    display.value =""
}




