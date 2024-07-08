function aleatorio(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = aleatorio(min, max);

while (rand !== 10) {
    rand = aleatorio(min, max);
    console.log(rand);
}
console.log('Execundado o Do While');

do {
    console.log(rand);
} while (rand !== 10);