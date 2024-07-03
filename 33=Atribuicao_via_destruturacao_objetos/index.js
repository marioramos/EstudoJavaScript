const pessoa = {
    nome: 'Mario',
    sobrenome: 'Ramos',
    idade: 30,
    endereco: {
        rua: 'Wenceslau Cvintal',
        numero: 31
    }
};

// Atribuição via destruturação
const { endereco: {rua: r = '12345', numero} } = pessoa;
console.log(r, numero);