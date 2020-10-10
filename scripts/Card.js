 export class Card {
    constructor(data, cardSelector) {
      this._title = data.name;
      this._image = data.link;
      this._cardSelector = cardSelector;
    }
  
    _getTemplate() {
  
      const cardElement = document.querySelector(this._cardSelector)
      .content
      .querySelector('.elements__element')
      .cloneNode(true);
  
      return cardElement;
    }
  
    generateCard(popupImage, popupImageTitle, popupImageIllustration, keyHandler) {
      this._element = this._getTemplate();
      this._setEventListeners(popupImage, popupImageTitle, popupImageIllustration, keyHandler);
      this._element.querySelector('.elements__image').src = this._image;
      this._element.querySelector('.elements__image').alt = this._title;
      this._element.querySelector('.elements__title').textContent = this._title;
  
      return this._element;
    }
  
    _cardLike() {
      this._element.querySelector('.elements__like-button').addEventListener('click', function (event) {
             event.target.classList.toggle("elements__like-button_active");
          });
    }
  
    _cardDelete() {
      this._element.querySelector(".elements__delete-button").addEventListener("click", function (evt) {
       this._element = evt.target.closest('.elements__element');
      this._element.remove();
     });
    }
  
    _handleOpenPopup(popupImageTitle, popupImageIllustration, popupImage, keyHandler) {
      popupImageTitle.textContent = this._title;
      popupImageIllustration.src = this._image;
      popupImage.classList.add('popup_opened');
      document.addEventListener("keydown", keyHandler);
    }
  
    _handleClosePopup(popupImage, keyHandler) {
      popupImage.classList.remove('popup_opened');
      document.removeEventListener("keydown", keyHandler);
    }
  
    _setEventListeners(popupImage, popupImageTitle, popupImageIllustration, keyHandler) {
  
      this._element.querySelector('.elements__image').addEventListener('click', () => {
        this._handleOpenPopup(popupImageTitle, popupImageIllustration, popupImage, keyHandler);
        
      });
      
      const closePopupImageButton = popupImage.querySelector(
        ".popup__close-button-image"
      );
      closePopupImageButton.addEventListener('click', () => {
        this._handleClosePopup(popupImage, keyHandler);
        
      });
  
      this._cardLike();
  
      this._cardDelete();
  }
  }
  
 