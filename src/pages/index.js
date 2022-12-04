import './index.css';
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import Api from '../components/Api.js';
import PopupConfirmation from '../components/PopupConfirmation.js';

import {
  buttonEdit,
  formEditProfile,
  buttonAdd,
  validationConfig,
  buttonEditAvatar,
  formEditAvatar,
  avatar
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
    },
    ///
    handleDeleteIconClick: (cardId) => {
      deleteCardPopup.open();
      deleteCardPopup.submitCallback(() => {
        api.deleteCard(cardId)
          .then(() => {
            deleteCardPopup.close();
            card.deleteCard();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      });
    },
    handleSetLike: (cardId) => {
      api.setLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    handleRemoveLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
    ///
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

// Создание попапа редактирования аватара пользователя
const editAvatarPopup = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handleFormSubmit: (data) => {
    editAvatarPopup.loading(true);
    api.editAvatar(data)
      .then((data) => {
        avatar.src = data.avatar;
        editAvatarPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editAvatarPopup.loading(false);
      });
  }
});
editAvatarPopup.setEventListeners();


const userInfo = new UserInfo({
  name: '.profile__name',
  about: '.profile__description',
  avatar: '.profile__image'
});

// экземпляр класса попапа новой карточки

const popupNewCard = new PopupWithForm({
  popupSelector: '.popup_add-card',
  handleFormSubmit: (data) => {
    // cardList.addItem(createCard(data));
    popupNewCard.loading(true);
    api.addCard(data)
    .then((data) => {
      cardList.addItem(createCard(data));
      popupNewCard.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupNewCard.loading(false);
    });
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

// // Обработчик кнопки Edit аватара пользователя
buttonEditAvatar.addEventListener('click', () => {
  avatarEditFormValidator.disableButton();
  avatarEditFormValidator.hideErrors();
  editAvatarPopup.open();
});

const profileEditFormValidator = new FormValidator(validationConfig, formEditProfile);
profileEditFormValidator.enableValidation();

const formAddNewCard = document.forms.card;
const newCardFormValidator = new FormValidator(validationConfig, formAddNewCard);
newCardFormValidator.enableValidation();

const avatarEditFormValidator = new FormValidator(validationConfig, formEditAvatar);
avatarEditFormValidator.enableValidation();

// Создаем попап с подтверждением удаления карточки
const deleteCardPopup = new PopupConfirmation({
  popupSelector: '.popup_confirmation'
});
deleteCardPopup.setEventListeners();