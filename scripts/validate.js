const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('popup__form-input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__form-input-error_active');
  };
  
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__form-input_type_error');
    errorElement.classList.remove('popup__form-input-error_active');
    errorElement.textContent = '';
  };
  
  function hasInvalidInput(inputList) {
    return inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    });
  }
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  
  function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__button-submit_inactive');
    }
    else {
      buttonElement.classList.remove('popup__button-submit_inactive');
    }
  }
  
  
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__form-input'));
    const buttonElement = formElement.querySelector('.popup__button-submit');
     toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
  
      const fieldsetList = Array.from(formElement.querySelectorAll('.popup__form-set'));
  
      fieldsetList.forEach((fieldset) => {
        setEventListeners(fieldset);
      });
    });
  };
  
  enableValidation();
  