import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';
import './button.scss';

// ^======================== Button ========================^ //

type CommonProps = {
  className?: string;
  active?: boolean;
  children: ReactNode;
};

type ButtonTypeProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkTypeProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    disabled?: never;
  };

type ButtonProps = ButtonTypeProps | LinkTypeProps;

function Button(buttonProps: ButtonProps) {
  
  const { className = '', active = false, children, href, ...props } = buttonProps
  
  const commonProps = {
    className: clsx('button', className, { active }),
  };

  if (href) {
    const isInternalLink = href.startsWith('/');
    return isInternalLink ? (
      <Link href={href} {...commonProps} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    ) : (
      <a href={href} {...commonProps} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button {...commonProps} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
export default Button;