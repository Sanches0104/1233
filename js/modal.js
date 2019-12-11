const refs = {
  openModalBtn: document.querySelector ('button[data-action="open-modal"]'),
  closeModalBtn: document.querySelector (
    '.close-btn[data-action="close-modal"]'
  ),
  modal: document.querySelector ('.js-modal-backdrop'),
};

const openModal = () => {
  refs.modal.classList.remove ('modal-hidden');
};
const closeModal = () => {
  refs.modal.classList.add ('modal-hidden');
};
const closeModalBackdrop = ({target}) => {
  if (target !== event.currentTarget) return;
  closeModal ();
};
const closeModalEscape = e => {
  if (e.code !== 'Escape') return;
  closeModal ();
};
window.addEventListener ('keyup', closeModalEscape);
refs.modal.addEventListener ('click', closeModalBackdrop);
refs.openModalBtn.addEventListener ('click', openModal);
refs.closeModalBtn.addEventListener ('click', closeModal);
