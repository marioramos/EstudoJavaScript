const form = document.querySelector('#formulario');
    

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const peso = e.target       parseInt(form.querySelector('#input-peso'));
    const altura = parseFloat(form.querySelector('#input-altura'));
});

function criaP () {
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    return p;
}

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
}



//         let imc = (peso / (altura * altura));

//         //if (peso || altura) {

//             if (imc < 18.5) {
//                 resultado.innerHTML = `<p>Seu IMC é ${imc} (Abaixo do peso).</p>`;
//             } else if (imc > 18.5 && imc < 25) {
//                 resultado.innerHTML = `<p>Seu IMC é ${imc} (Peso Normal).</p>`;
//             } else if (imc > 25 && imc < 30) {
//                 resultado.innerHTML = `<p>Seu IMC é ${imc} (Sobrepeso).</p>`;
//             } else if (imc > 30 && imc < 35) {
//                 resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 1).</p>`;
//             } else if (imc > 35 && imc < 40) {
//                 resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 2).</p>`;
//             } else if (imc >= 40) {
//                 resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 3).</p>`;
//             }
//         //} else if (peso == false) {
//         //    resultado.innerHTML = `<p>O valor do Peso é inválido!</p>`;
//         //} else if (altura == false) {
//         //    resultado.innerHTML = `<p>O valor da Altura é inválido!</p>`;
    
//     }

// }
// calcImc();
