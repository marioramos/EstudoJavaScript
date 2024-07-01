function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function getDiaSemanaTexto(diaSemana) {
    semana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    return semana[diaSemana];
}

function getMesAno(mesAno) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[mesAno];
}

function atualizaHora() {
    const textoHoraAtual = document.querySelector('#horaAtual');

    const data = new Date();

    const dia = data.getDate();
    const mesAno = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();
    const diaSemana = data.getDay();

    const mesTexto = getMesAno(mesAno);
    const SemanaTexto = getDiaSemanaTexto(diaSemana);

    textoHoraAtual.innerHTML = `<h1>${SemanaTexto}, ${zeroAEsquerda(dia)} de ${mesTexto} de ${ano} às ${zeroAEsquerda(hora)}:${zeroAEsquerda(min)}:${zeroAEsquerda(seg)}<h1>`;
    console.log(`${SemanaTexto}, ${dia} de ${mesTexto} de ${ano}`);

}
setInterval(atualizaHora, 1000);
atualizaHora();