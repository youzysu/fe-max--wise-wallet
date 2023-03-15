import { init } from './init.js';
import { $, $all, toggleActiveClass } from './utils.js';

function App() {
  init();

  const $inputBarForm = $('.input-bar__form');
  $inputBarForm.addEventListener('submit', (e) => e.preventDefault());

  const $paymentInput = $('#payment-input');
  const $categoryInput = $('#category-input');
  handleDropdownClick($paymentInput);
  handleDropdownClick($categoryInput);

  handleOptionClick('.input-bar__dropdown');
}

const handleDropdownClick = (element) => {
  element.addEventListener('click', ({ target }) => {
    const dropdown = target.nextElementSibling;
    toggleActiveClass(dropdown);
  });
};

const handleOptionClick = (dropdownClassName) => {
  const $dropdowns = $all(dropdownClassName);
  $dropdowns.forEach((el) => {
    el.addEventListener('click', ({ target }) => {
      const spanText = target.textContent;
      const input = target.closest(dropdownClassName).previousElementSibling;
      input.value = spanText;
      toggleActiveClass(el);
    });
  });
};

App();
