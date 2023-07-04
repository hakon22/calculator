const state = {
  summ: 0,
  discount: 0.8,
}

const checkOption = ({ target }) => {
  const button = target.closest('button');
  const icon = button.querySelector('.bi');
  const calculationBlock = document.getElementById('calculation');
  const oldPrice = calculationBlock.querySelector('.old-price');
  const newPrice = calculationBlock.querySelector('.new-price');

  if (button.classList.contains('active')) {
    button.classList.remove('active');
    icon.classList.remove('bi-check-circle');
    icon.classList.add('bi-plus-circle');
    const count = parseInt(button.querySelector('.text-muted').textContent);
    state.summ -= count;
  } else {
    button.classList.add('active');
    icon.classList.remove('bi-plus-circle');
    icon.classList.add('bi-check-circle', 'animate__heartBeat');
    setTimeout(() => icon.classList.remove('animate__heartBeat'), 1500);
    const count = parseInt(button.querySelector('.text-muted').textContent);
    state.summ += count;
  }

  oldPrice.textContent = `${state.summ} рублей`;
  newPrice.textContent = `${state.summ * state.discount} рублей`;

  if (state.summ > 0) {
    if (calculationBlock.classList.contains('close')) {
      calculationBlock.classList.remove('close');
    }
    calculationBlock.classList.add('open');
  } else {
    calculationBlock.classList.remove('open');
    calculationBlock.classList.add('close');
  }
}

const app = () => {
  const buttons = document.querySelectorAll('.list-group-item');
  buttons.forEach((button) => {
    button.addEventListener('click', checkOption);
  });
}

export default app;
