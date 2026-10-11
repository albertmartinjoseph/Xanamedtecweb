'use client';

import React from 'react';
import { Button } from './Button';
import { MapPin } from 'lucide-react';
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
    <div
      className={`bg-white rounded-[20px] p-8 sm:p-10 border border-gray-100 shadow-[0_4px_24px_-4px_rgba(0,45,98,0.08)] flex flex-col md:flex-row md:items-center justify-between gap-6 ${className}`}
    >
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#20B2AA]/15 text-[#20B2AA] mb-3">
          <MapPin className="w-3.5 h-3.5" />
          Partner Clinics & In-Clinic Appointments
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#002D62] tracking-tight">
          Find Your Nearest Clinic And Schedule An Appointment
        </h3>
        <p className="mt-2 text-sm sm:text-base text-[#606367] leading-relaxed">
          Contact our team directly to locate participating UKAS-accredited partner clinics or arrange your clinical consultation.
        </p>
      </div>

      <div className="shrink-0">
        <Button variant="accent" size="lg" withArrow={true} onClick={handleAction}>
          Book Appointment
        </Button>
      </div>
    </div>
  );
};
