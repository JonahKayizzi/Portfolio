const hambger = document.querySelector('.hambuger');
const menu = document.querySelector('.menu');
const closebutton = document.querySelector('.close');
const logo = document.querySelector('.logo');

const openMenu = () => {
  menu.style.display = 'block';
  closebutton.style.display = 'block';
  hambger.style.display = 'none';
  logo.style.display = 'none';
}

const closeMenu = () => {
  menu.style.display = 'none';
  closebutton.style.display = 'none';
  hambger.style.display = 'block';
  logo.style.display = 'block';
}

hambger.addEventListener('click', openMenu);

closebutton.addEventListener('click', closeMenu);

menu.addEventListener('click', closeMenu);