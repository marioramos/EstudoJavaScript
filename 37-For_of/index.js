const nome = ['Mario', 'Sergio', 'Ramos'];

// For Clássico - Geramente com iteráveis (arrays ou strings)
// For in - Retorna o indice ou chave (string, array ou objetos)
// For of - Retorna o valor (iteráveis, arrays ou strings)

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

// for (let i in nome) {
//     console.log(nome[i]);
// }

// for (let valor of nome) {
//     console.log(valor);
// }

nome.forEach(function(indice, valor, array) {
    console.log(indice, valor, array);
});