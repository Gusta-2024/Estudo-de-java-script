

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

//fetch(url) {/*essa e uma das maneiras de fazer requisições apis*/
//  .then(function(response){
//     return response.json()
//    })        
//  .then(function (response){
//     console.log(response)
//    })
/*O metodocatch e usado para o tratamento de erros*/

//.catch(function(erro) {
//     console.error("Erro ao buscar os dados: ", error)
//    })
/*metodo finally para indicar o fim da requisição independente de certo oou errado*/

//.finally(function(){
//        console.log('Requisição concluida')
//    });
   
fetch(url) //Essa é uma forma de fazer um encadeamento de thens uma forma de escrever muito codigo em poucas linhas 
    .then((response) => response.json())  
    .then((jsonBody) => console.log(jsonBody))
    .catch((erro) => console.error(error))
