var hambger = document.querySelector('.hambuger');
var menuItem = document.querySelector('.menu')
var closebutton = document.querySelector('.close')
var logo = document.querySelector('.logo')

hambger.addEventListener('click',function(){ 

    if(menuItem.style.display = 'none'){
        menuItem.style.display = 'block'
        closebutton.style.display = 'block'
        hambger.style.display = 'none'
        logo.style.display = 'none'
    }
})