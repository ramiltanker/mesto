export class Card {
  constructor({items: {name, link}, handleCardClick}, cardSelector) {
    this._title = name;
    this._image = link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard(
    popupImage,
    popupImageTitle,
    popupImageIllustration,
  ) {
    this._element = this._getTemplate();
    this._setEventListeners(
      popupImage,
      popupImageTitle,
      popupImageIllustration,
    );
    this._element.querySelector(".elements__image").src = this._image;
    this._element.querySelector(".elements__image").alt = this._title;
    this._element.querySelector(".elements__title").textContent = this._title;

    return this._element;
  }

  _handleCardLike(event) {
    event.target.classList.toggle("elements__like-button_active");
  }

  _handleCardDelete(evt) {
    evt.target.closest(".elements__element").remove();
  }


  _setEventListeners() {
    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._handleCardClick();
      });

    this._element
      .querySelector(".elements__like-button")
      .addEventListener("click", this._handleCardLike);

    this._element
      .querySelector(".elements__delete-button")
      .addEventListener("click", this._handleCardDelete);
  }
}
