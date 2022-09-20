const openNavBtn = document.querySelector('#open-nav-btn');
const closeNavBtn = document.querySelector('#close-nav-btn');
const nav = document.querySelector('nav');

openNavBtn.addEventListener('click', () => {
  nav.classList.add('show');
  openNavBtn.classList.add('hidden');
  closeNavBtn.classList.remove('hidden');
});

closeNavBtn.addEventListener('click', () => {
  nav.classList.remove('show');
  openNavBtn.classList.remove('hidden');
  closeNavBtn.classList.add('hidden');
});
