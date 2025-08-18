// As funçoes tambem sao criados com um construtor, o function, por isso ele herda metodos e propriedades
/*
function retornaNome (nome, age) {
    console.log(nome)
}
    */

                //Length :
// retornaNome.length; // vai retornar a quantidade de parametros dentro dele. ex: 2.

// retornaNome.name; // retornaNome

                // Principais metodos de funções
/*                
    function retornaNome (nome, age) {
    console.log(nome, this.profissao, this.cidade)
}

    retornaNome.call ( { profissao: 'Programador', cidade: 'Lagoa' },'Kennedy', 29 ) // EXECULTA a funcao podendo passar um novo valor para this.
*/

/*
function retornaNome (nome, age) {
    console.log(nome, this.profissao, this.cidade, age)
}

  retornaNome.apply ( { profissao: 'programador', cidade:'Lagoa' } , [ 'Kennedy', 29 ] ) // execulta a funcao podendo passar um novo valor para this, agora com os argumentos sao passados em um array.
  */

function retornaNome (nome, age) {
    console.log(nome, this.profissao, this.cidade)
}

  const novaFuncao = retornaNome.bind ( { profissao:'programador' , cidade: 'Lagoa' } , 'Kennedy' , 22 ) // retorna a funcao podendo passar um novo valor para this.
  
novaFuncao()