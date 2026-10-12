import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'submit' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className = '',
  children,
  ...props
}) => {
  const variants = {
    primary: '',
    accent: '',
    submit: '',
    outline: 'btn-ghost',
    white: '',
  };

  const sizes = { sm: 'btn-sm', md: '', lg: 'btn-lg' };

  return (
    <button
      className={`btn ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {withArrow && <ArrowRight />}
    </button>
  );
};
