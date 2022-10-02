function makePopup(universalPopup) {
  const closeButtonPopup = universalPopup.querySelector(".popup__close-button");
  const popup = {
    open() {
      universalPopup.classList.add("popup_opened");
      closeButtonPopup.addEventListener("click", onCloseButtonClick);
      universalPopup.addEventListener("mousedown",  clickOnOverlay);
      document.addEventListener("keydown", keydownOn);
    },
    close() {
      universalPopup.classList.remove("popup_opened");
      closeButtonPopup.removeEventListener("click", onCloseButtonClick);
      universalPopup.removeEventListener("mousedown",  clickOnOverlay);
      document.removeEventListener("keydown", keydownOn);
    }
  };

  const onCloseButtonClick = () => {
    popup.close();
  };

  const clickOnOverlay = (event) => {
    if (event.target.classList.contains("popup_opened")){
      popup.close();
    }
  };

  const keydownOn = (event) => {
    if (event.key === "Escape"){
      popup.close();
    }
  }

  return popup;
}

const popup = makePopup(document.querySelector('.popup_profile-edit'));
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClose = document.querySelector('.popup__close-button');
const editForm = document.querySelector('.popup__container');
const getName = document.querySelector('.profile__name');
const getJob = document.querySelector('.profile__description');
let nameInput = document.querySelector('.popup__input_data_name');
let jobInput = document.querySelector('.popup__input_data_job');

const elements = document.querySelector('.elements');

buttonEdit.addEventListener("click", function () {
  popup.open();
  titleInput.value = titleProfile.textContent;
  subtitleInput.value = subtitleProfile.textContent;
});

function submitEditProfile(evt) {
  evt.preventDefault();
  getName.textContent = nameInput.value;
  getJob.textContent = jobInput.value;
  popup.close();
}

editForm.addEventListener('submit', submitEditProfile);

//Проектная работа 5
const popupAdd = makePopup(document.querySelector('.popup_add-card'));
const buttonAdd = document.querySelector('.profile__button-add');

buttonAdd.addEventListener("click", function () {
  popupForm.reset();
  popupAdd.open();
});

const popupForm = document.querySelector('.popup__form_add-place');
const placeName = document.querySelector('.popup__input_place_name');
const imageURL = document.querySelector('.popup__input_image_url');

popupForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const card = createCard(placeName.value, imageURL.value);
  elements.prepend(card);

  popupAdd.close();
});

//GALLERY
const popupGalery = makePopup(document.querySelector('.popup_gallery'));
const galleryImage = document.querySelector('.popup__image');
const galleryFigcaption = document.querySelector('.popup__figcaption');

function openGallery(name, link) {
  galleryImage.setAttribute('src', link);
  galleryImage.setAttribute('alt', name);
  galleryFigcaption.innerText = name;
  popupGalery.open();
}

//Функционал и загрузка.
function createCard(name, link) {
  const card = document.getElementById('card').content.cloneNode(true);

  const cardLike = card.querySelector('.element__like-button');
  const deleteIcon = card.querySelector('.element__delete-button');
  const cardImage = card.querySelector('.element__picture');
  const cardTitle = card.querySelector('.element__title');

  cardImage.setAttribute('src', link);
  cardImage.setAttribute('alt', name);
  cardTitle.innerText = name;

  cardLike.addEventListener('click', function () {
    cardLike.classList.toggle('element__like-button_active');
  });

  deleteIcon.addEventListener('click', function (event) {
    event.target.closest('.element').remove();
  });

  cardImage.addEventListener('click', function () {
    openGallery(name, link);
  })

  return card;
}

initialCards.forEach((data) => {
  const card = createCard(data.name, data.link);
  elements.append(card);
});



