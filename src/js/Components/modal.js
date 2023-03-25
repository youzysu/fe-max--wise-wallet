import { $, createNode } from '../utils.js';

export const getModalTemplate = (
  headerText,
  bodyHtmlText,
  modalBtnClassName
) => {
  const modalBtnText =
    modalBtnClassName === 'modal-btn__register' ? '등록' : '삭제';

  return `
<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-inner">
    <div class="modal-header">
      <h5 class="modal-title body-small">
        ${headerText}
      </h5>
    </div>
    <div class="modal-body">
    ${bodyHtmlText}
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="bold-large modal-btn__cancel"
        data-kind="cancel"
        data-dismiss="modal">
        취소
      </button>
      <button type="button" class="bold-large ${modalBtnClassName}">${modalBtnText}</button>
    </div>
  </div>
</div>
`;
};

export const makeDimCover = () => {
  const dimCover = createNode('div', 'dim-cover');
  const $body = $('body');
  $body.appendChild(dimCover);
};

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
