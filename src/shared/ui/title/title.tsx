import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

type TitleProps = HTMLAttributes<HTMLHeadingElement>;

export const Title = ({ className, children, ...rest }: TitleProps) => {
  return (
    <h1 className={clsx(styles.title, className)} {...rest}>
      {children}
    </h1>
  );
};
