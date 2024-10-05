
function segundosDaHora(segundo){
    const data = new Date(segundo * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12 : false,
        timeZone: 'UTC'
    })
}

var relogio = document.querySelector('.relogio')
let segundos = 0;
let timer;

function iniciar(){
     clearInterval(timer)
     timer = setInterval(function(){
        segundos++
        relogio.innerHTML = segundosDaHora(segundos);
    }, 1000)
}


function pausar(){
    clearInterval(timer)
}

function reiniciar(){
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
}