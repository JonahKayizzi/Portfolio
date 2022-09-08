const form = document.getElementById('contact');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const error = document.getElementById('error');
const errorEmail = document.getElementById('errorEmail');
const errorName = document.getElementById('errorName');
const errorMessage = document.getElementById('errorMessage');

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.addEventListener('input', () => {
  if (email.value === email.value.toLowerCase()) {
    errorEmail.textContent = '';
  } else {
    errorEmail.textContent = 'Email cannot have capital letters';
  }
});

fullname.addEventListener('input', () => {
  if (fullname.value.length < 30) {
    errorName.textContent = '';
  } else {
    errorName.textContent = 'Full Name must be less than 30 characters';
  }
});

message.addEventListener('input', () => {
    if (message.value.length > 10 && message.value.length < 500) {
      errorMessage.textContent = '';
    } else {
      errorMessage.textContent = 'Messgae should be more than 10 and not exceed 500 characters';
    }
  });