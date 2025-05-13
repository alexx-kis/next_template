'use client';

import { OpenElement } from '@/constants/const';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { removeSelectedVacancy } from '@/store/application-process';
import { removeSelectedService, removeSelectedTariff } from '@/store/brief-process';
import { closeElement, getOpenElement } from '@/store/open-element-process';
import { isEscapeKey } from '@/utils/utils';
import clsx from 'clsx';
import { useEffect } from 'react';
import './overlay.scss';

// ^======================== Overlay ========================^ //

function Overlay(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const openElement = useAppSelector(getOpenElement);

  const onEscKeydown = (e: KeyboardEvent) => {
    if (isEscapeKey(e)) {
      dispatch(closeElement());
      if (openElement === OpenElement.BriefModal) {
        dispatch(removeSelectedService());
        dispatch(removeSelectedTariff());
      }
      if (openElement === OpenElement.ApplicationModal) {
        dispatch(removeSelectedVacancy());
      }
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
    dispatch(closeElement());
    if (openElement === OpenElement.BriefModal) {
      dispatch(removeSelectedService());
      dispatch(removeSelectedTariff());
    }
    if (openElement === OpenElement.ApplicationModal) {
      dispatch(removeSelectedVacancy());
    }
  };

  return (
    <div
      className={clsx(
        'overlay',
        { '_visible': openElement }
      )}
      onClick={handleOverlayClick}
    ></div>
  );
}
export default Overlay;