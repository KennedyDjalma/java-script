const button = document.getElementById("calculateButton");

button.addEventListener("click", function () {
    const ca = parseFloat(document.getElementById("inputCA").value);
    const e = parseFloat(document.getElementById("inputCm").value);
    const cmm = parseFloat(document.getElementById("inputCMM").value);

    if (isNaN(ca) || isNaN(e) || isNaN(cmm)) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }

    // Fórmula: mAs = (2 * E + CA) * CMM
    const mAs = (2 * e + ca) * cmm;
    document.getElementById("inputMas").value = mAs;

});