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

  $dailyItemList.addEventListener('click', fillInputBarCurrentItem);
  return $dailyItemList;
};

const fillInputBarCurrentItem = ({ target }) => {
  if (target.matches('.daily-item__delete-btn')) {
    return;
  }
  const { targetItem, currentItem } = getDailyItem({ target });
  currentItem.classList.add('selected-item');
  fillInputBarDetail(targetItem);
};

const fillInputBarDetail = (targetItem) => {
  const { date, money, memo, payment, category, isIncomeMoney } = targetItem;
  const $inputBarForm = $('.input-bar__form', $('main'));
  const formattedDate = new Date(date)
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, '');
  $inputBarForm.elements.fullDate.value = formattedDate;
  $inputBarForm.elements.money.value = formatMoney(money);
  $inputBarForm.elements.memo.value = memo;
  $inputBarForm.elements.payment.value = payment;
  $inputBarForm.elements.category.value = category;
  $inputBarForm.elements.moneyType.checked = isIncomeMoney ? true : false;
  $inputBarForm.elements.currentItemKey.value = targetItem.uuid;
};

// TODO: 선택된 수입지출 내역이 있는 경우 입력바가 아닌 영역 클릭 시 리셋하기
const resetInputBarUpdate = ({ target }) => {
  const selectedItem = $('.selected-item', $('.monthly-history'));
  if (selectedItem) {
    if (!target.matches('.input-bar__form')) {
      resetInputBar();
      selectedItem.classList.remove('.selected-item');
    }
  }
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

  const $buttonImage = createNode('img', 'daily-item__delete-btn');
  $buttonImage.setAttribute('src', FILE_PATH.dailyItemDeleteBtn);
  $buttonImage.setAttribute('alt', 'delete item button');
  $buttonImage.addEventListener('click', alertDeleteItem);

  $dailyItemDeleteBtn.appendChild($buttonImage);

  return $dailyItemDeleteBtn;
};

const alertDeleteItem = ({ target }) => {
  const { targetItem } = getDailyItem({ target });
  const modalElement = new Modal(
    '아래 내역을 삭제하시겠습니까?',
    targetItem,
    'modal-btn__delete'
  ).element;
  const $main = $('main');
  $main.append(modalElement);
  makeDimCover();
};

const getDailyItem = ({ target }) => {
  const currentItem = target.closest('.daily-item');
  const currentDate = currentItem.closest('.daily-history__list').dataset.date;
  const currentItemUUID = currentItem.dataset.itemId;

  const targetItem = storage.getDailyItem(
    new Date(currentDate),
    currentItemUUID
  );

  return { targetItem, currentItem };
};

const getSelectedItem = () => {
  const selectedItem = $('.selected-item');
  const selectedItemDate = selectedItem.closest('.daily-history__list').dataset
    .date;
  const selectedItemKey = selectedItem.dataset.itemId;

  const storagedItem = storage.getDailyItem(
    new Date(selectedItemDate),
    selectedItemKey
  );
  return storagedItem;
};
