export default class Card {
  constructor({cardData, templateSelector, handleCardClick}) {
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardItem = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);

    return cardItem;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__picture');
    this._cardImage.src = this._link;
    this._cardImage.alt = `Фотография: ${this._name}`;
    this._element.querySelector('.element__title').textContent = this._name;


    this._cardTrash = this._element.querySelector('.element__delete-button');
    this._cardLike = this._element.querySelector('.element__like-button');

    this._setEventListeners();

    return this._element;
  }

  _setLikeButtonEventListener() {
    this._cardLike.addEventListener('click', () => {
      this._toggleLike();
    });
  }

  _toggleLike() {
    this._cardLike.classList.toggle('element__like-button_active');
  }

  _setButtonDeleteCardEventListener() {
    this._cardTrash.addEventListener('click', () => {
      this._deleteCard();
    });
  }

  _deleteCard() {
    this._element.closest('.element').remove();
  }

  _setOpenPopupEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._cardData);
    })
  }

  _setEventListeners() {
    this._setButtonDeleteCardEventListener();
    this._setLikeButtonEventListener();
    this._setOpenPopupEventListeners();
  }

}
