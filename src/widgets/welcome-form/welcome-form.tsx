import { observer } from 'mobx-react';
import type { FormEventHandler } from 'react';
import styles from './styles.module.scss';
import { welcomeFormModel } from './model/welcome-form.model';
import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';
import { Modal } from '@/shared/ui/modal';
import { Title } from '@/shared/ui/title';

export const WelcomeForm = observer(() => {
  const formSubmitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    welcomeFormModel.submitForm();
  };

  return (
    <div className={styles.container}>
      <Title className={styles.title}>Введите ваши данные</Title>
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <TextField
          required
          value={welcomeFormModel.name}
          onChange={(e) => welcomeFormModel.changeName(e.target.value)}
          placeholder="Введите имя"
          className={styles.input}
          label="Имя"
        />
        <TextField
          required
          value={welcomeFormModel.surname}
          onChange={(e) => welcomeFormModel.changeSurname(e.target.value)}
          placeholder="Введите фамилию"
          className={styles.input}
          label="Фамилия"
        />
        <Button type="submit">Готово</Button>
      </form>
      <Modal
        isOpen={welcomeFormModel.isModalOpened}
        close={() => welcomeFormModel.closeModal()}
      >
        <Title>
          Здравствуйте, {welcomeFormModel.name} {welcomeFormModel.surname}
        </Title>
        <Button onClick={() => welcomeFormModel.closeModal()}>Закрыть</Button>
      </Modal>
    </div>
  );
});
