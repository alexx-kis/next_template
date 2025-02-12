import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';
import './button.scss';

// ^======================== Button ========================^ //

type ButtonProps = {
  className?: string;
  disabled?: boolean;
  active?: boolean;
  href?: string;
  children: ReactNode;
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

function Button(buttonProps: ButtonProps): React.JSX.Element {

  const { className = '', children, disabled = false, active = false, href, onButtonClick, ...attrs } = buttonProps;

  const isInternalLink = href?.startsWith('/');

  const commonProps = {
    className: clsx(
      'button',
      className,
      { active },
    ),
    ...attrs
  };

  if (href) {
    if (isInternalLink) {
      return (
        <Link href={href} {...commonProps}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} {...commonProps} onClick={onButtonClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      {...commonProps}
      disabled={disabled}
      onClick={disabled ? (e) => e.preventDefault() : onButtonClick}
    >
      {children}
    </button>
  );
}
export default Button;