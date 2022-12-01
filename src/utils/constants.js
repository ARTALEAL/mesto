export const formEditProfile = document.forms.user;
export const formAddNewCard = document.forms.card;
// export const popupProfileEdit = makePopup(document.querySelector('.popup_profile-edit'));
export const buttonEdit = document.querySelector('.profile__button-edit');
export const buttonClose = document.querySelector('.popup__close-button');
export const formEdit = document.querySelector('.popup__container');
export const name = document.querySelector('.profile__name');
export const job = document.querySelector('.profile__description');
export const nameInput = document.querySelector('.popup__input_data_name');
export const jobInput = document.querySelector('.popup__input_data_job');

export const cardsContainer = document.querySelector('.elements');
//ПР5
// export const popupAdd = makePopup(document.querySelector('.popup_add-card'));
export const buttonAdd = document.querySelector('.profile__button-add');
export const formAdd = document.querySelector('.popup__form_add-place');
export const buttonCreateCard = formAdd.querySelector('.popup__submit-button');

export const popupFormAddPlace = document.querySelector('.popup__form_add-place');
export const placeName = document.querySelector('.popup__input_place_name');
export const imageUrl = document.querySelector('.popup__input_image_url');
export const newCardItem = {};

//GALLERY
// export const popupGalery = makePopup(document.querySelector('.popup_gallery'));
export const galleryImage = document.querySelector('.popup__image');
export const galleryFigcaption = document.querySelector('.popup__figcaption');

export const validationConfig = {
  popupSelector: ".popup",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__error-message_active"
};
