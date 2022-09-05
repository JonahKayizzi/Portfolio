const hambger = document.querySelector('.hambuger');
const menuItem = document.querySelector('.menu')
const closebutton = document.querySelector('.close')
const logo = document.querySelector('.logo')

hambger.addEventListener('click', function () {

    if (menuItem.style.display = 'none') {
        menuItem.style.display = 'block'
        closebutton.style.display = 'block'
        hambger.style.display = 'none'
        logo.style.display = 'none'
    }
})

closebutton.addEventListener('click', function () {

    if (menuItem.style.display = 'block') {
        menuItem.style.display = 'none'
        closebutton.style.display = 'none'
        hambger.style.display = 'block'
        logo.style.display = 'block'
    }
})