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
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    size += 10;
  }

  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

create.addEventListener('click', () => {
  const amount = parseInt(input.value.trim(), 10);

  if (amount < 1 || amount > 100) {
    alert('Try with valid num');
    return;
  }

  createBoxes(amount);
  input.value = '';
});

destroy.addEventListener('click', destroyBoxes);
