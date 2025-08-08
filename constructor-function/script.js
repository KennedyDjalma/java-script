/*
const pessoa = {
    nome: ' ' ,
    idade:  0 ,
    cidade: ' '
}

const pessoa1 = pessoa ;
pessoa1.nome = 'Kennedy';
pessoa1.idade = 29
*/

/*
//  EXEMPLO     1
const pessoa = {
    nome: '',
    idade: 0
}

const pessoa1 = pessoa;
pessoa1.nome = 'Kennedy';
pessoa1.idade = 29

const pessoa2 = pessoa;
pessoa2.nome = 'Djalma';
pessoa2.idade = 33

const pessoa3 = pessoa;
pessoa3.nome = 'Santana';
pessoa3.idade = 30
*/


//EXEMPLO   2
function Pessoa(name, idade) {
    this.nome = name;
    this.idade = idade ;
}


const pessoa1 = new Pessoa('Kennedy', 29);

const pessoa2 = new Pessoa('Djalma' , 33);

const pessoa3 = new Pessoa('Santana' , 30);
