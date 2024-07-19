// Global
function retornaFuncao(nome) {
    //const nome = 'Mario';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Mario');
const funcao2 = retornaFuncao('Sergio');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());