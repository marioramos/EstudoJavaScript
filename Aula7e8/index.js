const nome = 'Mario';
const sobrenome = 'Ramos';
const dataNasc = '25 de Junho de 1982';
const alturaEmM = 1.76;
let peso = 90;
let calcIMC = peso/(alturaEmM * alturaEmM);

console.log(`${nome} ${sobrenome}, nascido em ${dataNasc} com ${alturaEmM} de altura e ${peso}kg possui o IMC de: ${calcIMC}`);
if (calcIMC <= 25)
    console.log('Está dentro do peso');

console.log('Você está acima do peso!')


