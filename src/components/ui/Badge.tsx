import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'navy' | 'light';
  withDot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'teal',
  withDot = true,
  className = '',
}) => {
  const variants = {
    teal: 'bg-[#20B2AA]/15 text-[#20B2AA] border border-[#20B2AA]/30',
    navy: 'bg-[#002D62]/10 text-[#002D62] border border-[#002D62]/20',
    light: 'bg-white/10 text-brand-teal-300 border border-white/20',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-xs uppercase tracking-wider ${variants[variant]} ${className}`}
    >
      {withDot && (
        <span className="relative flex h-2 w-2">
          <span className="hidden"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#20B2AA]"></span>
        </span>
      )}
      {children}
    </span>
  );
};
