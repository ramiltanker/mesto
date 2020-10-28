export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');
        this._handleEsc = this._handleEscClose.bind(this);
        document.addEventListener('click', this._handleEsc);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('click', this._handleEsc);
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            const openedPopup = document.querySelector(".popup_opened");
            this.close(openedPopup);
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
        document.addEventListener('keydown', this._handleEscClose.bind(this));
    }
}
