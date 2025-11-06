let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let contador = 0;

function addTarefa() {
    // PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    // SE NAO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if ((valorInput !== "") && (valorInput !== undefined) && (valorInput !== null)) {
        let novoItem = `<div id="${contador}" class="item clicado">

            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <span id="icone_${contador}" class="material-symbols-outlined">check_box_outline_blank</span>
            </div><!-- item-icone -->

            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div><!-- item-nome -->

            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete">Deletar</button>
            </div><!-- item-botao -->

        </div><!-- item -->`

        // ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;
        // ZERAR O CAMPO INPUT
        input.value = "";
        input.focus(); // apos adicionar tarefa, o input ja fuca selecionado para adicionar outra tarefa.
        ++contador;
    }
}

// USAR A TECLA ENTER PARA ADICIOINAR A TAREFA DO INPUT.
input.addEventListener("keyup", function(event){
    if(event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})

// REMOVER A TAREFA CRIADA NO INPUT COM O BOTAO DELETE.
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}


//   MARCAR TAREFAS .
function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if (classe=="item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_'+ id)
        icone.classList.remove('check_box_outline_blank');
        icone.classList.add('check_box');
    }
}