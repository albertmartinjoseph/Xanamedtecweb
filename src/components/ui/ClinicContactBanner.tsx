'use client';

import React from 'react';
import { Button } from './Button';
import { useModal } from '@/context/ModalContext';

interface ClinicContactBannerProps {
  onOpenModal?: () => void;
  className?: string;
}

export const ClinicContactBanner: React.FC<ClinicContactBannerProps> = ({
  onOpenModal,
  className = '',
}) => {
  const { openModal } = useModal();

  const handleAction = () => {
    if (onOpenModal) {
      onOpenModal();
    } else {
      openModal(
        'Book Clinical Appointment',
        'Contact our team to locate participating UKAS-accredited partner clinics or arrange your clinical consultation.'
      );
    }
  };

  return (
    <section className={`section band ${className}`}>
      <div className="shell-narrow text-center flex flex-col items-center gap-7">
        <h2 className="h-xl">Find your nearest clinic and book an appointment</h2>
        <Button variant="accent" size="lg" withArrow={true} onClick={handleAction}>
          Book appointment
        </Button>
      </div>
    </section>
  );
};
