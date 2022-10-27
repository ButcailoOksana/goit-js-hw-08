import throttle from 'lodash.throttle';

const KEY_LOCALSTORAGE = 'feedback-form-state';
const formData = {};

const refs = {
  formBox: document.querySelector('.feedback-form'),
};

refs.formBox.addEventListener('submit', onFormSubmit);
refs.formBox.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormSubmit(e) {
  e.preventDefault();

  const formDataToSend = new FormData(e.currentTarget);
  formDataToSend.forEach((value, name) => {
    formData[name] = value;
  });
  e.currentTarget.reset();
  localStorage.removeItem(KEY_LOCALSTORAGE);
  console.log(formData);
}

function onFormInput(e) {
  formData.email = refs.formBox.email.value;
  formData.message = refs.formBox.message.value;
  localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(formData));
}

function populateForm() {
  const savedMessage = localStorage.getItem(KEY_LOCALSTORAGE);

  if (savedMessage) {
    const { email, message } = JSON.parse(savedMessage);

    refs.formBox.email.value = email;
    refs.formBox.message.value = message;
    formData.email = email;
    formData.message = message;
  }
}
