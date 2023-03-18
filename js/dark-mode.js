/* Adicione o JavaScript para mudar entre os modos */
const btnToggleMode = document.querySelector('#darkSwitch');
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const card = document.querySelector('.card');

btnToggleMode.addEventListener('click', function() {
  body.classList.toggle('bg-light');
  body.classList.toggle('bg-dark');
  body.classList.toggle('text-dark');
  body.classList.toggle('text-light');
  navbar.classList.toggle('navbar-light');
  navbar.classList.toggle('navbar-dark');
  card.classList.toggle('bg-light');
  card.classList.toggle('text-dark');
  card.classList.toggle('bg-dark');
  card.classList.toggle('text-light');

  
  if (btnToggleMode.innerText === 'Modo Escuro') {
    btnToggleMode.innerText = 'Modo Claro';
  } else {
    btnToggleMode.innerText = 'Modo Escuro';
  }
});
