// Captura o botão
const button = document.getElementById("calculateButton");

// Adiciona evento de clique
button.addEventListener("click", function () {
    // Pega os valores dos inputs
    const ca = parseFloat(document.getElementById("inputCA").value);
    const e = parseFloat(document.getElementById("inputNumber").value);

    // Verifica se os valores são válidos
    if (isNaN(ca) || isNaN(e)) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }

    // Fórmula: Kv = 2e + CA
    const kv = (2 * e) + ca;

    // Mostra o resultado no input readonly
    document.getElementById("inputKv").value = kv;
});