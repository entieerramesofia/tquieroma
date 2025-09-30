//alert('hola mundo');
/*
let toggleBtn = document.querySelector('#mode-toggle-btn');
toggleBtn.addEventListener('click', function() {
    alert('me diste click');

document.body.classList.toggle('dark-mode');
const darkModeBtn = document.querySelector('.fa-wand-magic-sparkles');

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

});*/

// Selecciona el botón de la varita
const wandBtn = document.getElementById('wand-toggle-btn');
const flash = document.createElement('div');
flash.classList.add('magic-flash');
document.body.appendChild(flash);

// Al hacer click, alterna la clase en <body>
wandBtn.addEventListener('click', () => {
  document.body.classList.toggle('magic-mode');



  // Lo quitamos después de la animación
  setTimeout(() => {
    flash.remove();
  }, 800);
});

