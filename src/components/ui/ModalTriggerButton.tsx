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
    'inline-flex items-center justify-center font-sans font-bold transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 group rounded-full';

  const variants = {
    teal: 'bg-[#002D62] text-white hover:bg-[#147F79]',
    primary: 'bg-[#002D62] text-white hover:bg-[#147F79]',
    outline: 'bg-transparent text-[#002D62] border-2 border-[#002D62] hover:bg-[#002D62] hover:text-white',
    white: 'bg-white text-[#002D62] hover:bg-[#20B2AA] hover:text-white',
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
