const fieldEl = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

const onFieldInput = event => {
  userName.textContent = event.currentTarget.value.trim();

  if (!userName.textContent) {
    userName.textContent = 'Anonymous';
  }
};

fieldEl.addEventListener('input', onFieldInput);
