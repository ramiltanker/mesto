const allSelectors = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_inactive",
  inputErrorClass: "popup__form-input_type_error",
  errorClass: "popup__form-input-error_active",
  fieldsetClass: ".popup__form-set",
};

const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  allClasses
) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(allClasses.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(allClasses.errorClass);
};

const hideInputError = (formElement, inputElement, allClasses) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(allClasses.inputErrorClass);
  errorElement.classList.remove(allClasses.errorClass);
  errorElement.textContent = "";
};

function hasInvalidInput(inputList) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
}

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      allSelectors
    );
  } else {
    hideInputError(formElement, inputElement, allSelectors);
  }
};

function toggleButtonState(inputList, buttonElement, allClasses) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(allClasses.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(allClasses.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

const setEventListeners = (formElement, allClasses) => {
  const inputList = Array.from(
    formElement.querySelectorAll(allClasses.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    allClasses.submitButtonSelector
  );
  toggleButtonState(inputList, buttonElement, allSelectors);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement, allSelectors);
    });
  });
};

const enableValidation = (allClasses) => {
  const formList = Array.from(
    document.querySelectorAll(allClasses.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(
      formElement.querySelectorAll(allClasses.fieldsetClass)
    );

    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset, allSelectors);
    });
  });
};

enableValidation(allSelectors);
