function numPrimo (num) {
    if (num % 1 === 0 && num % num === 0) return 'Número Primo';
    return num;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, numPrimo(i))
}