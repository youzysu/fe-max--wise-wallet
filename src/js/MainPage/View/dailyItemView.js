import { CLASSNAME, FILE_PATH, MONEY_TYPE, TAG_NAME } from '../../constant.js';
import { createNode, formatMoney } from '../../utils.js';

export const dailyItemView = (dailyItem) => {
  const { uuid, category, memo, payment, money, isIncomeMoney } = dailyItem;

  const $dailyItemList = createNode(TAG_NAME.li);
  $dailyItemList.className = CLASSNAME.dailyItem;
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
  $dailyItemCategory.className = CLASSNAME.dailyItemCategory;

  $dailyItemCategory.dataset.category = category;
  $dailyItemCategory.textContent = category;

  return $dailyItemCategory;
};

const makeDailyItemMemo = (memo) => {
  const $dailyItemMemo = createNode(TAG_NAME.span);
  $dailyItemMemo.className = CLASSNAME.dailyItemMemo;
  $dailyItemMemo.textContent = memo;

  return $dailyItemMemo;
};

const makeDailyItemPayment = (payment) => {
  const $dailyItemPayment = createNode(TAG_NAME.span);
  $dailyItemPayment.className = CLASSNAME.dailyItemPayment;
  $dailyItemPayment.textContent = payment;

  return $dailyItemPayment;
};

const makeDailyItemMoney = (money, isIncomeMoney) => {
  const $dailyItemMoney = createNode(TAG_NAME.div);
  $dailyItemMoney.className = CLASSNAME.dailyItemMoney;
  const dataMoneyType = isIncomeMoney ? MONEY_TYPE.income : MONEY_TYPE.expense;
  $dailyItemMoney.dataset.moneytype = dataMoneyType;

  const $dailyItemMoneyValue = createNode(TAG_NAME.span);
  const formatMoneyValue = `${isIncomeMoney ? '' : '-'}${formatMoney(money)}원`;
  $dailyItemMoneyValue.textContent = formatMoneyValue;

  const $dailyItemDeleteBtn = makeDailyItemDeleteBtn();
  $dailyItemMoney.append($dailyItemMoneyValue, $dailyItemDeleteBtn);

  return $dailyItemMoney;
};

const makeDailyItemDeleteBtn = () => {
  const $dailyItemDeleteBtn = createNode(TAG_NAME.button);
  $dailyItemDeleteBtn.className = CLASSNAME.dailyItemDeleteBtn;
  $dailyItemDeleteBtn.setAttribute('type', TAG_NAME.button);

  const $buttonImage = createNode('img');
  $buttonImage.setAttribute('src', FILE_PATH.dailyItemDeleteBtn);
  $buttonImage.setAttribute('alt', 'delete item button');

  $dailyItemDeleteBtn.appendChild($buttonImage);

  return $dailyItemDeleteBtn;
};
