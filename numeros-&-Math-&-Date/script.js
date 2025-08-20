const numero = 10
const string = '20.9'
const numeroQuebrado = 10.8

// retorna um numero a partir de uma string
Number.parseFloat('20') // 20

// retorna um numero a partir de uma string, podendo definir a casa decimal
Number.parseInt(string, 10) // 20

//arredonda um numero com base nas casas decimais
numeroQuebrado.toFixed() // 11

//retorna uma string a partir de um numero
numero.toString() // '20'



// math --> objeto nativo de JS que possui metodos e propriedades de expressoes automaticos.

//retorna valor absoluto
Math.abs(-5) // 5

// arredonda valor pra cima
Math.ceil(4.3) // 5

// arredonda valor para baixo
Math.floor(4.8) // 4

// arredonda para numero mais proximo
Math.round(4.3) // 4

// retorna um numero aleatorio entre 0 e 1
console.log( ( Math.random() *1000 ) .toFixed() )

// retorna o maior numero dentre os listados
Math.max(2,3,7,12) // 12

//retorna o menor numero dentre eles
Math.min(2,3,7,12) // 2


const hoje = new Date();
console.log( hoje.getDate() ) // retorna que dia é hoje

console.log( hoje.getMonth() ) // retorna qual o mes

console.log( hoje.getFullYear() ) //retorna o ano

console.log( hoje.getHours() ) //retorna a hora

console.log( hoje.getMinutes() ) //retorna os minutos

console.log( hoje.getDay() ) //retorna o dia da semana em ingles