/* eslint-env browser */
const drawer = document.getElementById('drawer');
const toggle = document.getElementById('toggle');
const obfucator = document.getElementById('obfucator');

const toggleAnimetion = function handleClass(elem, elemId = elem.id) {
  if (elem.classList.contains(`${elemId}--animation__show`)) {
    elem.classList.toggle(`${elemId}--animation__hide`);
  } else {
    elem.classList.toggle(`${elemId}--animation__show`);
  }
};

toggle.addEventListener('click', () => {
  drawer.classList.toggle('drawer__visible');
  toggleAnimetion(drawer);
  obfucator.classList.toggle('obfucator__visible');
});

obfucator.addEventListener('click', () => {
  drawer.classList.toggle('drawer__visible');
  toggleAnimetion(drawer);
  obfucator.classList.toggle('obfucator__visible');
});
