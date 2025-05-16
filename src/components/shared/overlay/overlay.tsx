'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { isEscapeKey } from '@/utils/utils';
import clsx from 'clsx';
import { useEffect } from 'react';
import './overlay.scss';
import { getOpenElement, dropOpenElement } from '@/store/open-element-process';

// ^======================== Overlay ========================^ //

function Overlay(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const openElement = useAppSelector(getOpenElement);

  const onEscKeydown = (e: KeyboardEvent) => {
    if (isEscapeKey(e)) {
      dispatch(dropOpenElement());
      document.removeEventListener('keydown', onEscKeydown);
    }
  };

  useEffect(() => {
    if (openElement) {
      document.addEventListener('keydown', onEscKeydown);
    }

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    };
  });

  const handleOverlayClick = () => {
    dispatch(dropOpenElement());
  };

  return (
    <div
      className={clsx(
        'overlay',
        { '_visible': openElement }
      )}
      onClick={handleOverlayClick}
    />
  );
}
export default Overlay;