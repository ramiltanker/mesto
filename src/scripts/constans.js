const page = document.querySelector(".page");
const profile = page.querySelector(".profile");
const profileInfo = profile.querySelector(".profile__info");
const editButton = profileInfo.querySelector(".profile__edit-button");
const profilePopup = page.querySelector("#popup-profile");
const closeButton = profilePopup.querySelector(".popup__close-button");
const formProfileElement = profilePopup.querySelector(".popup__form");
const nameInput = formProfileElement.querySelector(".popup__form-name");
const jobInput = formProfileElement.querySelector(".popup__form-job");
const profileName = profileInfo.querySelector(".profile__name");
const profileProfession = profileInfo.querySelector(".profile__profession");

const popupCards = page.querySelector("#popup-cards");
const cardAddButton = page.querySelector(".profile__add-button");
const cardNameInput = popupCards.querySelector(".popup__form-title");
const cardLinkInput = popupCards.querySelector(".popup__form-link");
const cardsCloseButton = popupCards.querySelector("#cards-close");
const cardListElement = popupCards.querySelector("#popup-form-card");

const cardsContainer = document.querySelector(".elements");

const imagePopup = document.querySelector("#popup-image");
const closePopupImageButton = imagePopup.querySelector(
  ".popup__close-button-image"
);

const popupImageTitle = imagePopup.querySelector(".popup__title-image");
const popupImageIllustration = imagePopup.querySelector(
  ".popup__illustration-image"
);

const allPopups = Array.from(document.querySelectorAll(".popup"));

const avatarContainer = profile.querySelector('.profile__avatar-container');
const avatarRedactImage = avatarContainer.querySelector('.profile__avatar-redact-image');
const avatarImage = avatarContainer.querySelector('.profile__image');
const avatarInput = document.querySelector('#avatar-input');

const likesContainer = document.querySelector('.elements__like-score');
const likeButton = document.querySelector('.elements__like-button');


const cardForm = document.querySelector("#popup-form-card");
const profileForm = document.querySelector("#popup-profile-form");
const avatarForm = document.querySelector('#popup-avatar-form');


export {page, profile, profileInfo, editButton, profilePopup, closeButton, formProfileElement, nameInput, jobInput, profileName, profileProfession,
popupCards, cardAddButton, cardNameInput, cardLinkInput, cardsCloseButton, cardListElement, cardsContainer, imagePopup, closePopupImageButton,
popupImageTitle, popupImageIllustration, allPopups, avatarContainer, avatarRedactImage, avatarImage, avatarInput, likesContainer, likeButton, cardForm,
profileForm, avatarForm};