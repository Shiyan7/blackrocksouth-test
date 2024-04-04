import { action, makeObservable, observable } from 'mobx';

export class WelcomeFormModel {
  name = '';
  surname = '';
  isModalOpened = false;

  constructor() {
    makeObservable(this, {
      name: observable,
      surname: observable,
      isModalOpened: observable,
      changeName: action,
      changeSurname: action,
      submitForm: action,
      closeModal: action,
    });
  }

  changeName(newName: string) {
    this.name = newName;
  }

  changeSurname(newSurname: string) {
    this.surname = newSurname;
  }

  submitForm() {
    this.isModalOpened = true;
  }

  closeModal() {
    this.name = '';
    this.surname = '';
    this.isModalOpened = false;
  }
}

export const welcomeFormModel = new WelcomeFormModel();
