
function eventoClick() {
    //alert('Acionou um evento de Click');
    document.body.style.backgroundColor = 'gold';
}

function eventoDblClick() {
    alert('Evento de clique duplo');
}

function viraAzul() {
    let div = document.getElementById('teste');
    div.style.backgroundColor = ' blue';
}

function viraVerde() {
    let div = document.getElementById('teste');
    div.style.backgroundColor = ' green';
}

/*
function adicionaTexto() {
    let p = document.getElementById('texto');
    p.append(' O mouse moveu');
}
*/

function limpaTexto() {
    document.getElementById('campoTexto').value= " ";
}