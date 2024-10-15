

//  USANDO A FUNÇÃO ONMOUSEOVER ELE VAI MUDAR A COR QUANDO O PONTEIRO DO MOUSE ESTIVER EM CIMA DE ONDE FOI SOLICITADO, POREM NAO VAI VOLTAR A COR DE ANTES, VAI FICAR SEMPRE COM A COR QUE FOI DESEJADA...
function viraVermelho () {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}
// PARA VOLTAR A COR QUE ESTAVA ANTES, VAI PRECSAR USA OUTRO COMANDO CHAMADO DE 'onMouseOut'...EX:
function viraCinza () {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "slategrey";
}
//LEMBRANDO QUE PARA FUNCIONAR O ONMOUSEOVER E  O ONMOUSEOUT É PRECISO INFORMAR O COMANDO NO HTML.... EX:
/*
 <div id="teste" onmouseout="viraCinza()" onmouseover="viraVermelho()" style="
    margin: auto auto;
    width: 80%;
    height: 200px;
    background-color: slategrey;"> 
    </div>
*/