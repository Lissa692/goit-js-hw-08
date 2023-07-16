import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form  input');
const textareaEl = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';

// console.log(formEl);

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextInput, 1000));
const dataForm = {};

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  const local = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(local);
  localStorage.removeItem(STORAGE_KEY);
}
function onTextInput(evt) {
  dataForm[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));

  // console.log(dataForm);
}

fillTextarea();

function fillTextarea() {
  const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!savedText) return;

  if (savedText.email) {
    emailEl.value = savedText.email;
  }
  if (savedText.message) {
    textareaEl.value = savedText.message;
  }
  console.log(savedText.email);
  console.log(savedText.message);
}
