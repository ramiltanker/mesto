import {Popup} from './Popup.js';

export  class PopupDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
    }

    deleteSubmit(submit) {
        this._sumbit = submit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt)=> {
            evt.preventDefault();
            this._sumbit();
          })
    }


}