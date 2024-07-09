function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false

    })
}
try {
    const data = new Date('01-01-1970 12:58:12');
const hora = retornaHora(aa);
console.log(hora);
} catch (err) {
    console.log(err);
}finally {
    console.log('Tenha um bom dia!')
}

//retornaHora(new Date());

// try {
//     console.log(a);
//     console.log('Abri o arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
//     //é executado quando não há erros
// } catch (err) {
//     console.log('Tratando o erro');
//     // é execuado quando há erros
// } finally {
//     console.log('FINALLY: Eu sempre sou executado');
//     // sempre e executado
// }