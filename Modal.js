// (ДЗ №10.4): Класс модального окна с параметрами.
export class Modal {
  constructor(id) {
    this.modalElement = document.getElementById(id);
    this.listnerBtnClose();
  };

  open() {
    this.modalElement.style.display = 'flex';
    this.modalElement.style.opacity = 1;
  };

  close() {
    this.modalElement.style.display = 'none';
    this.modalElement.style.opacity = 0;
  };

  checkOpenModal() {

  };

  listnerBtnClose() {
    this.modalElement.addEventListener('click', (event) => {
      if (event.target.closest('.modal__close')) {
        this.close();
      };
    });
  };
}

const modal = new Modal('modal-registration-id');

const registrationButton = document.getElementById('registration-button');
registrationButton.addEventListener('click', () => {
  modal.open();
});


