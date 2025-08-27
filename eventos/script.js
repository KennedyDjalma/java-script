function eventoClick() {
    //alert('Acionou um evento de Click');
    document.body.style.backgroundColor = 'gold';
}

function eventoDblClick() {
    alert('Evento de clique duplo');
}

function viraVermelho() {
    let div = document.getElementById('teste');
    div.style.backgroundColor = ' red';
}

function viraVerde() {
    let div = document.getElementById('teste');
    div.style.backgroundColor = ' green';
}

function adicionaTexto() {
    let p = document.getElementById('texto');
    p.append('O mouse moveu');
}