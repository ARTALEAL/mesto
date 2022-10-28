
export default class Card {
  // constructor(data, templateSelector, openGallery) {
  //   this.cardName = data.name;
  //   this.cardLink = data.link;
  //   this.templateSelector = templateSelector;
  //   this.openGallery = openGallery;
  // }

  constructor(item, templateSelector, openGallery) {
    this._name = item.name;
    this._link = item.link;
    this._templateSelector = templateSelector;
    this._openGallery = openGallery;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__picture');
    this._cardTitle = this._element.querySelector('.element__title');
    this._cardLike = this._element.querySelector('.element__like-button');
    this._cardTrash = this._element.querySelector('.element__delete-button');

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _getTemplate() {
    const cardElement = this._templateSelector
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _setLikeButtonEventListener() {
    this._cardLike.addEventListener('click', () => {
      this._like();
    });
  }

  _like() {
    this._cardLike.classList.toggle('element__like-button_active');
  }

  _setButtonDeleteCardEventListener() {
    this._cardTrash.addEventListener('click', function (event) {
      event.target.closest('.element').remove();
    });
  }

  _setOpenPopupEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._openGallery(this._name, this._link);
    })
  }


  _setEventListeners() {
    this._setButtonDeleteCardEventListener();
    this._setLikeButtonEventListener();
    this._setOpenPopupEventListeners();
  }









  // createCard() {
  //   const card = document
  //     .querySelector(this.templateSelector)
  //     .content
  //     .cloneNode(true);

  //   const cardLike = card.querySelector('.element__like-button');
  //   const deleteIcon = card.querySelector('.element__delete-button');
  //   // const cardImage = card.querySelector('.element__picture');
  //   // const cardTitle = card.querySelector('.element__title');

  //   // cardImage.setAttribute('src', link);
  //   // cardImage.setAttribute('alt', name);
  //   // cardTitle.innerText = name;

  //   this.cardImage = card.querySelector('.element__picture');
  //   this.cardTitle = card.querySelector('.element__title');

  //   cardLike.addEventListener('click', function () {
  //     cardLike.classList.toggle('element__like-button_active');
  //   });

  //   deleteIcon.addEventListener('click', function (event) {
  //     event.target.closest('.element').remove();
  //   });

  //   this.cardImage.addEventListener('click', function openGallery(name, link) {
  //     const popupGalery = makePopup(document.querySelector('.popup_gallery'));
  //     const galleryImage = document.querySelector('.popup__image');
  //     const galleryFigcaption = document.querySelector('.popup__figcaption');
  //     galleryImage.setAttribute('src', link);
  //     galleryImage.setAttribute('alt', name);
  //     galleryFigcaption.innerText = name;
  //     popupGalery.open();
  //   })

  //   return card;
  // }




}
