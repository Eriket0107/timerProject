function getTimeSeconds(seconds) {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

const relogio = document.getElementById('clock');
let seconds = 0;
let timer;

function playClock() {
  timer = setInterval(function () {
    seconds++;
    relogio.innerHTML = getTimeSeconds(seconds);
  }, 1000)
}

document.addEventListener('click', function (e) {
  const el = e.target;

  if (el.classList.contains('iniciar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    playClock();
    console.log('iniciou')
    console.log(seconds);
  }
  if (el.classList.contains('pausar')) {
    relogio.classList.add('pausado');
    clearInterval(timer);
    console.log(seconds);
  }
  if (el.classList.contains('zerar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    console.log('zerou');
    relogio.innerHTML = '00:00:00';
    console.log(seconds);
    seconds = 0;
  }
})