
            // AULAS VARIAVEIS COMPOSTAS USANDO NODEJS

/*let num = [5, 8, 2, 9, 3]
num.push(1) // acrescenta o elemento 1
num [5] = 7 // na posiçao 5 acrescenta o elemento 7
num.sort() //execultar em ordem
console.log(`Nosso vetor é o: ${num}`)*/


/*let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor tem : ${num.length} posiçoes`)*/




//EXEMPLO 1:
/* estrutura de repetição:
let num = [5, 8, 2, 9, 3]
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])*/


//EXEMPLO 2:
/*let num = [5, 8, 2, 9, 3]
 console.log(num)*/

 //EXEMPLO 3:
 /*let num = [5, 8, 2, 9, 3]
 for (let pos=0; pos<num.length; pos++){
    console.log(num[pos])
 }*/

//EXEMPLO 4:
 /*let num = [5, 8, 2, 9, 3]
for (let pos=0 ;pos<num.length;pos++){ // ;enquanto pos for menor do que num.length; pos+1 pra fazer um loop
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

 //EXEMPLO 5:
 /*let num = [5, 8, 2, 9, 3]
 for (let pos=0; pos<num.length; pos++){
    console.log(num[pos])
 }*/

//EXEMPLO 6:
/* let num = [5, 8, 2, 9, 3]
 for (let pos in num){ // PARA CADA POSICAO EM NUM EU VOU MOSTRAR O NUM POS
    console.log( num[pos] )
 }*/

//EXEMPLO :
let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(num.length)
console.log(num[0])
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não existe')
}
else {
    console.log(`O valor que voce procura esta na posição ${pos}`)
}