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
    'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group';

  const variants = {
    // Primary Navy Pill CTA: #002D62 -> hover #20B2AA
    primary:
      'bg-[#002D62] text-white border border-[#002D62] hover:bg-[#20B2AA] hover:border-[#20B2AA] rounded-[24px] shadow-sm',
    // Accent Teal Pill CTA: #20B2AA -> hover #002D62
    accent:
      'bg-[#20B2AA] text-white font-bold border-none hover:bg-[#002D62] rounded-[40px] shadow-sm',
    // Form Submit Button: #20B2AA -> hover #002D62, radius 20px
    submit:
      'bg-[#20B2AA] text-white font-semibold hover:bg-[#002D62] rounded-[20px] shadow-sm',
    // Outline Button
    outline:
      'bg-transparent text-[#002D62] border border-[#002D62] hover:bg-[#002D62] hover:text-white rounded-[24px]',
    // White Button for dark hero
    white:
      'bg-white text-[#002D62] font-semibold hover:bg-[#20B2AA] hover:text-white rounded-[24px] shadow-sm',
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
