'use client';

import clsx from 'clsx';
import Image from 'next/image';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './select.scss';

// ^======================== Select ========================^ //

type SelectProps = {
  bemClass?: string;
  placeholder: string;
  name: string;
  iconPath: string;
  iconWidth: number;
  iconHeight: number;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

function Select(selectProps: SelectProps): React.JSX.Element {
  const { bemClass, placeholder, name, iconPath, iconWidth, iconHeight, options, value, onChange } = selectProps;

  const [headerText, setHeaderText] = useState(placeholder);
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHeaderText(e.target.value);
    onChange(e.target.value);
    setIsOpen(false);
  };

  const handleHeaderClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleDocumentClick);
    }

    return () => document.removeEventListener('click', handleDocumentClick);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && bodyRef.current) {
      bodyRef.current.style.maxHeight = `${bodyRef.current.scrollHeight}px`;
    } else if (bodyRef.current) {
      bodyRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div
      ref={selectRef}
      className={clsx(
        `select ${bemClass}`,
        { '_selected': headerText !== placeholder },
        { '_open': isOpen }
      )}
    >
      <div
        className="select__header"
        onClick={handleHeaderClick}
      >
        <p className="select__header-text">
          {headerText}
        </p>
        <div className="select__header-icon">
          <Image
            src={iconPath}
            alt=""
            width={iconWidth}
            height={iconHeight}
          />
        </div>
      </div>
      <div
        className="select__body"
        ref={bodyRef}
      >
        <ul className="select__list">
          {
            options.map((option) => (
              <li key={option} className="select__item">
                <label className="select__label">
                  <input
                    className="select__input"
                    type="radio"
                    name={name}
                    onChange={handleInputChange}
                    value={option}
                    checked={value === option}
                  />
                  {option}
                </label>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Select;