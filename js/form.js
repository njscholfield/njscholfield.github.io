const errorBanner = document.querySelector('#failure');
const successBanner = document.querySelector('#success');
const form = document.querySelector('#contact-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const grecap = document.querySelector('.g-recaptcha');
let passedRecaptcha;

function recaptcha(token) {
  passedRecaptcha = (token) ? true: false;
}

function showBanner(banner) {
  setTimeout(() => banner.classList.remove('hidden'), 500);
  setTimeout(() => banner.classList.add('hidden'), 3000);
}

function sendResponse(e) {
  e.preventDefault();
  if(!passedRecaptcha) {
    grecap.classList.add('red-border');
    return;
  }
  grecap.classList.remove('red-border');
  var body = 'entry.1687361453=' + name.value + '&entry.597865152=' + email.value + '&entry.142010775=' + message.value;
  fetch('https://docs.google.com/forms/d/1TqUYtC2s8Uv5ChXPEqMGm1GZTyGNn0Wto2Mb2biIMHE/formResponse', {
    method: 'POST',
    body: body,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    mode: 'no-cors'
  })
    .then(() => {showBanner(successBanner); form.reset();})
    .catch(() => showBanner(errorBanner));
}

form.addEventListener('submit', sendResponse);
