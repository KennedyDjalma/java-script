/*
for (let i = 0; i <= 2025; i++){
    document.getElementById("teste").innerHTML += i + ", ";
}
*/

/*
for (let i=1800; i<=2025; i++){
    document.getElementById('ano').innerHTML += '<option value=" '+ i + ' " > ' + i + ' </opition>';
}
*/

/* --------- */
var ano = new Date().getFullYear()

for (let i = ano; i >= 1900; i--) {
    document.getElementById("ano").innerHTML += "<option value=' "+ i +" '>" + i + " </opition> ";  
}

/* --------- */
const carros = ["golf", "porshe", "mercedes", "ferrari"];
var tamanho=carros.length;

for (let i = 0; i < tamanho; i++) {
    document.getElementById("teste").innerHTML += carros[i] + "-";
}