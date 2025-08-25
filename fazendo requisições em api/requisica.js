

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

fetch(url) /*essa e uma das maneiras de fazer requisições apis*/
    .then(function(response){
        console.log(response);
})
/*O metodocatch e usado para o tratamento de erros*/
.catch(function(erro) {
    console.error("Erro ao buscar os dados: ", error);
});
.finally(function(){
    console.log('Requisição concluida');
});