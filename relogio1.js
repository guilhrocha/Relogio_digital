
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    var dateToday = new Date();
    var hr = dateToday.getHours();
    var min = dateToday.getMinutes();
    var seg = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (seg < 10) seg = '0' + seg

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})


const horas2 = document.getElementById('horas2');
const minutos2 = document.getElementById('minutos2');
const segundos2 = document.getElementById('segundos2');

const relogio2 = setInterval(function time() {
    var dateToday = new Date();
    var hor = dateToday.getHours();
    var minu = dateToday.getMinutes();
    var segu = dateToday.getSeconds();
    var horario = hor + 4

    if (hor < 10) hor = '0' + hor
    if (minu < 10) minu = '0' + minu
    if (segu < 10) segu = '0' + segu

    horas2.textContent = horario;
    minutos2.textContent = minu;
    segundos2.textContent = segu;
})

const horas3 = document.getElementById('horas3');
const minutos3 = document.getElementById('minutos3');
const segundos3 = document.getElementById('segundos3');

const relogio3 = setInterval(function time() {
    var dateToday = new Date();
    var hora = dateToday.getHours();
    var minuto = dateToday.getMinutes();
    var segundo = dateToday.getSeconds();
    var horariio = hora - 1

    if (hora < 10) hora = '0' + hora
    if (minuto < 10) minuto = '0' + minuto
    if (segundo < 10) segundo = '0' + segundo

    horas3.textContent = horariio;
    minutos3.textContent = minuto;
    segundos3.textContent = segundo;
})