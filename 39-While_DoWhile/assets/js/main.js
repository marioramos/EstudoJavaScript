// const nome = 'Mario';

// let i = 0;

// while (i < nome.length) {
//     console.log(nome[i]);
//     i++;
// }

// console.log('Segue a vida!')

// function aleatorio(min, max) {
//     const r = Math.random() * (max - min) + min;
//     return r;
// }

// let rand = aleatorio(1, 50);
// rand = rand.isInteger(rand);
// console.log(rand);

function aleatorio(min, max) {
    const r = Math.round(Math.random() * (min, max) + min);
    return r;
}

alert('Atenção! Estamos começando o exercício.');

const firstNum = prompt('Informe o número de início do intervalo:');
const SecondNum = prompt('Informe o número final do intervalo:');
const qtdeNum = prompt('Informe quantos números será sorteado:');

let resultado = [];
i = 0;
while (i < qtdeNum) {
    let rand = aleatorio(firstNum, SecondNum)
    resultado.push(rand);
    i++;
};

console.log(resultado);

const container = document.querySelector('.container');

const elementoHTML = document.createElement(p);
elementoHTML.textContent = resultado;
container.appendChild(elementoHTML);