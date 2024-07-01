function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

        switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';   
    }
}

function getMesAno (mesAno) {
    let mesAnoTexto;

        switch (mesAno) {
        case 0:
            mesAnoTexto = 'Janeiro';
            return mesAnoTexto;
        case 1:
            mesAnoTexto = 'Fevereiro';
            return mesAnoTexto;
        case 2:
            mesAnoTexto = 'Março';
            return mesAnoTexto;
        case 3:
            mesAnoTexto = 'Abril';
            return mesAnoTexto;
        case 4:
            mesAnoTexto = 'Maio';
            return mesAnoTexto;
        case 5:
            mesAnoTexto = 'Junho';
            return mesAnoTexto;
        case 6:
            mesAnoTexto = 'Julho';
            return mesAnoTexto;
        case 7:
            mesAnoTexto = 'Agosto';
            return mesAnoTexto;
        case 8:
            mesAnoTexto = 'Setembro';
            return mesAnoTexto;
        case 9:
            mesAnoTexto = 'Outubro';
            return mesAnoTexto;
        case 10:
            mesAnoTexto = 'Novembro';
            return mesAnoTexto;
        case 11:
            mesAnoTexto = 'Dezembro';
    }
} 

const textoHoraAtual = document.querySelector('#horaAtual');

const data = new Date();

const dia = data.getDate();
const mesAno = data.getMonth();    
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();
const diaSemana = data.getDay();

const mesTexto = getMesAno (mesAno);
const SemanaTexto = getDiaSemanaTexto(diaSemana);

textoHoraAtual.innerHTML = `<h1>${SemanaTexto}, ${zeroAEsquerda(dia)} de ${mesTexto} de ${ano} às ${zeroAEsquerda(hora)}:${zeroAEsquerda(min)}.<h1>`;
console.log(`${SemanaTexto}, ${dia} de ${mesTexto} de ${ano}`);