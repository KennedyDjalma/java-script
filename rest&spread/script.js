/*
//      REST
function estados(...estados){
    console.log(estados [1])
}
estados('CE', 'PE', 'BA', 'SP', 'RS', 'SC', )
*/


/*
//       SPREAD
const motosAltas = ['Bros', 'Crosser', 'Xre', 'Lander']
const motosBaixas = ['Fan', 'Factor', 'Bis', 'Neo']

const motos = [...motosAltas, ...motosBaixas]
console.log(motos)
*/


const pessoa = {
    nome: ' Kennedy',
    idade: 29,
    profissao: 'ADS'
}

const endereco = {
    estado: 'PE',
    cidaed: 'Lagoa'
}

const dados = {
    ...pessoa, ...endereco
}
console.log(dados)