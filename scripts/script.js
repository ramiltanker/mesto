let page = document.querySelector('.page');
let profile = page.querySelector('.profile');
let profileInfo = profile.querySelector('.profile__info');
let editButton = profileInfo.querySelector('.profile__edit-button');
let popup = page.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-button');
let formElement = popup.querySelector('.popup__form');
let saveButton = popup.querySelector('.popup__button-save');
let nameInput = formElement.querySelector('.popup__form-name');
let jobInput = formElement.querySelector('.popup__form-job');
let profileName = profileInfo.querySelector('.profile__name');
let profileProfession = profileInfo.querySelector('.profile__profession');

let popupCards = page.querySelector('#popup-cards');
let cardAddButton = page.querySelector('.profile__add-button');
let cardNameInput = popupCards.querySelector('.popup__form-title');
let cardLinkInput = popupCards.querySelector('.popup__form-link');
let cardsClose = popupCards.querySelector('#cards-close');
let createButton = popupCards.querySelector('.popup__create-button');
let cardName = document.querySelector('.elements-title');
let cardLink = document.querySelector('.elements-element');
let cardElement = popupCards.querySelector('#popup-form-card');
let cardsContainer = document.querySelector('.elements');





function openRedact() {
  nameInput.value = profileName.textContent; 
  jobInput.value = profileProfession.textContent;
  popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openRedact);

function closeRedact() {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closeRedact);


function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closeRedact();
}

formElement.addEventListener('submit', formSubmitHandler);




function openCardsRedact() {
  cardNameInput.value = 'Название';
  cardLinkInput.value = 'Ссылка на картинку';
  popupCards.classList.add('popup_opened');
}

cardAddButton.addEventListener('click', openCardsRedact);


function closeCardsRedact() {
  popupCards.classList.remove('popup_opened');
}

cardsClose.addEventListener('click', closeCardsRedact);




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

function cardAdd() {
  const cardsTemplate = document.querySelector('#cards').content;
  initialCards.forEach(function (item) {
  const cardElement = cardsTemplate.cloneNode(true);  
  cardElement.querySelector('.elements__element').setAttribute(`style`, `background-image: url(${item.link})`);
  cardElement.querySelector('.elements__title').textContent = item.name;
  cardElement.querySelector('.elements__like-button').addEventListener('click', function (event) {
  event.target.classList.toggle('elements__like-button_active');
});
  cardsContainer.append(cardElement);
  });

}

cardAdd();


function cardAddHandler(evt) {
  evt.preventDefault();
  const cardsTemplate = document.querySelector('#cards').content;
  const cardElement = cardsTemplate.cloneNode(true);
 cardElement.querySelector('.elements__title').textContent  = cardNameInput.value;
 cardElement.querySelector('.elements__element').setAttribute(`style`, `background-image: url(${cardLinkInput.value})`);
const likeButton = cardElement.querySelector('.elements__like-button');
 likeButton.addEventListener('click', function (event) {
  event.target.classList.toggle('elements__like-button_active');
  console.log(likeButton);
 

});
cardsContainer.prepend(cardElement);
closeCardsRedact();
}

cardElement.addEventListener('submit', cardAddHandler);
 
