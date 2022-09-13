const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popup = document.querySelector('.popup');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelector('.popup__close-button');
const editForm = document.querySelector('.popup__container');
const getName = document.querySelector('.profile__name');
const getJob = document.querySelector('.profile__description');
let nameInput = document.querySelector('.popup__input_data_name');
let jobInput = document.querySelector('.popup__input_data_job');

const elements = document.querySelector('.elements');

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

//
const popupAdd = document.querySelector('.popup__add-card');
const buttonAdd = document.querySelector('.profile__button-add');
const buttonCloseAdd = popupAdd.querySelector('.popup__close-button');
const submitButtonAdd = popupAdd.querySelector('.popup__submit-button');
const placeName = popupAdd.querySelector('.popup__input_data_name');
const imageURL = popupAdd.querySelector('.popup__input_data_url');
const popupForm = popupAdd.querySelector('.popup__form');

//Открытие попап, добавления карточки
function addCard() {
  popupAdd.classList.add('popup_opened');
}

function closeAddPopup() {
  popupAdd.classList.remove('popup_opened');
}

function addCardSubmit(evt) {
  evt.preventDefault();
  const card = createCard(placeName.value, imageURL.value);
  elements.prepend(card);

  popupForm.reset();
  closeAddPopup();

}

buttonAdd.addEventListener('click', addCard);
buttonCloseAdd.addEventListener('click', closeAddPopup);
submitButtonAdd.addEventListener('click', addCardSubmit);

//Функционал подгрузки и пр.
function createCard(name, link) {
  const card = document.getElementById('card').content.cloneNode(true);

  const cardLike = card.querySelector('.element__like-button');
  const deleteIcon = card.querySelector('.element__delete-button');
  const cardImage = card.querySelector('.element__picture');
  const cardTitle = card.querySelector('.element__title');

  cardImage.setAttribute('src', link);
  cardImage.setAttribute('alt', name);
  cardTitle.innerText = name;

  cardLike.addEventListener('click', function() {
    cardLike.classList.toggle('element__like-button_active');
  });

  deleteIcon.addEventListener('click', function(event) {
    event.target.closest('.element').remove();
  });

  return card;
}

initialCards.forEach((data) => {
  const card = createCard(data.name, data.link);
  elements.append(card);
});
