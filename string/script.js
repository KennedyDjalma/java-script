const string = 'Linguagem JavaScript' + '';
const string2 = ' de Programação';

// lenght: ele vai retornar a quantidade de caracteres em uma string.
console.log(string.length)

// charAt: vai retornar o caractere na posição que pedir.
console.log(string.charAt(6))

// toLowerCase: Ele vai retornar a string com letras minusculas.
console.log(string.toLowerCase())

// toUpperCase: Ele retorna as letras todas maiúsculas.
console.log(string.toUpperCase())

// endsWith: vai retornar um bulian.
console.log(string.endsWith('Script'))

// startsWith: vai verificar se a string começa com o que passamos.
console.log(string.startsWith('L'))

// includes: vai verificar se a string esta contida dentrode outra string.
console.log(string.includes('JavaScript'))

// concat: vai unir duas strings.
console.log(string.concat(string2))

// subString: vai pegar um pedaço de uma string que informar-mos.
console.log(string.substring(1,3))

// slice: basicamente funciona como uma substring, com a diferença de poder passar numeros negativos
console.log(string.slice(-3))

// padStart: vai almentar a nossa string preenchendo com caracteres que passarmos.
console.log(string.padStart(25, '-_'))

// padEnd: tem funcionalidade parecida com padStart, diferenciando que vai adicionar ao final da string.
console.log(string.padEnd(25, '-_'))

// split: vai cortar a string no caractere que informar e vai construir um array.
console.log(string.split(' '))

// replace: vai substituir um caractere de uma string por outro.
console.log(string.replace('i', 'a'))