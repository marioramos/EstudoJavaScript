const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const statusNow = document.querySelector('.statusNow');

function timerRelogio() {
    function criaHoraDoaSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;


    function startRelogio() {
        timer = setInterval(function () {
            segundos++;
            statusNow.innerHTML = 'started';
            relogio.innerHTML = criaHoraDoaSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (event) {
        const el = event.target;


        if (el.classList.contains('reset')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            statusNow.innerHTML = '';
            relogio.classList.remove('pausado');
            segundos = 0;
        }

        if (el.classList.contains('start')) {
            relogio.classList.remove('pausado');
            statusNow.innerHTML = 'starting...';
            clearInterval(timer);
            startRelogio();
        }

        if (el.classList.contains('pause')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
            statusNow.innerHTML = 'paused';
        }
      
    });
}
timerRelogio();