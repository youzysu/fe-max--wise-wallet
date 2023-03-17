const deletePaymentHandler = (element) => {
  element.addEventListener('click', ({ target }) => {
    if (target.className.contains('delete-btn')) {
      // 배경 딤처리
      // 삭제 모달창 띄우기
    }
  });
};

const MODAL_TEMPLAGE = `
<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-inner">
    <div class="modal-header">
      <h5 class="modal-title body-small">
        추가하실 결제수단을 적어주세요.
      </h5>
    </div>
    <div class="modal-body">
      <form action="">
        <input
          type="text"
          id="payment-method"
          class="body-small"
          placeholder="입력하세요" />
      </form>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="bold-large cancel-btn"
        data-dismiss="modal">
        취소
      </button>
      <button type="button" class="bold-large register-btn">등록</button>
    </div>
  </div>
</div>
`;
