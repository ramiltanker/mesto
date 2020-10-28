import {Popup} from './Popup.js';


export class  PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(name, image) {
        super.open();
        const popupImage = this._popup.querySelector('.popup__illustration-image');
        popupImage.src = image;
        popupImage.alt = name;
        const popupImageTitle = this._popup.querySelector('.popup__title-image');
        popupImageTitle.textContent = name;
    }   
}