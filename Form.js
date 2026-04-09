export default class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.formReset();
  };

  getValues() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData);
  };

  formValidity() {
    return this.form.checkValidity();
  };

  formReset() {
    this.form.reset();
  }
};