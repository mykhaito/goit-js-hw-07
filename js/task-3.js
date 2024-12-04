const nameInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  let userName = nameInput.value.trim();
  if (userName === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = userName;
  }
});
