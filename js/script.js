//icon navbar

/* scroll sections */
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a')
let menu = document.querySelector('menu')
let homep = document.querySelector('home')

window.onscroll = () => {
    
    //sticky header
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);
}

function clickMenu() {

    if (menu.style.display == 'block') {
        menu.style.display = "none";
    } else {
        menu.style.display = "block"
    }
}


function changeSize() {
    if (window.innerWidth >= 950) {
    menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}

function convert() {
    let valor = parseFloat(document.getElementById('num').value)
    let unit = document.getElementById('opt').value
    let result;

    if(valor == '' || valor == 0) {
        alert('[ERROR] Type a number to convert')
    } else if (unit === "cf") {
        result = `${parseFloat((valor * 9/5) + 32).toFixed(2)}° Fahreinheits `
    } else if (unit === "ck") {
        result = `${parseFloat(parseFloat(valor + 273.15).toFixed(2))}° Kelvins`
    } else if (unit === "fc") {
        result = `${parseFloat((valor - 32) * 5/9).toFixed(2)}° Celsius`
    } else if (unit === "fk") {
        result = `${parseFloat((valor + 459.67) * 5/9).toFixed(2)}° Kelvins`
    } else if (unit === "kc") {
        result = `${parseFloat((valor - 273.15).toFixed(2))}° Celsius`
    } else if (unit === "kf") {
        result = `${parseFloat((valor * 9/5) - 459.67).toFixed(2)}° Farenheit`
    }
    document.getElementById('resultado').textContent = result;
    console.log(result)
}

window.addEventListener('load'), function() {
    document.getElementById('menu').style.display = 'none'
}

var menua = document.getElementById('menu');
var menuabutton = document.getElementById('manuabutton')

menuabutton.addEventListener('click'), function() {
    menu.classList.toggle('closed')
}