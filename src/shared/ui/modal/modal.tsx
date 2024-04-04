import type { PropsWithChildren } from 'react';
import { Portal } from '../portal';
import { useLockedBody } from './lib/use-locked-body.lib';
import { useEscape } from './lib/use-escape.lib';
import styles from './styles.module.scss';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  close: () => void;
}

export const Modal = ({ children, isOpen, close }: ModalProps) => {
  useLockedBody(isOpen);

  useEscape(close);

  return (
    <Portal rootId="#modal">
      {isOpen ? (
        <div className={styles.root} onClick={close}>
          <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
            {children}
          </div>
        </div>
      ) : null}
    </Portal>
  );
};
