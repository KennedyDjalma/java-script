const carro = {
    marca: 'Ford',
    ano: 2015,
    modelo: 'ka',
    placa: 'abc-123',
    buzina: function () { alert('Bi BI BI bi') },
    completo: function () {
        return "A marca é " + this.marca + ' E o modelo é:' + this.modelo
    }
};
console.log(carro.completo());