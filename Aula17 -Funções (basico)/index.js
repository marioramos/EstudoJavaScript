function saudacao(nome) {
    console.log(`Bom Dia ${nome}`);
    return 123456;
}

function soma (num1,num2) {
    return (num1 + num2);
}

// Mode específico de criar funções
const raiz = function (n) {
    return n ** 0.5;
};

// Modo simples, chamada de Arrow function
const raiz2 = n => n ** 0.5;

// const variavel = saudacao('Mario');
// console.log(variavel);

console.log(raiz2(9));
