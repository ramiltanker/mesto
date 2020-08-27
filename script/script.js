let page = document.querySelector(".page");
let profile = page.querySelector(".profile");
let profileInfo = profile.querySelector(".profile__info");
let editButton = profileInfo.querySelector(".profile__edit-button");
let popup = page.querySelector(".popup");
let popupOpened = popup.querySelector(".popup__opened");
let closeButton = popup.querySelector(".popup__close-button");

function openRedact() {
  popup.classList.add("popup__opened");
}

editButton.addEventListener("click", openRedact);

function closeRedact() {
  popup.classList.remove("popup__opened");
}

closeButton.addEventListener("click", closeRedact);

let formElement = popup.querySelector(".popup__form");
let saveButton = popup.querySelector(".popup__button-save");

function formSubmitHandler(evt) {
  evt.preventDefault();
  let nameInput = formElement.querySelector(".popup__form-name");
  let jobInput = formElement.querySelector(".popup__form-job");
  nameInput.value;
  jobInput.value;
  let profileName = profileInfo.querySelector(".profile__name");
  let profileProffesion = profileInfo.querySelector(".profile__proffesion");
  profileName.textContent = nameInput.value;
  profileProffesion.textContent = jobInput.value;
  
}

formElement.addEventListener("submit", formSubmitHandler);

saveButton.addEventListener('click', formSubmitHandler);
