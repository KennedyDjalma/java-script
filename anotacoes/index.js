/*
document.getElementById("texto").innerHTML="Meu primeiro texto <b> JS </b>";
alert("Seja bem vindo!");
console.log("Oi isso é um console.log");

console.log(5+5);
*/

/*
var a = 1;
var b = 5;
var c = a + b;
console.log(c);
*/

/* 
var PESSOA = "Kennedy ";
var pessoa = "Djalma";
console.log(PESSOA + pessoa); 
*/


/*
 aula 6 variaveis 
var a, b, c;
var a = 2;
var b = 3;
var c = a + b;
alert(c);
*/

// a variavel em cima é a mesma coisa da variavel de baixo, a variavel de baixo esta abreviada

/*
var a, b, c;
a = 2;
b = 3;
c = a + b;
alert(c); 
*/

/*
delclaracao de variaveis
var nome, sobrenome, nomeCompleto, idade;

atribuiçao dos valores
nome = "Kennedy";
sobrenome = "Djalma";
idade = 28;
nomeCompleto = nome + " " + sobrenome;

pessoa = nome + " " + idade;

document.getElementById("texto").innerHTML = pessoa;
*/


// CONTINUAÇÃO AULA 7

// 1) OPERADORES ARITIMÉTICOS (MATEMÁTICOS)
/*
var valor1, valor2, valor3, total;
valor1 = 5;
valor2 = 2;

total = valor1 + valor2 ;
alert(total);
-------------------------------------------
var valor1, valor2, valor3, total;
valor1 = 5;
valor2 = 2;

total = ++ valor1;
alert(total);
alert('O valor1 ficou: ' + valor1);
*/
/*
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

valor1 = valor1 + valor2;
alert(valor1);
*/

/*
var valor1, valor2, total;
valor1 = "Kennedy";
valor2 = "Djalma";
total = valor1 + " " + valor2;

alert (total);
*/

/*
var valor1, valor2, total;
valor1 = 8;
valor2 = 8;

total = (valor1 != valor2);
alert(total);
*/
/*
var idade, eleitor;
idade = 18;
eleitor = (idade < 18) ? "Não, eleitor": "Sim, eleitor";

alert('A resposta é: ' + eleitor);
*/

/*
var idade, eleitor, resultado;
idade = 71;
eleitor = (idade < 18) ? "Não, eleitor": "Sim, eleitor";

resultado = (idade === 65 || idade === 72); //true //false
alert (resultado);
*/
/*
function soma(valor1,valor2){
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML=soma(10,10);
*/
//////////////////////////////////////////////////////
/*
function soma(valor1,valor2){
    return valor1 + valor2;
}
    var total=soma(10,23);
alert(total);
*/
//////////////////////////////////////////////////////
/*
function soma(valor1,valor2){
    return valor1 + valor2;
}

function realParaDolar(real,cotacaoDolar){
    return real*cotacaoDolar;
}
var total=realParaDolar(10,5.08);
alert(total);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
<script src="js/index.js"></script>
<!-- o js é colocado no final da tag bady, porque é uma parte mais pesada do site e sempre sera carregado primeiro o conteudo do html -->

DENTRO DO JS : alert('Um alerta rodando de uma página externa')



<!-- <script>
    aqui tem um script interno, quando usamos o js dentro da tag BODY
</script> -->
*/
//////////////////////////////////////////////////////
/*------------------------------------- aula 2 ------------

    HTML:
    <body>
        <h1>Aprendendo JavaScript</h1>
        <p id="texto"></p>
        <p>
            <script>
                document.write('Oi escrito com documento.write');
            </script>
        </p>

    JS:
    document.getElementById("texto").innerHTML="Meu primeiro texto <b> JS </b>";

    -nesse codigo aprendemos como escrever um determinado elemento no html usando o js...
    dentro do document usamos o getElementById, e o ID é o mesmo do html que queremos escrever("texto") , e que mostre na tela um conteudo hml innerHTML="Meu primeiro texto <b> JS </b>";


alert('Seja bem vindo!');


console.log('Oi isso é um console.log');*/

