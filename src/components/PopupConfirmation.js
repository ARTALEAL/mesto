import Popup from './Popup.js';

export default class PopupConfirmation extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }

  // принимает коллбэк на удаление карточки
  submitCallback(submitHandler) {
    this._handleSubmit = submitHandler;
  }

  // удаление карточки по нажатию на submit
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('click', (event) => {
      event.preventDefault();
      this._handleSubmit();
    });
  }
}

