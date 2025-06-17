import { OpenElement } from '@/constants/const';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { dropOpenElement, getOpenElements } from '@/store/open-element-process';
import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode } from 'react';
import './modal.scss';

// ^======================== Modal ========================^ //

type ModalProps = {
  className: string;
  name: OpenElement;
  children: ReactNode;
  closeButtonIconSrc?: string;
  onCloseButtonClick?: () => void;
};

function Modal(modalProps: ModalProps): React.JSX.Element {

  const { className, name, children, closeButtonIconSrc, onCloseButtonClick } = modalProps;
  const openElements = useAppSelector(getOpenElements);
  const isModalOpen = openElements.includes(name);
  const dispatch = useAppDispatch();

  const handleCloseButtonClick = () => {
    dispatch(dropOpenElement(name));
    onCloseButtonClick?.();
  };

  return (
    <dialog
      className={clsx(
        `${className} modal`,
        { '_open': isModalOpen }
      )}
    >
      {closeButtonIconSrc && (
        <button
          className='modal__close-button'
          onClick={handleCloseButtonClick}
        >
          <Image
            src={closeButtonIconSrc}
            alt=''
            width={40}
            height={40}
          />
        </button>
      )}
      {children}
    </dialog>
  );
}
export default Modal;