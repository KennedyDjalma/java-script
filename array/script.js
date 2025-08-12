/*
const vetor = ['Kennedy','Djalma','Santana'];

const matriz = [
    ['carro0','carro1','carro2'],
    ['pessoa0','pessoa1','pessoa2'],
    ['lugar0','lugar1','lugar2'],
]

console.log (matriz)
//console.log (vetor[2])
//console.log (matriz[2])
*/

const vetor = ['K', 'E', 'N']

const matriz = [
    ['carro0','carro1','carro2'],
    ['pessoa0','pessoa1','pessoa2'],
    ['lugar0','lugar1','lugar2'],
]
const matriz2 = [
    ['carro0','carro1','carro2'],
    ['pessoa0','pessoa1','pessoa2'],
    ['lugar0','lugar1','lugar2'],
]
console.log(matriz)

// length : ele vai mostrar quantos itens tem no array.
console.log(matriz.length)

// unshift : vai adicionar um novo item no inicio do array.
console.log(matriz.unshift('moto'))
console.log(matriz)

// shift : ele vai remover o primeiro item do array.
console.log(matriz.shift())
console.log(matriz)

// push : vai adicionar um item no final do array.
console.log(matriz.push('Bola'))
console.log(matriz)

// pop : ele remove o ultimo item do array.
console.log(matriz.pop())
console.log(matriz)

/*
// from : 
console.log(Matriz.from())
console.log(Matriz)
*/

/*
// isArray : vai retornar um bulian, informando se é ou nao array.
console.log(matriz.isArray(matriz))
*/

// join : ele vai unir todos itens do array numa string.
console.log(matriz.join())

// concat : vai concatenar os arrays.
console.log(matriz.concat(matriz2))

/*
// of : metodos estatico de criar array.
console.log(matriz.of(1,2,3,4))
console.log(matriz)
*/

// new Array : usando a função construtora para criar um novo array.
console.log(new Array(1,2,3,4))

// Array : temos mesmas funções do new Array sem precisar escrever o new.
console.log(Array(5,6,7,8))

// includes : vai fazer uma verificação se existe ou nao dentro do array retornando um bulian.
console.log(matriz.includes('array'))

// sort : ordenar os array, caso esteja fazendo arrays numericos ele ja ordena automaticamente os arrays.
console.log(matriz.sort())

// reverse : inverte nosso array.
console.log(matriz.reverse())

// indexOf : vai indentificar o array informado vai encontrar qual o primeiro local onde esta, e retornar o index dele.
console.log(matriz.indexOf('pessoa1'))

// lastIndexOf : vai pegar a ultima posição informada.
console.log(matriz.lastIndexOf('pessoa2'))