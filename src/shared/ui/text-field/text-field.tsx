import type { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './text-field.module.scss';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextField = ({ label, className, ...rest }: TextFieldProps) => {
  return (
    <label className={clsx(styles.root, className)}>
      <span className={styles.label}>{label}</span>
      <input className={styles.input} {...rest} />
    </label>
  );
};
