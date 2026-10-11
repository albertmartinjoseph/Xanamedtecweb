'use client';

import React, { createContext, useContext, useState } from 'react';
import { GlassModal } from '@/components/ui/GlassModal';

interface ModalContextType {
  openModal: (title?: string, subtitle?: string) => void;
  closeModal: () => void;
  isOpen: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('Get in Touch with Xana Medtec');
  const [subtitle, setSubtitle] = useState('For appointments, clinical support, and international distribution inquiries.');

  const openModal = (customTitle?: unknown, customSubtitle?: unknown) => {
    if (typeof customTitle === 'string' && customTitle.trim().length > 0) {
      setTitle(customTitle);
    } else {
      setTitle('Get in Touch with Xana Medtec');
    }

    if (typeof customSubtitle === 'string' && customSubtitle.trim().length > 0) {
      setSubtitle(customSubtitle);
    } else {
      setSubtitle('For appointments, clinical support, and international distribution inquiries.');
    }

    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      <GlassModal
        isOpen={isOpen}
        onClose={closeModal}
        title={title}
        subtitle={subtitle}
      />
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
