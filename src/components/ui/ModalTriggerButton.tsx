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

  // On ink surfaces .btn inverts by itself, so 'white' needs no special case
  const variants = {
    teal: '',
    primary: '',
    outline: 'btn-ghost',
    white: '',
  };

  const sizes = { sm: 'btn-sm', md: '', lg: 'btn-lg' };

  return (
    <button
      type="button"
      onClick={() => openModal(modalTitle, modalSubtitle)}
      className={`btn ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span>{children}</span>
      {withArrow && <ArrowRight />}
    </button>
  );
};
