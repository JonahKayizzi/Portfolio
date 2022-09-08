const form = document.getElementById('contact');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const error = document.getElementById('error');
const errorEmail = document.getElementById('errorEmail');

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.addEventListener('input', () => {
    const isValid = emailRegExp.test(email.value) && email.value === email.value.toLowerCase();

    if(isValid){
        errorEmail.textContent ='';
    }else{
        errorEmail.textContent = 'Email cannot have capital letters';
    }
});