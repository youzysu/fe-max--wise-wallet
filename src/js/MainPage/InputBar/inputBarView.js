import { SELECTOR } from '../../constant.js';
import { $, getDateFormat } from '../../utils.js';

export function inputBarView(currentDate) {
  render();
  initDateInput(currentDate);
}

const render = () => {
  const $main = $('main');
  const inputBarSection = template();
  $main.innerHTML = inputBarSection;
};

export const initDateInput = (currentDate) => {
  const { year, monthNumber, date } = getDateFormat(currentDate);
  const formatMonth = monthNumber.padStart(2, '0');
  const formatDate = date.padStart(2, '0');

  const $dateInput = $(SELECTOR.dateInput);
  $dateInput.value = `${year}${formatMonth}${formatDate}`;
};

const template = () => {
  return `
  <section id="input-bar" class="body-regular">
        <form class="input-bar__form body-small" action="">
          <div class="input-bar__component">
            <label class="bold-small" for="date-input">일자</label>
            <input
              type="text"
              name="fullDate"
              id="date-input"
              title="yyyymmdd 날짜 형식의 8자리 숫자"
              required />
          </div>

          <div class="input-bar__component">
            <label class="bold-small" for="money-input">금액</label>
            <div class="input-money-content">
              <input
                type="checkbox"
                name="moneyType"
                id="money-type-checkbox" />
              <label for="money-type-checkbox"></label>
              <input
                type="text"
                name="money"
                placeholder="0"
                id="money-input"
                required />
              <span class="body-small">원</span>
            </div>
          </div>

          <div class="input-bar__component">
            <label class="bold-small" for="memo-input">내용</label>
            <input
              type="text"
              name="memo"
              placeholder="입력하세요"
              class="body-small"
              id="memo-input"
              required />
          </div>

          <div class="input-bar__component">
            <label class="bold-small" for="payment-input">결제수단</label>
            <input
              id="payment-input"
              class="dropdown-input body-small"
              name="payment"
              placeholder="선택하세요"
              readonly
              required />
            <div class="input-bar__dropdown">
              <ul class="payment-list body-small">
                <li class="input-option">
                  <span>현금</span
                  ><button class="delete-btn" type="button">
                    <img
                      src="./src/assets/icon/closed.svg"
                      alt="delete button" />
                  </button>
                </li>
                <li class="input-option">
                  <span>신용카드</span
                  ><button class="delete-btn" type="button">
                    <img
                      src="./src/assets/icon/closed.svg"
                      alt="delete button" />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div class="input-bar__component">
            <label class="bold-small" for="category-input">분류</label>
            <input
              id="category-input"
              type="text"
              class="dropdown-input body-small"
              placeholder="선택하세요"
              name="category"
              readonly
              required />
            <div class="input-bar__dropdown category-dropdown">
              <ul class="category-list body-small">
                <li class="input-option"><span>생활</span></li>
                <li class="input-option"><span>식비</span></li>
                <li class="input-option"><span>교통</span></li>
                <li class="input-option"><span>쇼핑/뷰티</span></li>
                <li class="input-option"><span>의료/건강</span></li>
                <li class="input-option"><span>문화/여가</span></li>
                <li class="input-option"><span>미분류</span></li>
              </ul>
            </div>
          </div>
          <input
            id="currentItemKey"
            type="text"
            name="currentItemKey"
            readonly
              />
          <button
            class="input-bar__component"
            id="submit-btn"
            type="submit"
            disabled></button>
        </form>
      </section>
  `;
};
