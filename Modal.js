// (ДЗ №10.4): Класс модального окна с параметрами.
export default class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.closeBtn = this.modal.querySelector('.modal__close');
    this.setupEventListner();
  };

  open() {
    this.modal.classList.add('is-open');
  };

  close() {
    this.modal.classList.remove('is-open');
  };

  isOpen() {
    return this.modal.classList.contains('is-open');
  };

  setupEventListner() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => {
        this.close();
      });
    };
  };
};
