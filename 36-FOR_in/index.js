// For in -> lê os indices ou chaves do objeto;
const pessoa = {
    nome: 'Mario',
    sobrenome: 'Ramos',
    idade: 42
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }


