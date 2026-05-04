//busca dados do php

fetch("listar_transacoes.php")
.then(res => res.json())
.then(dados => {

    console.log(dados); //só pra testar

let entradas = 0;
let saidas = 0;

dados.forEach(item => {

    let valor = Number(item.valor);

    if(item.tipo === "entrada"){
        entradas += valor;
    }
    else{
        saidas += valor;
    }

});

//mostra no console para teste
console.log("entradas: ", entradas);
console.log("saidas: ", saidas);

});

let ctx =
document.getElementById("graficoMensal");

new Chart(ctx,{
    type: "bar"
    data:{
        labels: ["entradas", "saidas"],
        datasets: [{
            label: "valores",
            data: [entradas,saidas],
            borderwidth: 1
        }]
    }
});