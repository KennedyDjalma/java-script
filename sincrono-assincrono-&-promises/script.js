
// sincrono -> é um processamento que acontece em sequencia, ou seja, ordenado.

// assincrono -> processamentos que podem acontecer ao mesmo tempo.

// promises -> é uma função construtora

const minhaPromise = new Promise ((resolve, reject) => {
    let condicao = true;

    if (condicao){
        resolve('RESOLVIDO')
    }
    else {
        reject('ERROR')
    }
})

//then -> vai ser execultada quando a promise for resolvida. 
// e o catch -> vai ser execultada quando a promise for rejeitada.

minhaPromise.then((resultado) => {
    console.log(resultado)
}).catch((error) => {
    console.log(error)
})

//      EX 02

const novaPromise = new Promise((resolveu, rejeitado) =>{
    let condicional = true;

    if(condicional){
        resolveu('AGORA RESOLVEU')
    }
    else{
        rejeitado('AGORA FOI REJEITADO')
    }
})

novaPromise.then((resultado2) =>{
    console.log(resultado2)
}).catch((rejeitado) => {
    console.log(rejeitado)
})