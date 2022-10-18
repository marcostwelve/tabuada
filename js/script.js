var valor = document.querySelector("div.container input");
var tabuada = document.querySelector("div.container div.tabuada");
const calcular = document.querySelector("div.container button");

calcular.addEventListener("click", () => {
    tabuada.innerHTML = "";

    if(Number(valor.value) < 0 || Number(valor.value) > 10 || valor.value == "") {
        tabuada.innerHTML = "Insira um número entre 0 e 10";
    }
    else {

        /* For de i iniciando com 0 até 10, pois normalmente a tabuada é calculada de 0 á 10 */

        for(var i = 0; i <= 10; i++) {
            var calc = valor.value+ " x " +String(i)+ " = " +i * Number(valor.value);

            var resultado = document.createElement("p");

            resultado.innerText = calc

            tabuada.appendChild(resultado);
        }
    }
});