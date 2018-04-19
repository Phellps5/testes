let entrada = document.querySelector("input");
let botao = document.querySelector("button");
let ana = 0;
let marcos = 0;

botao.onclick = function(){
    let palavra = entrada.value;
    for(let test of palavra){
        if(test === "a" || test === "e" || test === "i" || test === "o" || test === "u"){
            ana++;
        } else{
            marcos++;
        }
    }
    console.log (ana);
    console.log(marcos);
    if(ana > marcos){
        let resultado = document.createElement("p");
        resultado.innerHTML = "Ana ganhou";
        let body = document.querySelector("body");
        body.appendChild (resultado);    
    } else{
        let resultado = document.createElement("p");
        resultado.innerHTML = "Marcos ganhou";
        let body = document.querySelector("body");
        body.appendChild (resultado);
    }
}


