/*
function soma(v1, v2) {
    return v1 + v2;
}

var total = soma(19,10);
alert(total);

            // EXEMPLO 2

document.getElementById('texto').innerHTML = soma(19, 10);
*/

/*
        //EXEMPLO 2 FUNÇÃO
function realDolar (real,cotacaoDolar){
    return real * cotacaoDolar;
}

var total= realDolar(10,5.08);
alert(total);
*/

//      EXEMPLO 3

function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}
var valorReal = 7.89;
var cotacao = 5.10;

var total = realParaDolar(valorReal,cotacao);

alert   ('o valor em real é R$: '+ valorReal + ' o valor em dolar U$ é: ' + total);
