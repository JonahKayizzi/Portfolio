const hambger = document.querySelector('.hambuger');
const menuItem = document.querySelector('.menu')
const closebutton = document.querySelector('.close')
const logo = document.querySelector('.logo')
var x = window.matchMedia("(max-width: 768px)")

hambger.addEventListener('click', function () {

    if (menuItem.style.display = 'none' && x.matches) {
        menuItem.style.display = 'block'
        closebutton.style.display = 'block'
        hambger.style.display = 'none'
        logo.style.display = 'none'
    }
})

closebutton.addEventListener('click', function () {

    if (menuItem.style.display = 'block' && x.matches) {
        menuItem.style.display = 'none'
        closebutton.style.display = 'none'
        hambger.style.display = 'block'
        logo.style.display = 'block'
    }
})