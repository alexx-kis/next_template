import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode } from 'react';
import './modal.scss';

// ^======================== Modal ========================^ //

type ModalProps = {
  className: string;
  children: ReactNode;
  isModalOpen: boolean;
  crossSrc?: string;
  onModalCloseButtonClick?: () => void;
};

function Modal(modalProps: ModalProps): React.JSX.Element {

  const { className, children, crossSrc, isModalOpen, onModalCloseButtonClick } = modalProps;

  return (
    <dialog
      className={clsx(
        `${className} modal`,
        { '_open': isModalOpen }
      )}
    >

      <button
        className='modal__close-button'
        onClick={onModalCloseButtonClick}
      >
        {crossSrc &&
          <Image
            src={crossSrc}
            alt=''
            width={40}
            height={40}
          />}
      </button>

      {children}

    </dialog>
  );
}
export default Modal;