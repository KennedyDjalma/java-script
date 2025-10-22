let contador = 0;
let input = window.document.getElementById('inputTarefa');
let btnAdd = window.document.getElementById('btn-add');
let main = window.document.getElementById('areaLista');

function addTarefa() {
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;
    // SE NAO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if ((valorInput.trim() !== "") && (valorInput !== "null") && (valorInput !== "undefined")) {

        ++contador;

        let novoItem =
            `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-radiobox-blank"></i>
            </div> <!--.item-icone -->

            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput} 
            </div> <!--.item-nome -->

            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"> Deletar <br>
                    <i class="mdi mdi-trash-can-outline"></i>
                </button>
            </div> <!--.item-botao -->
        </div> <!-- item -->`;


        
        main.innerHTML += novoItem; // ADICIONAR NOVO ITEM NO MAIN

        input.value = ""; // ZERAR OS CAMPINHOS
        input.focus(); // VAI MANTER O PLACEHOLDER
    }
}

function deletar(id) { //VAI DELETAR NO CONSOLE 
    var tarefa = window.document.getElementById(id);
    tarefa.remove();
}

input.addEventListener("keyup", function (event) {  // ADICIONAR TAREFAS COM O CLIQUE DO ENTER.
    // SE A TECLAR ENTER (13)
    if (event.keyCode === 13) {
        event.preventDefault(); //serve para evitar qualquer problema que a tecla 13 possa trazer
        btnAdd.click();
    }
})

function marcarTarefa(id) {
    var item = window.document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe)

    if (classe == "item") {
        item.classList.add('clicado');

        window.document.getElementById('icone_' + id)
        isSecureContext.classList.remove('mdi-radiobox-blank');
        isSecureContext.classList.add('mdi-radiobox-marked');
        
    }
}