/*//////////////////////////////////////////////////////
------------------------------------- aula 3 ------------
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
------------------------------------- aula 4 ------------
SINTAXE DO JS

dentro do js tem varios tipos de conteudos

ex:
console.log(5+5);     no console é = 10
console.log("5+5");   no console é = 5+5

no js existe tambem as variaveis: var; let; const;

ex var:
var a = 1;
var b = 5;
var c = a + b;
console.log (c);

ex2 var:
var PESSOA = "Kennedy";
var pessoa = "Djalma";
console.log(PESSOA + pessoa);

*/
//////////////////////////////////////////////////////
/*------------------------------------- aula 5 ------------
COMENTARIOS NO JS
É usado apenas duas barras no começo da linha para comentarios em apenas uma linha "//"

//para comentarios em mais de uma linha seguida, usa-se: /* */ //"barra asteristico asteristico barra" "     /* comentario mais de uma linha juntos */        ".

//////////////////////////////////////////////////////
/*------------------------------------- aula 5 ------------
AULA DE variaveis :  VAR LET CONST

/* aula 6 variaveis 
var a, b, c;
var a = 2;
var b = 3;
var c = a + b;
alert(c); */

// a variavel em cima é a mesma coisa da variavel de baixo, a variavel de baixo esta abreviada

/*var a, b, c;
a = 2;
b = 3;
c = a + b;
alert(c); */

