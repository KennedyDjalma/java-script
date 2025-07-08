let valores = [4, 5, 6, 7, 8]

for(let pos = 0; pos<valores.length;pos++) {
    console.log(`A posição ${pos} tém o valor ${valores[pos]}`)
}

/////////////////////////

for(let pos in valores) {
    console.log(valores[pos])
}
