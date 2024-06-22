const pessoa11 = {
    nome: 'Mario',
    sobrenome: 'Ramos',
    idade: 42,

    fala(){
        console.log(`A idade atual do ${this.nome} é ${this.idade}!`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa11.fala();
pessoa11.incrementaIdade();
pessoa11.fala();
pessoa11.incrementaIdade();
pessoa11.fala();
pessoa11.incrementaIdade();
pessoa11.fala();
pessoa11.incrementaIdade();
pessoa11.fala();

// function criaPessoa (nome, sobrenome, idade){
//     return{nome, sobrenome, idade}
// }

// const pessoa1 = criaPessoa('Mario', 'Ramos', 42);
// const pessoa2 = criaPessoa('Eloah', 'Vitoria', 9);
// const pessoa3 = criaPessoa('Bernardo', 'Augusto', 11);
// console.log(pessoa1.nome);
// console.log(pessoa2.nome);
// console.log(pessoa3.nome);