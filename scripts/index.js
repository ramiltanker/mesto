const page = document.querySelector(".page");
const profile = page.querySelector(".profile");
const profileInfo = profile.querySelector(".profile__info");
const editButton = profileInfo.querySelector(".profile__edit-button");
const popupProfile = page.querySelector(".popup");
const closeButton = popupProfile.querySelector(".popup__close-button");
const formElement = document.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__form-name");
const jobInput = formElement.querySelector(".popup__form-job");
const profileName = profileInfo.querySelector(".profile__name");
const profileProfession = profileInfo.querySelector(".profile__profession");

const popupCards = page.querySelector("#popup-cards");
const cardAddButton = page.querySelector(".profile__add-button");
const cardNameInput = popupCards.querySelector(".popup__form-title");
const cardLinkInput = popupCards.querySelector(".popup__form-link");
const cardsCloseButton = popupCards.querySelector("#cards-close");
const cardListElement = popupCards.querySelector("#popup-form-card");

const cardsContainer = document.querySelector(".elements");


const popupImage = document.querySelector("#popup-image");
const closePopupImageButton = popupImage.querySelector(
  ".popup__close-button-image"
);

const popupImageTitle = popupImage.querySelector(".popup__title-image");
const popupImageIllustration = popupImage.querySelector(
  ".popup__illustration-image"
);

const allPopups = Array.from(document.querySelectorAll(".popup"));

function openProfilePopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
  openPopup(popupProfile);
}

editButton.addEventListener("click", openProfilePopup);

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", keyHandler);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", keyHandler);
}

function keyHandler(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

allPopups.forEach(function (popup) {
  popup.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
  });
});

closeButton.addEventListener("click", function (evt) {
  closePopup(popupProfile);
});

cardsCloseButton.addEventListener("click", function () {
  closePopup(popupCards);
});
closePopupImageButton.addEventListener("click", function () {
  closePopup(popupImage);
});

cardAddButton.addEventListener("click", function () {
  openPopup(popupCards);
});

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupProfile);
}

formElement.addEventListener("submit", formSubmitHandler);

const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

import {Card} from './Card.js';


function renderCards() {
  cardsContainer.innerHTML = '';
  initialCards.forEach((item) => {
    const card = new Card(item, '#cards');
    const cardElement = card.generateCard(popupImage, popupImageTitle, popupImageIllustration, keyHandler, closePopupImageButton);
    cardsContainer.append(cardElement);
  });
}

renderCards();



function cardCreateSubmit(evt) {
  evt.preventDefault();

  const cardItem = (
    {
      name: cardNameInput.value,
      link: cardLinkInput.value,
    });

  const card = new Card(cardItem, '#cards');
  const cardElement = card.generateCard(popupImage, popupImageTitle, popupImageIllustration, keyHandler, closePopupImageButton);
  cardsContainer.prepend(cardElement);
  closePopup(popupCards);
}


cardListElement.addEventListener("submit", cardCreateSubmit);


const allSelectors = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_inactive",
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "popup__form-input-error_active",
  fieldsetClass: ".popup__form-set",
};

const cardForm = document.querySelector('#popup-form-card');
const profileForm = document.querySelector('#popup-profile-form');


import {FormValidator} from './FormValidaton.js';


function formValidation(selectors, formElement) {
  const form = new FormValidator(selectors, formElement);
  form.enableValidation(selectors);
}

formValidation(allSelectors, cardForm);

formValidation(allSelectors, profileForm);