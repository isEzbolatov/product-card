export default class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.formReset();
  };

  subscribeForm() {
    const subscribeForm = document.getElementById('email-form');

    subscribeForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log(data);
      subscribeForm.reset();
    })
  };

  getValues() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData);
  };

  formValidity() {
    return this.form.checkValidity();
  };

  encryptionPassword() {
    const passwordInput = this.form.querySelector('[name="password"]');
    const confirmPasswordInput = this.form.querySelector('[name="confirmPassword"]');

    const passwordValue = btoa(passwordInput.value);
    const confirmPasswordValue = btoa(confirmPasswordInput.value);

    return {
      password: passwordValue,
      confirmPassword: confirmPasswordValue,
    }
  };

  formReset() {
    this.form.reset();
  }
};