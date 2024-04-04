import styles from './styles.module.scss';
import { TextField } from '@/shared/ui/text-field';

export const WelcomeForm = () => {
  return (
    <form className={styles.form}>
      <TextField
        placeholder="Введите имя"
        className={styles.input}
        label="Имя"
      />
      <TextField
        placeholder="Введите фамилию"
        className={styles.input}
        label="Фамилия"
      />
    </form>
  );
};
