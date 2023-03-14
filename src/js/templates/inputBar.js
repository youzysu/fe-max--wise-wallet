export const INPUT_BAR_TEMPLATE = `
<section id="input-bar" class="body-regular">
  <form class="input-bar__form" action="">
    <div class="input-bar__component">
      <label class="bold-small" for="date-input">일자</label>
      <input type="text" name="date" id="date-input" pattern="^\d{8}" />
    </div>

    <div class="input-bar__component">
      <label class="bold-small" for="amount-input">금액</label>
      <div class="input-money-content">
        <input
          type="checkbox"
          name="amount-type-btn"
          id="amount-type-btn" />
        <label for="amount-type-btn"></label>
        <input
          type="text"
          inputmode="numeric"
          name="amount"
          placeholder="0"
          id="amount-input"
          pattern="^\d{15}"
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
        id="memo-input" />
    </div>

    <div class="input-bar__component">
      <label class="bold-small" for="payment-input">결제수단</label>
      <input
        id="payment-input"
        class="dropdown-input body-small"
        placeholder="선택하세요"
        readonly />
      <div class="payment-dropdown">
        <ul class="payment-list body-small">
          <li class="payment-option">
            <span>현금</span
            ><button class="delete-btn">
              <img
                src="./src/assets/icon/closed.svg"
                alt="delete button" />
            </button>
          </li>
          <li class="payment-option">
            <span>신용카드</span
            ><button class="delete-btn">
              <img
                src="./src/assets/icon/closed.svg"
                alt="delete button" />
            </button>
          </li>
          <li class="payment-option"><span>추가하기</span></li>
        </ul>
      </div>
    </div>

    <div class="input-bar__component">
      <label class="bold-small" for="category-input">분류</label>
      <input
        id="category-input"
        class="dropdown-input body-small"
        placeholder="선택하세요"
        readonly />
      <div class="category-dropdown">
        <ul class="expenditure-category body-small">
          <li class="payment-option"><span>생활</span></li>
          <li class="payment-option"><span>식비</span></li>
          <li class="payment-option"><span>교통</span></li>
          <li class="payment-option"><span>쇼핑/뷰티</span></li>
          <li class="payment-option"><span>의료/건강</span></li>
          <li class="payment-option"><span>문화/여가</span></li>
          <li class="payment-option"><span>미분류</span></li>
        </ul>
        <!-- <ul class="income-category body-small">
            <li><span>월급</span></li>
            <li><span>용돈</span></li>
            <li><span>기타 수입</span></li>
          </ul> -->
      </div>
    </div>

    <button
      class="input-bar__component"
      id="submit-btn"
      type="button"
      disabled
      onclick="">
      <img
        src="./src/assets/icon/button-disabled.svg"
        alt="submit button" />
    </button>
  </form>
</section>
`;

export const HISTORY_TEMPLATE = `
<section class="history">
  <div class="total-info">
    <div class="total-info__left body-large">
      <span>전체 내역 </span><span>13</span><span>건</span>
    </div>
    <form action="" class="total-info__right">
      <fieldset class="body-medium">
        <input
          type="checkbox"
          name="total-income"
          id="total-income"
          checked />
        <label for="total-income"
          ><span>수입 </span><span>2,010,580</span></label
        >
        <input
          type="checkbox"
          name="total-expenditure"
          id="total-expenditure"
          checked />
        <label for="total-expenditure"
          ><span>지출 </span><span>798,180</span></label
        >
      </fieldset>
    </form>
  </div>

  <ul class="daily-history">
    <div class="daily-info bold-medium">
      <div class="daily-info__date">
        <span class="daily-info__dateChar">2월 15일</span
        ><span class="daily-info__day">수</span>
      </div>
      <div class="daily-total">
        <span>수입</span>
        <span>2,010,580<span>원</span></span>
        <span>지출</span>
        <span>9,500<span>원</span></span>
      </div>
    </div>
    <li class="daily-item">
      <div class="daily-item__category">
        <span class="bold-medium">문화/여가</span>
      </div>
      <span class="daily-item__body body-medium"
        >스트리밍 서비스 정기 결제</span
      >
      <span class="daily-item__payment body-medium">현대카드</span>
      <div class="daily-item__price">
        <span class="body-medium">10,900<span>원</span></span>
        <button type="button" class="daily-item__delete-btn">
          <img
            src="./src/assets/icon/delete-item-icon.svg"
            alt="delete item button" />
        </button>
      </div>
    </li>
  </ul>
</section>
`;
