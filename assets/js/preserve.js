const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const setForm = () => {
  const storedForm = localStorage.getItem('formInputed');
  const retrieveForm = JSON.parse(storedForm);
  nameInput.value = retrieveForm.fullName;
  emailInput.value = retrieveForm.email;
  messageInput.value = retrieveForm.message;
};

const populateStorage = () => {
  const formInputs = {
    fullName: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('formInputed', JSON.stringify(formInputs));
  setForm();
};
