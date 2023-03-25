export const getModalTemplate = (
  headerText,
  bodyHtmlText,
  { buttonKind, buttonText }
) => {
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
        class="bold-large modal-btn"
        data-kind="cancel"
        data-dismiss="modal">
        취소
      </button>
      <button type="button" class="bold-large modal-btn" data-kind="${buttonKind}">${buttonText}</button>
    </div>
  </div>
</div>
`;
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
