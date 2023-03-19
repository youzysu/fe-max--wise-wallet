export const $ = (selector, element = document) =>
  element.querySelector(selector);

export const $all = (selector) => document.querySelectorAll(selector);

export const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const monthNumber = currentDate.toLocaleString('en-US', { month: 'numeric' });
  const monthChar = currentDate.toLocaleString('en-US', { month: 'long' });
  const date = currentDate.getDate() + '';

  return { year, monthNumber, monthChar, date };
};

export const toggleActiveClass = (nodeName) =>
  nodeName.classList.toggle('active');

export const createNode = (tagName) => document.createElement(tagName);
