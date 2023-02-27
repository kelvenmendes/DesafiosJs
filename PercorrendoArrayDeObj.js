let produtos = [{nome: 'chocolate', preco: 10.00}, {nome: 'sorvete', preco: 15.00}];

produtos.forEach(produto => {
    console.log(`O ${produto.nome} custa R$${produto.preco}`);
});

//Linha 1: Criação de um array de objetos contendo dois elementos.
//Linha 3: Utilização da função forEach para percorrer cada elemento do array.
//Linha 4: Impressão do nome e valor de cada elemento do array, utilizando a notação de template strings.