import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'teal' | 'navy' | 'light';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeVariant = 'teal',
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {badge && (
        <div className="mb-3">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-sans leading-tight ${
          light ? 'text-white' : 'text-[#002D62] dark:text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-slate-300' : 'text-[#606367] dark:text-slate-300'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
