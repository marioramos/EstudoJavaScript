const numero = Number(prompt('Digite seu Número:'));
const numTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numTitulo.innerHTML = numero;
texto.innerHTML = `<p>A raíz quadrada de ${numero} é: ${numero ** (1/2)}</p>`;
texto.innerHTML += `<p>Seu número é inteiro? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondnado o número ${numero} para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando o número ${numero} para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Ajustando o número ${numero} para duas cadas decimais: ${numero.toFixed(2)}</p>`;