export default class Card {
  constructor({cardData, templateSelector, userId, handleCardClick, handleDeleteIconClick, handleSetLike, handleRemoveLike}) {
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._userId = userId;
    this._cardId = cardData._id;
    this._cardOwnerId = cardData.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._cardId = cardData._id;
    this._likes = cardData.likes;
    this._handleSetLike = handleSetLike;
    this._handleRemoveLike = handleRemoveLike;
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
    this._likesNumber = this._element.querySelector('.element__like-container');


    this._cardTrash = this._element.querySelector('.element__delete-button');
    this._cardLike = this._element.querySelector('.element__like-button');
    this._hasDeleteBtn();
    this._likesNumber.textContent = this._likes.length;

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
      // this._deleteCard();
      this._handleDeleteIconClick(this._cardId);
    });
  }

  // _deleteCard() {
  //   this._element.closest('.element').remove();
  // }
    // Удаление карточки
    deleteCard() {
        this._element.closest('.element').remove();
      }
    // deleteCard() {
    //   this._element.remove();
    //   this._element = null;
    // }

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

    // проверяем владельца карточки и убираем кнопку Delete
    _hasDeleteBtn() {
      if (this._userId !== this._cardOwnerId) {
        this._cardTrash.remove();
      }
    }

      // поставить/удалить лайк, изменение количества лайков
  handleLikeCard(cardData) {
    this._likes = cardData.likes;
    this._likesNumber.textContent = this._likes.length;
    this._cardLike.classList.toggle('element__like-button_active');
  }

}
