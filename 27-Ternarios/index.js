//SITAXE: (condição)? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 1999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP!' : 'Usuário Normal!'

console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);



// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuario VIP!');
// } else {
//     console.log ('Usuario Normal!');
// }