import Popup from './Popup.js';

export default class PopupConfirmation extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__submit-button');

  }

//   _getInputValues() {
//     this._inputsValues = {};
//     this._formInputsList.forEach(input => {
//       this._inputsValues[input.name] = input.value;
//     });

//     return this._inputsValues;
//   }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
  }

//   setInputValues(data) {
//     this._formInputsList.forEach((input) => {
//       input.value = data[input.name];
//       console.log(input)
//       console.log(data)
//     });
//   }
}
