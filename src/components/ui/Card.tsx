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
      className={`reveal bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 transition-all duration-300 ${
        hoverEffect
          ? 'hover:-translate-y-1 hover:shadow-md hover:border-[#002D62]/30'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
