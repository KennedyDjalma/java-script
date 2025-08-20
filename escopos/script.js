


// uma variavel criada fora pode ser acessada dentro da funcao.
const valor = 'Kennedy';
function teste() {
    console.log(valor);
}


// uma variavel criada dentro de uma funcao nao pode ser acessada fora.
function teste() {
    const valor = 'Kennedy';
}
console.log(valor);



/*
// para criar uma variavel usa-se sempre o const ou let.
function teste(){
}
if(){
    const
}
*/

//escopo de bloco