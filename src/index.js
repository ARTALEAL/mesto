import './pages/index.css';
import Card from "./components/Card.js";
import UserInfo from "./components/UserInfo.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import Section from "./components/Section.js";
import FormValidator from "./components/FormValidator.js";

import {
  buttonEdit,
  formEditProfile,
  buttonAdd,
  initialCards,
  validationConfig
} from "./utils/constants.js";

// создание карточек

function createCard(items) {
  const card = new Card({
    cardData: items,
    templateSelector: '#card',
    handleCardClick: (items) => {
      popupFullImage.open(items);
    }
  });
  const cardItem = card.generateCard();

  return cardItem;
}

const cardList = new Section({
  items: initialCards,
  renderer: (data) => {
    cardList.addItem(createCard(data));
  },
  containerSelector: '.elements',
});

cardList.renderItems();

// экземпляр класса попапа юзера

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_profile-edit',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  }
});

popupEditProfile.setEventListeners();

const userInfo = new UserInfo({
  name: '.profile__name',
  job: '.profile__description'
});

// экземпляр класса попапа новой карточки

const popupNewCard = new PopupWithForm({
  popupSelector: '.popup_add-card',
  handleFormSubmit: (data) => {
    cardList.addItem(createCard(data));
  }
});

popupNewCard.setEventListeners();

// экземпляр класса попапа с fullimage

const popupFullImage = new PopupWithImage('.popup_gallery');
popupFullImage.setEventListeners();

// открытие попапов

buttonEdit.addEventListener('click', () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  profileEditFormValidator.hideErrors();
  popupEditProfile.open();
});

buttonAdd.addEventListener('click', () => {
  newCardFormValidator.disableButton();
  newCardFormValidator.hideErrors();
  popupNewCard.open();
});

const profileEditFormValidator = new FormValidator(validationConfig, formEditProfile);
profileEditFormValidator.enableValidation();

const formAddNewCard = document.forms.card;
const newCardFormValidator = new FormValidator(validationConfig, formAddNewCard);
newCardFormValidator.enableValidation();
