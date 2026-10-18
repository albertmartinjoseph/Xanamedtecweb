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
      className={`bg-white dark:bg-[#0c1626] rounded-[20px] border border-gray-100 dark:border-white/10 shadow-[0_4px_20px_-4px_rgba(0,45,98,0.06)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)] p-6 transition-all duration-300 ${
        hoverEffect
          ? 'hover:-translate-y-1 hover:shadow-[0_12px_28px_-6px_rgba(0,45,98,0.12)] dark:hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.6)] hover:border-[#20B2AA]/30 dark:hover:border-[#20B2AA]/50'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
