
// COMANDO PARA PEGAR A DATA
let data = new Date();
console.log(data);


// PEGA O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
console.log(ano);


// PEGAR O MES ATUAL - DE 0 QUE É JANEIRO ATÉ DEZEMBRO 11
let mes = data.getMonth();
console.log(mes);

// MOSTRAR O MES NO FORMATO ESCRITO
const mesesDoAno = ["Janeiro", "Fervereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

// DIA DO MES - 1 ATÉ 31
let diaMes = data.getDate();
console.log(diaMes);

// DIA DA SEMANA ESCRITO
let diaSemana = data.getDay();
const diaDaSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"];
let diaEscrito = diaDaSemana[data.getDay()];
console.log(diaEscrito);

// USAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();
console.log(hora);

// USANDO OS MINUTOS
let minutos = data.getMinutes();
console.log(minutos);

// USANDO OS SEGUNDOS
let segundos = data.getSeconds();
console.log(segundos);

// USANDO OS MILISEGUNDOS
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

// DATA NO PADRAO BRASILEIRO
let dataBr = data.toLocaleDateString();
console.log(dataBr);

