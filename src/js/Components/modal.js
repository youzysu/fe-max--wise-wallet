import { monthlyHistoryView } from '../MainPage/History/monthlyHistoryView.js';
import { storage } from '../Storage.js';
import { $, createNode, formatMoney } from '../utils.js';

// TODO: Modal 공통 요소만 뽑아서 상위 클래스 만들고 상속하기
export class Modal {
  #element;

  constructor(headerText, targetItem, buttonClassName) {
    this.headerText = headerText;
    this.bodyText = this.makeModalBodyInner(targetItem);
    this.buttonClassName = buttonClassName;
    this.buttonText =
      buttonClassName === 'modal-btn__register' ? '등록' : '삭제';
    this.#element = createNode('div', 'modal');
    this.#element.insertAdjacentHTML(
      'afterbegin',
      this.makeModalInner(
        this.headerText,
        this.bodyText,
        this.buttonClassName,
        this.buttonText
      )
    );
    this.setEvent(targetItem);
  }

  makeModalInner(headerText, bodyText, buttonClassName, buttonText) {
    return `
<div class="modal-inner">
  <div class="modal-header">
    <h5 class="modal-title body-small">
      ${headerText}
    </h5>
  </div>
  <div class="modal-body">
  ${bodyText}
  </div>
  <div class="modal-footer">
    <button
      type="button"
      class="bold-large modal-btn__cancel"
      data-kind="cancel"
      data-dismiss="modal">
      취소
    </button>
    <button type="button" class="bold-large ${buttonClassName}">${buttonText}</button>
  </div>
</div>
    `;
  }

  makeModalBodyInner({ isIncomeMoney, category, memo, payment, money }) {
    return `
    <p class="bold-medium modal-body__detail">
      <span>카테고리: [${isIncomeMoney ? '수입' : '지출'}] ${category}</span>
      <span>내용: ${memo}</span>
      <span>결제수단: ${payment}</span>
      <span>금액: ${formatMoney(money)}</span>
    </p>
      `;
  }

  setEvent(targetItem) {
    this.#element.addEventListener('click', ({ target }) => {
      if (target.matches('.modal-btn__cancel')) {
        $('.modal').remove();
        $('.dim-cover').remove();
      }
      if (target.matches('.modal-btn__delete')) {
        const monthlyHistory = storage.deleteDailyItem(targetItem);
        monthlyHistoryView(monthlyHistory);
        $('.modal').remove();
        $('.dim-cover').remove();
      }
    });
  }

  get element() {
    return this.#element;
  }
}

const modalInputTemplate = (placeholderMessage) => {
  return `
<form action="">
  <input
    type="text"
    id="payment-method"
    class="body-small"
    placeholder="${placeholderMessage}" />
</form>
  `;
};
