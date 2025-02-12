'use client';

import clsx from 'clsx';
import { ChangeEvent, ReactNode, useState } from 'react';
import './select.scss';

// ^======================== Select ========================^ //

type SelectProps = {
  bemClass?: string;
  placeholder: string;
  name: string;
  iconPath: string;
  children: ReactNode;
};

function Select(selectProps: SelectProps): React.JSX.Element {

  const { bemClass, placeholder, name, children } = selectProps;

  const [headerText, setHeaderText] = useState(placeholder);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHeaderText(e.target.value);
  };

  return (
    <div
      className={clsx(
        `select ${bemClass}`,
        { '_selected': headerText !== placeholder }
      )}
    >
      <div className='select__header'>
        <p className='select__header-text'>
          {headerText}
        </p>
        <div className='select__header-icon'></div>
      </div>
      <div className='select__body'>
        <ul className='select__list'>
          <li className='select__item'>
            <label className='select__label'>
              <input className='select__input' type='radio' name={name} onChange={handleInputChange} value={'option 1'} />
              option 1
            </label>
          </li>
          <li className='select__item'>
            <label className='select__label'>
              <input className='select__input' type='radio' name={name} onChange={handleInputChange} value={'option 2'} />
              option 2
            </label>
          </li>

          {children}
        </ul>
      </div>
    </div>
  );
}
export default Select;