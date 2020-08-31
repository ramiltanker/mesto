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

