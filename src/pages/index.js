import '../pages/index.css';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {Section} from '../components/Section.js';
import { Card } from "../components/Card.js";
import {PopupWithImage} from '../components/PopupWithImage.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';
import {visibleAvatarRedactImage, hideAvatarRedactImage} from '../scripts/utils.js';
import {PopupDelete} from '../components/PopupDelete.js';
import {editButton, nameInput, jobInput, cardAddButton, avatarContainer, avatarRedactImage, avatarImage, profileName, 
  profileProfession, avatarInput, likesContainer, likeButton, popupCards, avatarForm, profileForm, cardForm} from '../scripts/constans.js';


avatarContainer.addEventListener('mouseover', visibleAvatarRedactImage);
avatarContainer.addEventListener('mouseout', hideAvatarRedactImage);


const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1',
  token: '0ab7ee2c-4048-41b7-8933-e3538494cc1c',
  cohort: 'cohort-17'
  });



  const userInfo = new UserInfo({nameSelector:'.profile__name' , infoSelector:'.profile__profession'});

    avatarContainer.addEventListener('click', () => {
    popupAvatar.open();
    popupAvatar.isSavingReset();
    formAvatar.disableButton();
  })

  function submitAvatarHandler(data) {
    api.setAvatar(data.link)
    .then( () => {
      avatarImage.src = data.link;
      popupAvatar.close();
      popupAvatar.isSaving();
    }) 
    .catch((error) => {
      console.log(error);
    })
  }

  const popupAvatar = new PopupWithForm('#popup-avatar', submitAvatarHandler);

  popupAvatar.setEventListeners();
  

  function formSubmitHandler(data) {
    api.setProfileInfo(data.name, data.about)
    .then(() => {
        userInfo.setUserInfo(data);
        popupProfile.close();
        popupProfile.isSaving();
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  const popupProfile = new PopupWithForm('#popup-profile', formSubmitHandler);
  popupProfile.setEventListeners();
  
  let userId;
  api.getUserInfo()
  .then(data => {
    userInfo.setUserInfo(data);
  avatarImage.src = data.avatar;
  console.log(data);
  userId = data._id;
  })
  .catch((error) => {
    console.log(error);
  })
  
  
  
  editButton.addEventListener("click", () => {
    popupProfile.open();
    popupProfile.isSavingReset();
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    jobInput.value = userData.info;
    formProfile.disableButton();
  });


const popupImage = new PopupWithImage('#popup-image');
popupImage.setEventListeners();

const popupDelete = new PopupDelete('#popup-delete');
popupDelete.setEventListeners();


// Отрисовка карточек


const cardsSection = new Section(
  {
    renderer: (items) => {
      addNewCard(items);
    },
  },
  ".elements"
)


function addNewCard(data) {
  const card = new Card({ 
    items: {
     name: data.name,
      link: data.link,
       likes: data.likes,
         owner: data.owner._id,
          cardId: data._id
    },
    userId: userId,
   handleCardClick: () => {
     popupImage.open(data.name, data.link);
   },
 handleLikeClick: (card, cardId) => {
   if(card.isLiked(userId)) {
     api.deleteCardLike(cardId)
     .then((result) => {
        card.setLikesInfo(result);
     })

   }
   else {
     api.likeCard(cardId)
       .then((result) => {
         card.setLikesInfo(result);
       })
   }
 }, 
handleCardDelete: () => {
 popupDelete.open();
 popupDelete.deleteSubmit(() => {
   api.deleteCard(data._id)
   .then(() => {
     card.deleteCard();
     popupDelete.close();
   })
 })
}, }, 
"#cards", '.elements');
   const cardElement = card.generateCard();
   cardsSection.addItem(cardElement);
}

api.getInitialCards()
  .then((data) => {
  console.log(data);
  const dataReverse = data.reverse();
  cardsSection.renderItems(dataReverse);
})
.catch((error) => {
  console.log(error);
})
// Отрисовка карточек



// Добавление новых карточек

const popupCard = new PopupWithForm('#popup-cards', (data) => {
  popupCard.isSaving();
 api.addNewCards(data)
 .then(data => {
addNewCard(data);
 })
 .catch ((error) => {
  console.log(error);
})
popupCard.close();
console.log(data);
});

popupCard.setEventListeners();

cardAddButton.addEventListener('click', () => {
  popupCard.open();
  popupCard.isSavingReset();
  formCard.disableButton();
});

// Добавление новых карточек


const allSelectors = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_inactive",
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "popup__form-input-error_active",
  fieldsetClass: ".popup__form-set",
};



import { FormValidator } from "../components/FormValidaton.js";

const formAvatar = new FormValidator(allSelectors, avatarForm);
formAvatar.enableValidation();

const formProfile = new FormValidator(allSelectors, profileForm);
formProfile.enableValidation();

const formCard = new FormValidator(allSelectors, cardForm);
formCard.enableValidation();