//let num2 = Math.floor(num1);
//let num2 = Math.ceil(num1);
//let num2 = Math.round(num1);
//console.log(Math.max(1,2,3,4,5,50,-1,-300,1500));
//console.log(Math.min(1,2,3,4,5,50,-1,-300,1500));
function aleatorio (min, max) {
const r = Math.round(Math.random() * (min, max) + min);
return r;
}
firstNum = prompt('Informe o número de início do intervalo:');
SecondNum = prompt('Informe o número final do intervalo:');
qtdeNum = prompt('Informe quantos números será sorteado:');

i = 0;
while (i < 7) {
    let rand = aleatorio(firstNum, SecondNum)
    console.log(rand);
    i++;
}