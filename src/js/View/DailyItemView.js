import { CLASSLIST, FILE_PATH, MONEY_TYPE, TAG_NAME } from '../constant.js';
import { createNode } from '../utils.js';

export const DailyItemView = (dailyItem) => {
  const { uuid, category, memo, payment, money, isIncomeMoney } = dailyItem;

  const $dailyItemList = createNode(TAG_NAME.li);
  $dailyItemList.setAttribute('class', CLASSLIST.dailyItem);
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
  return $dailyItemList;
};

const makeDailyItemCategory = (category) => {
  const $dailyItemCategory = createNode(TAG_NAME.div);
  $dailyItemCategory.setAttribute('class', CLASSLIST.dailyItemCategory);

  $dailyItemCategory.dataset.category = category;
  $dailyItemCategory.textContent = category;

  return $dailyItemCategory;
};

const makeDailyItemMemo = (memo) => {
  const $dailyItemMemo = createNode(TAG_NAME.span);
  $dailyItemMemo.setAttribute('class', CLASSLIST.dailyItemMemo);
  $dailyItemMemo.textContent = memo;

  return $dailyItemMemo;
};

const makeDailyItemPayment = (payment) => {
  const $dailyItemPayment = createNode(TAG_NAME.span);
  $dailyItemPayment.setAttribute('class', CLASSLIST.dailyItemPayment);
  $dailyItemPayment.textContent = payment;

  return $dailyItemPayment;
};

const makeDailyItemMoney = (money, isIncomeMoney) => {
  const $dailyItemMoney = createNode(TAG_NAME.div);
  $dailyItemMoney.setAttribute('class', CLASSLIST.dailyItemMoney);
  const dataMoneyType = isIncomeMoney ? MONEY_TYPE.income : MONEY_TYPE.expense;
  $dailyItemMoney.dataset.moneytype = dataMoneyType;

  const $dailyItemMoneyValue = createNode(TAG_NAME.span);
  const formatMoneyValue = `${isIncomeMoney ? '' : '-'}${money.toLocaleString(
    'ko-KR'
  )}원`;
  $dailyItemMoneyValue.textContent = formatMoneyValue;

  const $dailyItemDeleteBtn = makeDailyItemDeleteBtn();
  $dailyItemMoney.append($dailyItemMoneyValue, $dailyItemDeleteBtn);

  return $dailyItemMoney;
};

const makeDailyItemDeleteBtn = () => {
  const $dailyItemDeleteBtn = createNode(TAG_NAME.button);
  $dailyItemDeleteBtn.setAttribute('class', CLASSLIST.dailyItemDeleteBtn);
  $dailyItemDeleteBtn.setAttribute('type', TAG_NAME.button);

  const $buttonImage = createNode('img');
  $buttonImage.setAttribute('src', FILE_PATH.dailyItemDeleteBtn);
  $buttonImage.setAttribute('alt', 'delete item button');

  $dailyItemDeleteBtn.appendChild($buttonImage);

  return $dailyItemDeleteBtn;
};
