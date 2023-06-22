//icon navbar

/* scroll sections */
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a')
let menu = document.querySelector('menu')
let homep = document.querySelector('home')

window.onscroll = () => {
    
    //sticky header
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window,scrollY > 100);
}

function clickMenu() {

    if (menu.style.display == 'block') {
        menu.style.display = "none";
    } else {
        menu.style.display = "block"
        homep.style.marginTop = 25
    }
}


function changeSize() {
    if (window.innerWidth >= 750) {
    menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}