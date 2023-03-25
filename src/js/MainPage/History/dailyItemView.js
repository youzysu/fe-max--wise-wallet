import { Modal } from '../../Components/Modal.js';
import { storage } from '../../Storage.js';
import { CLASSNAME, FILE_PATH, MONEY_TYPE } from '../../constant.js';
import { $, createNode, formatMoney, makeDimCover } from '../../utils.js';

export const dailyItemView = (dailyItem) => {
  const { uuid, date, category, memo, payment, money, isIncomeMoney } =
    dailyItem;

  const $dailyItemList = createNode('li', CLASSNAME.dailyItem);
  $dailyItemList.dataset.itemId = uuid;

  const $dailyItemCategory = makeDailyItemCategory(category);
  const $dailyItemMemo = makeDailyItemMemo(memo);
  const $dailyItemPayment = makeDailyItemPayment(payment);
  const $dailyItemMoney = makeDailyItemMoney(money, isIncomeMoney);

  $dailyItemList.append(
    $dailyItemCategory,
    $dailyItemMemo,
    $dailyItemPayment,
    $dailyItemMoney
  );

  $dailyItemList.addEventListener('click', updateItem);
  return $dailyItemList;
};

const makeDailyItemCategory = (category) => {
  const $dailyItemCategory = createNode('div', CLASSNAME.dailyItemCategory);

  $dailyItemCategory.dataset.category = category;
  $dailyItemCategory.textContent = category;

  return $dailyItemCategory;
};

const makeDailyItemMemo = (memo) => {
  const $dailyItemMemo = createNode('span', CLASSNAME.dailyItemMemo);
  $dailyItemMemo.textContent = memo;

  return $dailyItemMemo;
};

const makeDailyItemPayment = (payment) => {
  const $dailyItemPayment = createNode('span', CLASSNAME.dailyItemPayment);
  $dailyItemPayment.textContent = payment;

  return $dailyItemPayment;
};

const makeDailyItemMoney = (money, isIncomeMoney) => {
  const $dailyItemMoney = createNode('div', CLASSNAME.dailyItemMoney);
  const dataMoneyType = isIncomeMoney ? MONEY_TYPE.income : MONEY_TYPE.expense;
  $dailyItemMoney.dataset.moneytype = dataMoneyType;

  const $dailyItemMoneyValue = createNode('span');
  const formatMoneyValue = `${isIncomeMoney ? '' : '-'}${formatMoney(money)}원`;
  $dailyItemMoneyValue.textContent = formatMoneyValue;

  const $dailyItemDeleteBtn = makeDailyItemDeleteBtn();
  $dailyItemMoney.append($dailyItemMoneyValue, $dailyItemDeleteBtn);

  return $dailyItemMoney;
};

const makeDailyItemDeleteBtn = () => {
  const $dailyItemDeleteBtn = createNode('button', 'daily-item__delete-btn');
  $dailyItemDeleteBtn.setAttribute('type', 'button');
  $dailyItemDeleteBtn.addEventListener('click', alertDeleteItem);

  const $buttonImage = createNode('img');
  $buttonImage.setAttribute('src', FILE_PATH.dailyItemDeleteBtn);
  $buttonImage.setAttribute('alt', 'delete item button');

  $dailyItemDeleteBtn.appendChild($buttonImage);

  return $dailyItemDeleteBtn;
};

const alertDeleteItem = ({ target }) => {
  const currentItem = target.closest('.daily-item');
  const currentDate = currentItem.closest('.daily-history__list').dataset.date;
  const currentItemUUID = currentItem.dataset.itemId;

  const targetItem = storage.getDailyItem(
    new Date(currentDate),
    currentItemUUID
  );
  const modalElement = new Modal(
    '아래 내역을 삭제하시겠습니까?',
    targetItem,
    'modal-btn__delete'
  ).element;
  const $main = $('main');
  $main.append(modalElement);
  makeDimCover();
};

const updateItem = ({ target }) => {};
