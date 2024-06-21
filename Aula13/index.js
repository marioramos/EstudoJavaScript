// let umaString = 'Mario Sergio Ramos';

// console.log(umaString.split(' ').length);
// primeiroNome = umaString.split(' ').length
// sobrenome = umaString.split(' ').length;

// console.log(sobrenome[sobrenome]);


// Definindo a variável com o nome completo
let nomeCompleto = 'Mario Sergio Ramos da Silva';

// Encontrando a posição do primeiro espaço
let primeiroEspaco = nomeCompleto.indexOf(' ');

// Extraindo o primeiro nome
let primeiroNome = nomeCompleto.substring(0, primeiroEspaco);

// Encontrando a posição do último espaço
let ultimoEspaco = nomeCompleto.lastIndexOf(' ');

// Extraindo o sobrenome
let sobrenome = nomeCompleto.substring(ultimoEspaco + 1);

// Exibindo os resultados
console.log('Primeiro Nome:', primeiroNome);
console.log('Sobrenome:', sobrenome);
