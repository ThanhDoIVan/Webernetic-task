const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const modalBackdrop = document.querySelector('.modal__backdrop');
const closeModalButton = document.querySelector('.modal__close');
const openModalButton = document.querySelector('.demo__button');


openModalButton.addEventListener('click', () => {
  modal.classList.remove('none');
  modalBackdrop.classList.remove('none');
});

closeModalButton.addEventListener('click', () => {
  modal.classList.add('none');
  modalBackdrop.classList.add('none');
});

const showForm = () => {
  modalContent.innerHTML = `
  <h1 class='modal__title'>Войти в систему</h1>
  <form class='modal__form'>
    <input class='modal__input' type='text' placeholder='Email/Телефон' />
    <input class='modal__input' type='password' placeholder='Пароль' />

    <span class='modal__checkbox'>
      <input type='checkbox' id='remember'/>
      <label for='remember'>Запомнить пароль</label>
    </span>

    <a class='modal__restore'>Восстановить</a>

    <button class='modal__button'>Войти</button>
    <button class='modal__button modal__button-light'>Зарегистрироваться</button>
  </form>
  `;
};

showForm();
