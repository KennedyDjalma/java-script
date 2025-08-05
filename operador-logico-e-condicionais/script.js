const idade = 22
const tipo = 'admin'

/*
if (!(idade > 29) || tipo == 'admin') {
    console.log('Ele tem mais de 29 anos e é um admin')
}


/*
if (!(idade > 29) && !(tipo == 'admin')) {
    console.log('Ele tem mais de 29 anos e é um admin')
}
*/

/*
if (idade > 29) {
    console.log('Ele tem 29 anos e é um admin')
} else if (idade >= 25) {
    console.log('Ele tem 25 anos ou mais e é um admin')
} else {
    console.log ('Ele nao tem idade minima')
}
*/

switch (idade) {
    case 20:
        console.log(`Ele tem ${idade} anos.`);
        break;
    case 21:
        console.log(`Ele tem ${idade} anos.`);
        break;
    case 22:
        console.log(`Ele tem ${idade} anos.`);
        break;
    case 23:
        console.log(`Ele tem ${idade} anos.`);
        break;
    case 24:
        console.log(`Ele tem ${idade} anos.`);
        break;
    default:
        console.log(`Ele nao tem nenhuma dessas idade informada.`)
}

//    ||