import {Popup} from './Popup.js';

export  class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._button = this._popup.querySelector('.popup__button-submit');
        this._buttonDefaultText = this._button.textContent;
    }

    _getInputValues() {
        this._inputList = this._popup.querySelectorAll('.popup__form-input');

        this._formValues = {};
        this._inputList.forEach((item) => {
        this._formValues[item.name] = item.value;
        });
        return this._formValues;
   
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._submitForm(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();    
    }

    isSaving() {
        this._button.textContent = 'Сохранение...';
    }

    isSavingReset() {
        this._button.textContent = this._buttonDefaultText;
    }
}

