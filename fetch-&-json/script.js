/*

Fatch
Http
Then e Catch

Entao é com requisição http que vamos conseguir enviar, receber, deletar, alterar um determinado valor.

    Adicionar um novo usuário.
Front end -> fetch -> http back end -> banco de dados

    Verbos http
get -> quando o client solicita algum dado.
post -> queremos enviar algum dado a partir do client.
delete -> queremos deletar algum dado especifico.
patch -> alterar um dado mais abrangente.
put -> alterar algum dado especifico.

    CRUD 
Create read update delete (criar ler atualizar deletar)

    ENDPOINT -> NADA MAIS DO QUE URL
O responsavel por criar endpoint, e denominar a responsabilidade de cada endpoint é o back end.

Um endpoin para criar um usuario;
Um endpoint para deletar um usuario;
Um endpoint para alterar dados de um usuario por exemplo;

        https://api.coingacho.com/api/v3/exchange_rates

HTTP -> 4 TIPOS DE PARAMETROS EM UMA REQUISIÇÃO HTTP
*   Route Parameters
*   Query parameters
*   Body parameters
*   Header parameters

API -> Application programing interface ->back end que a gente esta interagindo.

cors

*/

/*

fetch('https://api.coingecko.com/api/v3/exchange_rates', { 
    node:'cors',
    method:'POST',
    body:{
        name:'kennedy',
        age: 29,
    },

    headers: {

    }

} ).then((data) => {
    console.log(data)
})

*/


/*

Sucesso 200 - 299
Redirecionamento 300 - 399
Erro no cliente 400 - 499
Erro do servidor (back end) 500 - 599

- JSON -> JAVA SCRIPT OBJECT NOTATION. É  um formato de organização de dados;
- A diferença entre js e json é que a chave deve ser em formato de string;
- Comum o JSON ser usado como extensaso para arquivos tambem, normalmente de configurações.

*/

        //EXEMPLOS DE USO do JSON
//JSON.parse()  // vai transformar uma string em formato json em um objeto javaScript
const obj = `{ "name" : "kennedy", "age" : 22 }`
console.log(JSON.parse(obj))


//JSON.stringify() // vai pegar um objeto javascript e vai transformar em uma string json
console.log(JSON.stringify(obj))