'use client';

import React from 'react';
import { useModal } from '@/context/ModalContext';
import { ArrowRight } from 'lucide-react';

interface ModalTriggerButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'teal' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  withArrow?: boolean;
  modalTitle?: string;
  modalSubtitle?: string;
}

export const ModalTriggerButton: React.FC<ModalTriggerButtonProps> = ({
  children = 'Get in Touch',
  variant = 'teal',
  size = 'md',
  className = '',
  withArrow = false,
  modalTitle,
  modalSubtitle,
}) => {
  const { openModal } = useModal();

  const baseStyles =
    'inline-flex items-center justify-center font-sans font-bold transition-all duration-300 cursor-pointer group rounded-full';

  const variants = {
    teal: 'bg-[#20B2AA] text-white hover:bg-[#002D62] shadow-md',
    primary: 'bg-[#002D62] text-white hover:bg-[#20B2AA] shadow-md',
    outline: 'bg-transparent text-[#002D62] border-2 border-[#002D62] hover:bg-[#002D62] hover:text-white',
    white: 'bg-white text-[#002D62] hover:bg-[#20B2AA] hover:text-white shadow-md',
  };

  const sizes = {
    sm: 'text-xs px-5 py-2',
    md: 'text-sm px-7 py-3',
    lg: 'text-base px-9 py-3.5',
  };

  return (
    <button
      type="button"
      onClick={() => openModal(modalTitle, modalSubtitle)}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};
