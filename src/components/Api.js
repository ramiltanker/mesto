export class Api {
  constructor({ address, token, cohort }) {
    this._token = token;
    this._cohort = cohort;
    this._address = address;
  }
    
      getInitialCards() {
          return fetch(`${this._address}/${this._cohort}/cards`, {
            headers: {
              authorization: this._token
            }
          })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
      }
    
    
      addNewCards(data) {
          return fetch(`${this._address}/${this._cohort}/cards`, {
              method: 'POST',
              headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: data.name,
                link: data.link
              }),
          })
          .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
      }




      getUserInfo() {
        return fetch(`${this._address}/${this._cohort}/users/me`, {
          headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
          },
        })
        .then(res => {
          if(res.ok) {
              return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      })
      }

      setProfileInfo(name, about) {
        return fetch(`${this._address}/${this._cohort}/users/me`, {
          method: 'PATCH',
          headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name, 
            about: about
          })
        })

        .then(res => {
          if(res.ok) {
              return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      })
      }


      setAvatar(avatar) {
        return fetch(`${this._address}/${this._cohort}/users/me/avatar`, {
          method: 'PATCH',
          headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            avatar: avatar
          })  
        })
        .then(res => {
          if(res.ok) {
              return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      })
      }

      
      likeCard(cardId) {
        return fetch(`${this._address}/${this._cohort}/cards/likes/${cardId}`, {
          method: 'PUT',
          headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if(res.ok) {
              return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      })
      }

      deleteCardLike(cardId) {
        return fetch(`${this._address}/${this._cohort}/cards/likes/${cardId}`, {
          method: 'DELETE',
          headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if(res.ok) {
              return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      })
      }

      deleteCard(cardId) {
        return fetch(`${this._address}/${this._cohort}/cards/${cardId}`, {
          method: 'DELETE',
          headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if(res.ok) {
              return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      })
      }
      // другие методы работы с API
}