import throttle from 'lodash.throttle';

const inputEmailEl = document.querySelector('input');
const textareaMessageEl = document.querySelector('textarea');
const actionFormsEl = document.querySelector('.feedback-form');
const keyLocalStorage = "feedback-form-state";

// console.log(inputEmailEl);
// console.log(textareaMessageEl);
// console.log(actionFormsEl);

inputEmailEl.addEventListener('input', throttle(setLocalStorage, 500));
textareaMessageEl.addEventListener('input', throttle(setLocalStorage, 500));

actionFormsEl.addEventListener('click', localStorageObj);

function localStorageObj(e) {
    e.preventDefault();
    if (!inputEmailEl.value || !textareaMessageEl.value) {
        return;
    }

    localStorage.removeItem(keyLocalStorage);

    console.log({
        email: inputEmailEl.value,
        message: textareaMessageEl.value,
    });

    inputEmailEl.value = '';
    textareaMessageEl.value = '';
};

function setLocalStorage() {
    localStorage.setItem(
        keyLocalStorage,
        JSON.stringify({
            email: inputEmailEl.value,
            message: textareaMessageEl.value,
        })
    )
};

const savedState = localStorage.getItem(keyLocalStorage);
if (savedState) {
    const state = JSON.parse(savedState);
    inputEmailEl.value = state.email;
    textareaMessageEl.value = state.message;
}