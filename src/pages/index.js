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

const popupAvatar = new PopupWithForm('#popup-avatar', submitAvatarHandler);

function submitAvatarHandler(data) {
  api.setAvatar(data.link)
  .then( () => {
    avatarImage.src = data.link;
    popupAvatar.close();
    popupAvatar.isSaving();
  }) 
}

popupAvatar.setEventListeners();

avatarContainer.addEventListener('click', () => {
  popupAvatar.open();
  popupAvatar.isSavingReset();
})

function formSubmitHandler(data) {
  api.setProfileInfo(data.name, data.job)
  .then(() => {
      userInfo.setUserInfo(data);
      popupProfile.close();
      popupProfile.isSaving();
  })
}

const popupProfile = new PopupWithForm('#popup-profile', formSubmitHandler);
popupProfile.setEventListeners();

let userId;
api.getUserInfo()
.then(data => {
profileName.textContent = data.name;
profileProfession.textContent = data.about;
avatarImage.src = data.avatar;
console.log(data);
return userId = data._id;
})





const userInfo = new UserInfo({nameSelector:'.profile__name' , infoSelector:'.profile__profession'});

editButton.addEventListener("click", () => {
  popupProfile.open();
  popupProfile.isSavingReset();
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.info;
});


const popupImage = new PopupWithImage('#popup-image');
popupImage.setEventListeners();


// Отрисовка карточек

const popupDelete = new PopupDelete('#popup-delete');
popupDelete.setEventListeners();

api.getInitialCards()
  .then((data) => {
  console.log(data);
  const cardsSection = new Section(
  {
    items: data,
    renderer: (items) => {
      const card = new Card({ 
         items: {
          name: items.name,
           link: items.link,
            likes: items.likes,
              owner: items.owner._id,
               cardId: items._id
         },
         userId: userId,
        handleCardClick: () => {
          popupImage.open(items.name, items.link);
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
        api.deleteCard(items._id)
        .then(() => {
          card.deleteCard();
        })
        .finally(() => {
          popupDelete.close();
        })
      })
    }, }, 
        "#cards");
      const cardElement = card.generateCard();
      cardsSection.addItem(cardElement);
    },
  },
  ".elements"
)
cardsSection.renderItems();
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
   handleCardDelete: () => {
    popupDelete.open();
    popupDelete.deleteSubmit(() => {
      api.deleteCard(data._id)
      .then(() => {
        card.deleteCard();
      })
      .finally(() => {
        popupDelete.close();
      })
    })
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
  }, }, 
   "#cards", '.elements');
   const cardElement = card.generateCard();
    card.addItem(cardElement);
 })
popupCard.close();
console.log(data);
});

popupCard.setEventListeners();

cardAddButton.addEventListener('click', () => {
  popupCard.open();
  popupCard.isSavingReset();
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

function formValidation(selectors, formElement) {
  const form = new FormValidator(selectors, formElement);
  form.enableValidation();
}

formValidation(allSelectors, cardForm);

formValidation(allSelectors, profileForm);

formValidation(allSelectors, avatarForm);

