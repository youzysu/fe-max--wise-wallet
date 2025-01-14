export const $ = (selector, element = document) =>
  element.querySelector(selector);

export const $all = (selector, element = document) =>
  element.querySelectorAll(selector);

export const getDateFormat = (currentDate) => {
  const year = currentDate.getFullYear();
  const monthNumber = currentDate.toLocaleString('en-US', { month: 'numeric' });
  const monthChar = currentDate.toLocaleString('en-US', { month: 'long' });
  const date = currentDate.getDate() + '';

  return { year, monthNumber, monthChar, date };
};

export const toggleActiveClass = (nodeName) =>
  nodeName.classList.toggle('active');

export const createNode = (tagName, className) => {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
};

export const formatMoney = (money) => Number(money).toLocaleString('ko-KR');

export const makeDimCover = () => {
  const dimCover = createNode('div', 'dim-cover');
  const $body = $('body');
  $body.appendChild(dimCover);
};
