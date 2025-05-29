//linha 2 e 3 serve para determinar a hora atual.
var agora = new Date()
var hora = agora.getHours()

console.log(`São exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia!')
}
else if (hora <= 18) {
    console.log('Boa Tarde!')
}
else if (hora <= 23) {
    console.log('Boa Noite!')
}