import type { ButtonHTMLAttributes, ReactNode } from 'react';

import './Button.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = ['button', 'button--primary', className].filter(Boolean).join(' ');

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
