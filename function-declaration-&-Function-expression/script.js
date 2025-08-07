
//EXEMPLO 1 == FUNCTION DECLARATION
function teste1() {
    console.log('Function Declaration')
}

teste1();

//EXEMPLO 2
function teste2(nome) {
    console.log('Function Declaration', nome )
}

teste2('Kennedy');

//EXEMPLO 1 == FUNCTION EXPRESSION
const teste3 = function() {
    console.log('Function Expression')
}

teste3()

//EXEMPLO 2
const teste4 = function(nome) {
    console.log('Function Expression' , nome)
}

teste4('Kennedy')


//EXEMPLO 1 == ARROW FUNCTION
const teste5 = (nome) => {
    console.log ('Arrow Function', nome)
}
teste5('Kennedy')