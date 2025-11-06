let input = window.document.getElementById("inputTarefa");
let btnAdd = window.document.getElementById("btn-add");
let main = window.document.getElementById("areaLista");
let contador = 0;

function addTarefa() {
    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        let novoItem =
            `<div id="${contador}" class="item">
            <div class="item-icone">
                <span class="material-symbols-outlined">check_box_outline_blank</span>
            </div>
            <div class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete">Deletar</button>
            </div>
            </div>`;

        main.innerHTML += novoItem;
        input.value = "";
        input.focus();
        ++contador;
    }
}

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})
