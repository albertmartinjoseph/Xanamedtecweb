import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`bg-white rounded-[20px] border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,45,98,0.06)] p-6 transition-all duration-300 ${
        hoverEffect
          ? 'hover:-translate-y-1 hover:shadow-[0_12px_28px_-6px_rgba(0,45,98,0.12)] hover:border-[#20B2AA]/30'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
