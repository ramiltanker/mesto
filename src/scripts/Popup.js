export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEsc = this._handleEscClose.bind(this);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEsc);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEsc);
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
          }
    }

    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            if (!evt.target.closest('.popup__container') && !evt.target.closest('.popup__container-image')) {
                this.close();
            }
        });
        this._popup.querySelector('.popup__close-image').addEventListener('click', () => {
            this.close();
        });

    }
}
