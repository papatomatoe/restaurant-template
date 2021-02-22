const openButton = document.querySelector('.open-modal-btn');
const modal = document.querySelector('.book-modal');
const modalBg = document.querySelector('.modal-bg');
const closeButton = modal.querySelector('.book-modal__close');
const form = modal.querySelector('.book-modal__form');

openButton.addEventListener('click', () => {
  modal.classList.add('modal-show');
  modalBg.classList.add('modal-bg-show');
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('modal-show');
  modalBg.classList.remove('modal-bg-show');
});
