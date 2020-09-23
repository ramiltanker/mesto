const page = document.querySelector('.page');
const profile = page.querySelector('.profile');
const profileInfo = profile.querySelector('.profile__info');
const editButton = profileInfo.querySelector('.profile__edit-button');
const popupProfile = page.querySelector('.popup');
const closeButton = popupProfile.querySelector('.popup__close-button');
const formElement = popupProfile.querySelector('.popup__form');
const saveButton = popupProfile.querySelector('.popup__button-save');
const nameInput = formElement.querySelector('.popup__form-name');
const jobInput = formElement.querySelector('.popup__form-job');
const profileName = profileInfo.querySelector('.profile__name');
const profileProfession = profileInfo.querySelector('.profile__profession');

const popupCards = page.querySelector('#popup-cards');
const cardAddButton = page.querySelector('.profile__add-button');
const cardNameInput = popupCards.querySelector('.popup__form-title');
const cardLinkInput = popupCards.querySelector('.popup__form-link');
const cardsCloseButton = popupCards.querySelector('#cards-close');
const createButton = popupCards.querySelector('.popup__create-button');
const cardListElement = popupCards.querySelector('#popup-form-card');

const cardName = document.querySelector('.elements-title');
const cardLink = document.querySelector('.elements-element');
const cardsContainer = document.querySelector('.elements');

const popupImage = document.querySelector('#popup-image');
const closePopupImageButton = popupImage.querySelector('.popup__close-button-image');
const popupImageTitle = popupImage.querySelector('.popup__title-image');
const popupImageIllustration = popupImage.querySelector('.popup__illustration-image');




function openProfilePopup() {
  nameInput.value = profileName.textContent; 
  jobInput.value = profileProfession.textContent;
  openPopup(popupProfile);
}

editButton.addEventListener('click', openProfilePopup);

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.classList.remove('popup_image-opened');
}

closeButton.addEventListener('click', function () {
  closePopup(popupProfile);
});

cardsCloseButton.addEventListener('click', function () {
  closePopup(popupCards);
});
closePopupImageButton.addEventListener('click', function () {
  closePopup(popupImage);
});


function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.classList.add('popup_image-opened');
}

cardAddButton.addEventListener('click', function () {
  openPopup(popupCards);
});




function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupProfile);
}

formElement.addEventListener('submit', formSubmitHandler);








const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


function createCard(name, link) {
  const cardsTemplate = document.querySelector('#cards').content;
  const cardElement = cardsTemplate.cloneNode(true);

cardElement.querySelector('.elements__title').textContent  = name;
cardElement.querySelector('.elements__image').src = link;
cardElement.querySelector('.elements__image').alt = name;
cardElement.querySelector('.elements__image').addEventListener('click', function () {
  openPopup(popupImage);
  popupImageIllustration.src = link;
  popupImageTitle.textContent = name;
});

const likeButton = cardElement.querySelector('.elements__like-button');
 likeButton.addEventListener('click', function (event) {
  event.target.classList.toggle('elements__like-button_active');
});

const deleteButton = cardElement.querySelector('.elements__delete-button').addEventListener('click', function () {
  const cardElement = document.querySelector('.elements__element');
  cardElement.remove();
});
  
  return cardElement;
}



function addCard(container, cardElement) {
  container.prepend(cardElement);
}

initialCards.forEach(function (item) {
addCard(cardsContainer, createCard(item.name, item.link));
});


function closeHandleCard() {
  cardNameInput.value = "";
  cardLinkInput.value = "";
  closePopup(popupCards);
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  addCard(cardsContainer, createCard(cardNameInput.value, cardLinkInput.value));
  closeHandleCard();
}


cardListElement.addEventListener('submit', handleCardSubmit);