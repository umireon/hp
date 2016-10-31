/* eslint-env browser */
const drawer = document.getElementById('drawer');
const toggle = document.getElementById('toggle');
const obfucator = document.getElementById('obfucator');

toggle.addEventListener('click', () => {
  drawer.classList.toggle('visible');
  obfucator.classList.toggle('visible');
});

obfucator.addEventListener('click', () => {
  drawer.classList.toggle('visible');
  obfucator.classList.toggle('visible');
});
