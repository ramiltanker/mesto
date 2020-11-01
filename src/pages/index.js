import '../pages/index.css';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {Section} from '../components/Section.js';
import { Card } from "../components/Card.js";
import {PopupWithImage} from '../components/PopupWithImage.js';
import {UserInfo} from '../components/UserInfo.js';

import {editButton, nameInput, jobInput, cardAddButton} from '../scripts/constans.js';


function formSubmitHandler(data) {
  userInfo.setUserInfo(data);
  popupProfile.close();
}

const popupProfile = new PopupWithForm('#popup-profile', formSubmitHandler);
popupProfile.setEventListeners();
const userInfo = new UserInfo({nameSelector:'.profile__name' , infoSelector:'.profile__profession'});

editButton.addEventListener("click", () => {
  popupProfile.open();


  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.info;
});



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

const initialCardsReverse = initialCards.reverse();

const popupImage = new PopupWithImage('#popup-image');
popupImage.setEventListeners();

const cardsSection = new Section(
  {
    items: initialCardsReverse,
    renderer: (items) => {
      const card = new Card({ 
         items, 
        handleCardClick: () => {
          popupImage.open(items.name, items.link);
        } }, 
        "#cards");
      const cardElement = card.generateCard(
          );
      cardsSection.addItem(cardElement);

    },
  },
  ".elements"
);

cardsSection.renderItems();


const popupCard = new PopupWithForm('#popup-cards', (data) => {
cardsSection.renderCard(data);
popupCard.close();
console.log(data);
});

popupCard.setEventListeners();

cardAddButton.addEventListener('click', () => {
  popupCard.open();
});


const allSelectors = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_inactive",
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "popup__form-input-error_active",
  fieldsetClass: ".popup__form-set",
};

const cardForm = document.querySelector("#popup-form-card");
const profileForm = document.querySelector("#popup-profile-form");

import { FormValidator } from "../components/FormValidaton.js";

function formValidation(selectors, formElement) {
  const form = new FormValidator(selectors, formElement);
  form.enableValidation();
}

formValidation(allSelectors, cardForm);

formValidation(allSelectors, profileForm);
