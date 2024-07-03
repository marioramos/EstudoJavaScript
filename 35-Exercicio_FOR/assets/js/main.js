const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

    elementos.forEach(elemento => {
        const { tag, texto } = elemento;
        const elementoHTML = document.createElement(tag);
        elementoHTML.textContent = texto;
        container.appendChild(elementoHTML);
    });
});

