const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o numero 2');
        continue;
    }
    if (numero === 5) {
        console.log('Pulei o numero 5');
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Número sete encontrado! Saindo.');
        break;
    }

}