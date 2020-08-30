let page = document.querySelector('.page');
let profile = page.querySelector('.profile');
let profileInfo = profile.querySelector('.profile__info');
let editButton = profileInfo.querySelector('.profile__edit-button');
let popup = page.querySelector('.popup');
let popupOpened = popup.querySelector('.popup_opened');
let closeButton = popup.querySelector('.popup__close-button');
let formElement = popup.querySelector('.popup__form');
let saveButton = popup.querySelector('.popup__button-save');
let nameInput = formElement.querySelector('.popup__form-name');
let jobInput = formElement.querySelector('.popup__form-job');
let profileName = profileInfo.querySelector('.profile__name');
let profileProfesion = profileInfo.querySelector('.profile__profesion');



function openRedact() {
  popup.classList.add('popup_opened');
  nameInput.textContent = profileName.value; 
  jobInput.textContent = profileProfesion.value
}

editButton.addEventListener('click', openRedact);

function closeRedact() {
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closeRedact);





function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfesion.textContent = jobInput.value;
  closeRedact();
}

formElement.addEventListener('submit', formSubmitHandler);
saveButton.addEventListener('click', formSubmitHandler);
