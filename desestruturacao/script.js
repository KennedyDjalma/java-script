
//      DESESTRUTURAÇÃO DE OBJETOS
/*
const Pessoa = {
    nome : 'Kennedy',
    idade : 29 ,
    cidade : 'Lagoa',
}

const {cidade, nome, idade} = Pessoa;

console.log()
*/

/*
const Pessoa = {
    nome : 'Kennedy',
    idade : 29 ,
    endereco: {
        estado: 'PE',
        cidade: 'Lagoa',
        rua: 'Braz',
        numero: 7
    }
}

const {estado, cidade, rua, numero} = Pessoa.endereco;

console.log(cidade)
*/

//      DESESTRUTURAÇÃO DE ARRAYS

const motos = ['Honda', 'Yamaha', 'Dafra', 'Bajaj'];
//console.log(motos[2])
const [primeiraMoto, segundaMoto, terceiraMoto] = motos;
console.log(primeiraMoto)  