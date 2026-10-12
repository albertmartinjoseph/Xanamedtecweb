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
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-semibold transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 group';

  const variants = {
    // Primary Navy Pill CTA: #002D62 -> hover #20B2AA
    primary:
      'bg-[#002D62] text-white border border-[#002D62] hover:bg-[#147F79] hover:border-[#147F79] rounded-full',
    // Accent Teal Pill CTA: #20B2AA -> hover #002D62
    accent:
      'bg-[#002D62] text-white font-semibold border-none hover:bg-[#147F79] rounded-full',
    // Form Submit Button: #20B2AA -> hover #002D62, radius 20px
    submit:
      'bg-[#002D62] text-white font-semibold hover:bg-[#147F79] rounded-full',
    // Outline Button
    outline:
      'bg-transparent text-[#002D62] border border-[#002D62] hover:bg-[#002D62] hover:text-white rounded-full',
    // White Button for dark hero
    white:
      'bg-white text-[#002D62] font-semibold hover:bg-[#20B2AA] hover:text-white rounded-full',
  };

  const sizes = {
    sm: 'text-[13px] px-4 py-2',
    md: 'text-[15px] px-7 py-2.5',
    lg: 'text-[16px] px-9 py-3.5',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};
