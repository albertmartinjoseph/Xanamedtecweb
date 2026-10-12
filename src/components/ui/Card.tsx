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
      className={`border border-line p-6 sm:p-8 transition-colors duration-300 ${
 hoverEffect
 ?'hover:border-fg'
 :''
 } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
