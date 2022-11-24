import Card from "./Card.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import FormValidator from "./FormValidator.js";

import {
  buttonEdit,
  formEditProfile,
  buttonAdd,
  initialCards,
  validationConfig
} from "../utils/constants.js";

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
  newCardFormValidator.hideErrors();
  popupNewCard.open();
});

// function makePopup(universalPopup) {
//   const buttonClosePopup = universalPopup.querySelector(".popup__close-button");
//   const popup = {
//     open() {
//       universalPopup.classList.add("popup_opened");
//       buttonClosePopup.addEventListener("click", onCloseButtonClick);
//       universalPopup.addEventListener("mousedown", handleOverlayClick);
//       document.addEventListener("keydown", onKeydown);
//     },
//     close() {
//       universalPopup.classList.remove("popup_opened");
//       buttonClosePopup.removeEventListener("click", onCloseButtonClick);
//       universalPopup.removeEventListener("mousedown", handleOverlayClick);
//       document.removeEventListener("keydown", onKeydown);
//     }
//   };

//   const onCloseButtonClick = () => {
//     popup.close();
//   };

//   const handleOverlayClick = (event) => {
//     if (event.target.classList.contains("popup_opened")) {
//       popup.close();
//     }
//   };

//   const onKeydown = (event) => {
//     if (event.key === "Escape") {
//       popup.close();
//     }
//   }

//   return popup;
// }

// const popupProfileEdit = makePopup(document.querySelector('.popup_profile-edit'));
// const buttonEdit = document.querySelector('.profile__button-edit');
// const buttonClose = document.querySelector('.popup__close-button');
// const formEdit = document.querySelector('.popup__container');
// const name = document.querySelector('.profile__name');
// const job = document.querySelector('.profile__description');
// const nameInput = document.querySelector('.popup__input_data_name');
// const jobInput = document.querySelector('.popup__input_data_job');

// const cardsContainer = document.querySelector('.elements');

// buttonEdit.addEventListener("click", function () {
//   popupProfileEdit.open();
// });

// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   name.textContent = nameInput.value;
//   job.textContent = jobInput.value;
//   popupProfileEdit.close();
// }

// formEdit.addEventListener('submit', handleProfileFormSubmit);

//Проектная работа 5
// const popupAdd = makePopup(document.querySelector('.popup_add-card'));
// const buttonAdd = document.querySelector('.profile__button-add');
// const formAdd = document.querySelector('.popup__form_add-place');
// const buttonCreateCard = formAdd.querySelector('.popup__submit-button');

// buttonAdd.addEventListener("click", function () {
//   popupAdd.open();
//   popupFormAddPlace.reset();
// });

// const popupFormAddPlace = document.querySelector('.popup__form_add-place');
// const placeName = document.querySelector('.popup__input_place_name');
// const imageUrl = document.querySelector('.popup__input_image_url');
// const newCardItem = {};

// popupFormAddPlace.addEventListener("submit", function (evt) {
//   evt.preventDefault();


//   newCardItem.name = placeName.value;
//   newCardItem.link = imageUrl.value;
//   const card = addElement(newCardItem);

//   popupAdd.close();
//   newCardFormValidator.disableButton();
// });

// //GALLERY
// const popupGalery = makePopup(document.querySelector('.popup_gallery'));
// const galleryImage = document.querySelector('.popup__image');
// const galleryFigcaption = document.querySelector('.popup__figcaption');

// function openGallery(name, link) {
//   galleryImage.setAttribute('src', link);
//   galleryImage.setAttribute('alt', name);
//   galleryFigcaption.innerText = name;
//   popupGalery.open();
// }

// const cardTemplate = document.querySelector('#card');
// initialCards.forEach((item) => {
//   cardsContainer.append(createCard(item));
// });

// function createCard(cardData) {
//   const card = new Card(cardData, cardTemplate, openGallery);
//   const cardItem = card.generateCard();
//   return cardItem;
// }

// function addElement(cardElement) {
//   cardsContainer.prepend(createCard(cardElement));
// }


// const validationConfig = {
//   popupSelector: ".popup",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__submit-button",
//   inactiveButtonClass: "popup__submit-button_disabled",
//   inputErrorClass: "popup__input_error",
//   errorClass: "popup__error-message_active"
// };

// const formEditProfile = document.forms.user;
const profileEditFormValidator = new FormValidator(validationConfig, formEditProfile);
profileEditFormValidator.enableValidation();

const formAddNewCard = document.forms.card;
const newCardFormValidator = new FormValidator(validationConfig, formAddNewCard);
newCardFormValidator.enableValidation();
