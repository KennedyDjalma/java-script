class Motos {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina() {
        return this.modelo + " buzinou: Bii Bii";
    }
}

const cg = new Motos("Honda", "Cg", 2019);
const fazer = new Motos("Yamaha", "Factor", 2010);
console.log(cg);
console.log(fazer.buzina());
cg.ano = 2010;
console.log(cg);