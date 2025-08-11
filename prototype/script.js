function Game() {
    this.pulou = () => alert('O personagem pulou');
    this.deitou = () => alert('O personagem deitou');
}

Game.prototype.correu = () => alert('O personagem correu');

const novoJogo = new Game();

const meuJogo = 'fifa'
console.log(meuJogo.toUpperCase())
