export class Card {
  constructor({items: {name, link, likes, owner, cardId}, userId, handleCardClick, handleLikeClick, handleCardDelete}, cardSelector, containerSelector, popupDeleteSelector) {
    this._title = name;
    this._image = link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
    this._container = document.querySelector(containerSelector);
    this._likes = likes;
    this._cardId = cardId;
    this._handleLikeClick = handleLikeClick;
    this._authorOfCard = owner;
    this._userId = userId;
    this._popupDelete = document.querySelector(popupDeleteSelector);
    this._handleCardDelete = handleCardDelete;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".elements__image")
    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
    this._element.querySelector(".elements__title").textContent = this._title;
    this.renderLikes();
    this.renderDeleteIcons();
    this._setEventListeners();
    return this._element;
  }

 

  _likeCard() {
    this._handleLikeClick(this, this._cardId);

  }

  deleteCard() {
   this._element.querySelector('.elements__delete-button').closest('.elements__element').remove();
  }

  renderDeleteIcons() {
    if(this._authorOfCard !== this._userId) {
      this._element
      .querySelector(".elements__delete-button").style.display = 'none';
    }
  
  }

  isLiked(userId) {
   return this._likes.some(user => user._id === userId);
  }


  renderLikes() {
    this._element.querySelector('.elements__like-score').textContent = this._likes.length;
    if(this.isLiked()) {
      this._element.querySelector(".elements__like-button").classList.add('elements__like-button_active');
    }
    else {
      this._element.querySelector(".elements__like-button").classList.remove('elements__like-button_active');
    }
  }

    setLikesInfo(result) {
    this._likes = result.likes;
    this.renderLikes();
}

  _setEventListeners() {
    this._cardImage
      .addEventListener("click", () => {
        this._handleCardClick();
      });

    this._element
      .querySelector(".elements__like-button")
      .addEventListener("click", () => {
        this._likeCard();
        this._element
        .querySelector(".elements__like-button").classList.add('elements__like-button_active');
      });
      
    this._element
      .querySelector(".elements__delete-button")
      .addEventListener("click", () => {
        this._handleCardDelete();
      });
  }

  addItem(element) {
    this._container.append(element);
}

}
