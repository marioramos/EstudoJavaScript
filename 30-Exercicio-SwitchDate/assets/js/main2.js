function atualizaHora() {
    const h1 = document.querySelector('.container h1');
    const data = new Date();
    // const opcoes = {
    //     dateStyle: 'full',
    //     timeStyle: 'long',
    // };

    h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'long'});
}

setInterval (atualizaHora, 1000);

atualizaHora();