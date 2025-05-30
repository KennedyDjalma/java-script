var agora = new Date()
var diaSemana = agora.getDay()
/* 
1 = Domingo
2 = Segunda
3 = Terça
4 = Quarta
5 = Quinta
6 = Sexta
7 = Sabado
*/


/*  ESSE CODIGO USANDO IF E ELSE PODE SER SUBSTITUIDO PELO CODIGO ABAIXO USANDO O SWITCH
console.log(diaSemana)
if (diaSemana == 0) {
    console.log('Domingo')
}
else if (diaSemana == 1) {
    console.log('Segunda')
}
else if (diaSemana == 2) {
    console.log('Terça')
}
else if (diaSemana == 3) {
    console.log('Quarta')
}
else if (diaSemana == 4) {
    console.log('Quinta')
}
else if (diaSemana == 5) {
    console.log('Sexta')
}
else if (diaSemana == 6) {
    console.log('Sabado')
}
*/
console.log(diaSemana)
switch (diaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO} Dia invalido')
        break
}