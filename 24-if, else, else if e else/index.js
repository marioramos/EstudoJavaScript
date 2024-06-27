/*
0 - 11 = Bom Dia
12 - 17 = Boa Tarde
18 - 23 = Boa Noite
*/

// TESTES COM VALIDAÇÃO COM A HORA ATUAL
let hora = new Date();
hora = hora.getHours();
// const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom Dia'); 
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa Tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite');
} else {
    console.log('Olá!');
}


