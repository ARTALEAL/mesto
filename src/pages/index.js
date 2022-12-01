import './index.css';
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import Api from '../components/Api.js';

import {
  buttonEdit,
  formEditProfile,
  buttonAdd,
  validationConfig
} from "../utils/constants.js";

//Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
  headers: {
    authorization: 'bcb4532a-7b6a-4778-ad3b-abcb539d9fe0',
    'Content-Type': 'application/json'
  }
});

let userId;

// Загрузка готовых карточек и данных о пользователе с сервера
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    cardList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

// создание карточек

function createCard(items) {
  const card = new Card({
    cardData: items,
    templateSelector: '#card',
    userId: userId,
    handleCardClick: (items) => {
      popupFullImage.open(items);
    }
  });
  const cardItem = card.generateCard();
  return cardItem;
}

// const cardList = new Section({
//   items: initialCards,
//   renderer: (data) => {
//     cardList.addItem(createCard(data));
//   },
//   containerSelector: '.elements',
// });

// cardList.renderItems();

// Создание экземпляра класса Section
// const cardList = new Section({
//     items: initialCards,
//     renderer: (data) => {
//       cardList.addItem(createCard(data));
//     },
//     containerSelector: '.elements',
//   });

// Создание экземпляра класса Section
const cardList = new Section({
    renderer: (data) => {
    cardList.addItem(createCard(data));
  },
}, '.elements');




// экземпляр класса попапа юзера

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_profile-edit',
  handleFormSubmit: (data) => {
    popupEditProfile.loading(true);
    api.editUserInfo(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupEditProfile.loading(false);
      });
  }
});

popupEditProfile.setEventListeners();

const userInfo = new UserInfo({
  name: '.profile__name',
  about: '.profile__description'
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
