const openButton = document.querySelector('.open-modal-btn');
const modal = document.querySelector('.book-modal');
const modalBg = document.querySelector('.modal-bg');
const closeButton = modal.querySelector('.book-modal__close');
const form = modal.querySelector('.book-modal__form');
const nameField = form.querySelector('[name="name"]');
const emailField = form.querySelector('[name="email"]');
const phoneField = form.querySelector('[name="phone"]');

const storedName = localStorage.getItem('name');
const storedEmail = localStorage.getItem('email');
const storedPhone = localStorage.getItem('phone');

const openModal = () => {
  modal.classList.add('modal-show');
  modalBg.classList.add('modal-bg-show');

  nameField.value = storedName;
  emailField.value = storedEmail;
  phoneField.value = storedPhone;

  closeButton.addEventListener('click', closeModal);
  window.addEventListener('keydown', closeWithKeyPress);

  form.noValidate = true;
  form.addEventListener('submit', submitForm);
}

const closeModal = () => {
  const time = 300;
  modal.style.animation = 'close ' + time + 'ms';
  modal.classList.remove('modal-show');
  modalBg.classList.remove('modal-bg-show');
  setTimeout(() => {
    modal.removeAttribute('style');
  }, time);

  closeButton.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', closeWithKeyPress);
  form.removeEventListener('submit', submitForm);
};

const submitForm = (evt) => {
  if (!nameField.value && !emailField.value && !phoneField.value) {
    evt.preventDefault();
    modal.classList.remove('modal-error');
    modal.clientHeight = modal.clientHeight;
    modal.classList.add('modal-error');
    return;
  }

  localStorage.setItem('name', nameField.value);
  localStorage.setItem('email', emailField.value);
  localStorage.setItem('phone', phoneField.value);
}

const closeWithKeyPress = (evt) => {
  if (evt.key === 'Escape') {
    closeModal();
  }
};

openButton.addEventListener('click', openModal);
