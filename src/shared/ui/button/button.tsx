import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <button className={clsx(styles.btnReset, styles.btn, className)} {...rest}>
      {children}
    </button>
  );
};
