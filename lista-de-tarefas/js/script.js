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
            <div class="item-icone">
                <i class="mdi mdi-radiobox-blank"></i>
            </div> <!--.item-icone -->

            <div class="item-nome">
                ${valorInput}
            </div> <!--.item-nome -->

            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"> Deletar <br>
                    <i class="mdi mdi-trash-can-outline"></i>
                </button>
            </div> <!--.item-botao -->
        </div> <!-- item -->`;
        // ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;
        // ZERAR OS CAMPINHOS
        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
} 

input.addEventListener("keyup", function (event) {
    // SE A TECLAR ENTER (13)
    if (event.keyCode === 13) {
        event.preventDefault(); //serve para evitar qualquer problema que a tecla 13 possa trazer
        btnAdd.click();
    }
})
