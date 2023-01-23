const modal = document.querySelector('.modal');
const buttons = document.querySelectorAll('.footer div');
const close = document.querySelector('.modal__close');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
  });
});
close.addEventListener('click', () => {
  modal.classList.remove('visible');
  modal.classList.add('hidden');
});