/*
// delclaracao de variaveis
var nome, sobrenome, nomeCompleto, idade;

//atribuiçao dos valores
nome = "Kennedy";
sobrenome = "Djalma";
idade = 28;
nomeCompleto = nome + " " + sobrenome;

pessoa = nome + " " + idade;

document.getElementById("texto").innerHTML = pessoa;*/
/*
//////////////////////////////////////////////////////
------------------------------------- aula 7 ------------
    OPERADORES

-> OS OPERADORES JS SÃO USADOS PARA ATRIBUIR VALORES, COMPRAR VALORES, EXECULTAR OPERAÇÕES ARITIMÉTICAS E MUITO MAIS.

SÃO SINAIS QUE USAMOS: + - * / = ++ -- += -=  || ETC...

SÃO SEPARADOS EM 6 "CATEGORIAS":

1) OPERADORES ARITIMÉTICOS (MATEMÁTICOS)
2) OPERADORES DE ATRIBUIÇÃO
3) OPERADORES DE SEQUÊNCIA
4) OPERADIRES DE COMPARAÇÃO
5) OPERADOR CONDICIONAL (TERNÁRIO)
6) OPERADORES LÓGICOS

1) OPERADORES ARITIMÉTICOS (MATEMÁTICOS)

var valor1, valor2, valor3, total;
valor1 = 5;
valor2 = 2;

total = valor1 + valor2;
alert(total);

-----------------------------------------------------
var valor1, valor2, valor3, total;
valor1 = 5;
valor2 = 2;

total = ++ valor1;
alert(total);
[MENSAGEM ALERTA VAI DAR = 6 PORQUE SOMOU VALOR1 ++ "MAIS 1"]

-----------------------------------------------------
var valor1, valor2, valor3, total;
valor1 = 5;
valor2 = 2;

total = ++ valor1;
alert(total);
alert('O valor1 ficou: ' + valor1);
[MENSAGEM ALERTA VAI DAR = 6 PORQUE SOMOU VALOR1 ++ "MAIS 1"  (O valor1 ficou:6)  ]

//////////////////////////////////////////////////////

2) OPERADORES DE ATRIBUIÇÃ

var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

valor1 = valor1 + valor2;
alert(valor1);

[VAI SER A MESMA COISA DE USAR O COMANDO ABAIXO:]

var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

valor1 += valor2;
alert(valor1);

//////////////////////////////////////////////////////

3) OPERADORES DE SEQUÊNCIA (concatenação)

var valor1, valor2, total;
valor1 = "Kennedy";
valor2 = "Djalma";
total = valor1 + " " + valor2;

alert (total);

[VAI SER A MESMA COISA DE USAR O COMANDO ABAIXO:]

var valor1, valor2, total;
valor1 = "Kennedy ";
valor2 = "Djalma";
total = valor1 + valor2;

alert (total);

//////////////////////////////////////////////////////

4) OPERADIRES DE COMPARAÇÃO
o sinal de == é usado para compraração, nesse caso o cod esta perguntando se o valor1 é igual ao valor2.
sendo a resposta na pag: true(verdadeiro) ou false(falso).

var valor1, valor2, total;
valor1 = 8;
valor2 = 8;

total = (valor1 == valor2);
alert(total);

[VAI SER DIFERENTE DE USAR O COMANDO ABAIXO:] porque o valor2 esta entre aspas e quando esta assim, o js entende que isso é um texto e nao numeral, quando se usa === é um operador de comparação que esta sendo perguntado se o valor 1 é igual ao valor2 e tambem pergunta se é o mesmo tipo.

var valor1, valor2, total;
valor1 = 8;
valor2 = "8";

total = (valor1 === valor2);
alert(total);

[VAI SER DIFERENTE DE USAR O COMANDO ABAIXO:] usa-se o != para perguntar se o valor1 é DIFERENTE do valor2 obtendo o alert true ou false

var valor1, valor2, total;
valor1 = 8;
valor2 = 8;

total = (valor1 != valor2);
alert(total);

//////////////////////////////////////////////////////

5) OPERADOR CONDICIONAL (TERNÁRIO)

var idade, eleitor;
idade = 18;
eleitor = (idade < 18) ? "Não, eleitor": "Sim, eleitor";

alert('A resposta é: ' + eleitor);

//////////////////////////////////////////////////////

6) OPERADORES LÓGICOS
[
 os sinais de && significa o "e"
]

var idade, eleitor, resultado;
idade = 18;
eleitor = (idade < 18) ? "Não, eleitor": "Sim, eleitor";

resultado = (idade > 60 && idade < 70);
alert (resultado);

[ 
os sinais de || significa "ou"
]

var idade, eleitor, resultado;
idade = 18;
eleitor = (idade < 18) ? "Não, eleitor": "Sim, eleitor";

resultado = (idade === 65 || idade === 72); //true //false
alert (resultado);

-----------------------------------------------------*/
/*
FUNÇÕES
Uma função js é um bloco de codigo projetado para executar uma tarefa especifica.

É como uma pequena "fabrica" onde voce faz uma entrada e ele te da uma saída.

Pode ser encontrado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo o codigo.

Uma função js é execultada quando "algo" a invoca(chama-a).

ex funcao de soma:
function soma(valor1,valor2){
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML=soma(10,10);

ex2:
 function soma(valor1,valor2){
    return valor1 + valor2;
}

var total=soma(10,23);
alert(total);

 //////////////////////////////////////////////////////

ex3 funcao de cotacao do dolar:
function soma(valor1,valor2){
    return valor1 + valor2;
}

function realParaDolar(real,cotacaoDolar){
    return real*cotacaoDolar;
}
var total=realParaDolar(10,5.08);
alert(total);

//////////////////////////////////////////////////////*/

/*
--------------------------- aula 9--------------------------
OBJETOS
Objetos são basicamente variáveis com muitos valores dentro.

Ex: Const carro = {marca:"ford", modelo:"ka", ano:2015}
Os valores dentro de um objeto sao chamados propriedades.

Objetos também poden ter metodos. Um método é uma função colocadas dentro de uma propriedade.

const carro={
    marca:"ford",
    modelo:"ka",
    ano:2015,
    placa:"abc-1234",
    buzina: function () { alert ('Biiii') }
};

carro.buzina();

*/


//////////////////////////////////////////////////////
