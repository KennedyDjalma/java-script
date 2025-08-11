class Mamifero {
    constructor(patas) {
        this.especie = 'Mamíferos'
    }

    dormir() {
        alert('Dormiu')
    }
}

class Pessoa extends Mamifero {
    constructor(name, idade) {
        super('patas');
        this.name = name
        this.idade = idade
        this.cidade = 'Lagoa'
    }

    dormir() {
        super.dormir();

    }

    andou() {
        alert(`${this.name} andou`)
    }
}

const Pessoa1 = new Pessoa('Kennedy', 29);