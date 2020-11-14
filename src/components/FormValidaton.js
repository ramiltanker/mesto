export class FormValidator {
  constructor(selectors, formElement) {
    this._selectors = selectors;
    this._formElement = formElement;  
    this._button = formElement.querySelector('.popup__button-submit');
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._selectors.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._selectors.errorClass);
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._selectors.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._selectors.errorClass);
  }

  _hasInvalidInput(inputList) {
    return inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._selectors.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._selectors.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _setEventListeners(formElement) {
    const buttonElement = formElement.querySelector(
      this._selectors.submitButtonSelector
    );

    const inputList = Array.from(
      formElement.querySelectorAll(this._selectors.inputSelector)
    );

    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners(this._formElement);
  }

  disableButton() {
    this._button.classList.add(this._selectors.inactiveButtonClass);
    this._button.disabled = 'true';
  }
  }

