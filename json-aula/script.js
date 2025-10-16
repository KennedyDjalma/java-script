
// objeto
 const moto = {
    marca: "Honda",
    modelo: "Cg",
    ano: 2019,
    cilindradas: ["100cc","110cc","125cc","160cc","300cc"],
}

// CONVERTEU PARA TEXTO JSON
let texto = JSON.stringify(moto);
// COLOCOU TEXTO NO HTML
document.getElementById("area").innerHTML = texto;
// CONVERTEU TEXTO EM OBJETO
let obj = JSON.parse(texto);
// PEGOU O VALOR DESSE OBJETO
console.log(obj.cilindradas[3]);


/////////////////////////////////////////////

const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/55840000/json/');
    ajax.send();
    
    ajax.onload = function() {
        document.getElementById('area').innerHTML = this.responseText;
        let obj = JSON.parse(this.responseText);
        console.log(obj.regiao)
    }
