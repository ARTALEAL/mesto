const popup = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelector('.popup__close-button');
const editForm = document.querySelector('.popup__container');
const getName = document.querySelector('.profile__name');
const getJob = document.querySelector('.profile__description');
let nameInput = document.querySelector('.popup__input_data_name');
let jobInput = document.querySelector('.popup__input_data_job');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = getName.textContent;
  jobInput.value = getJob.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  getName.textContent = nameInput.value;
  getJob.textContent = jobInput.value;
  closePopup();
}

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
editForm.addEventListener('submit', formSubmitHandler);

