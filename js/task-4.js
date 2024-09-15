const formEl = document.querySelector('.login-form');
console.log(formEl);

const onFormSubmit = event => {
  event.preventDefault();

  const formData = {
    email: formEl.elements.email.value.trim(),
    password: formEl.elements.password.value.trim(),
  };

  formEl.reset();

  if (!formData.email || !formData.password) {
    alert('All form fields must be filled in');
  } else {
    console.log(formData);
  }
};

formEl.addEventListener('submit', onFormSubmit);
