const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.nav');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    menuNav.classList.add('open');
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    menuNav.classList.remove('open');
  }
});