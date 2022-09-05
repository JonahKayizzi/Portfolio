const hambger = document.querySelector('.hambuger');
const menu = document.querySelector('.menu');
const closebutton = document.querySelector('.close');
const logo = document.querySelector('.logo');

hambger.addEventListener('click', function () {
    if (menu.style.display = 'none') {
        menu.style.display = 'block'
        closebutton.style.display = 'block'
        hambger.style.display = 'none'
        logo.style.display = 'none'
    }
})

closebutton.addEventListener('click', function () {
    if (menu.style.display = 'block') {
        menu.style.display = 'none'
        closebutton.style.display = 'none'
        hambger.style.display = 'block'
        logo.style.display = 'block'
    }
})

menu.addEventListener('click', function () {
    if (menu.style.display = 'block') {
        menu.style.display = 'none'
        closebutton.style.display = 'none'
        hambger.style.display = 'block'
        logo.style.display = 'block'
    }
})

