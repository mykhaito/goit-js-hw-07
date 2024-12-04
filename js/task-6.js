function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector('#boxes');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

function createBoxes(amount) {
  destroyBoxes();
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const divEach = document.createElement('div');
    divEach.style.width = `${size}px`;
    divEach.style.height = `${size}px`;
    divEach.style.backgroundColor = getRandomHexColor();
    boxes.append(divEach);
    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

destroy.addEventListener('click', destroyBoxes);

create.addEventListener('click', () => {
  const amount = parseInt(input.value.trim(), 10);
  if (amount < 1 || amount > 100) {
    alert('Try with valid num');
    return;
  }
  createBoxes(amount);
  input.value = '';
});
