"use client";

import React from 'react';
import { AppIcon } from '@/lib/icon';
import { CONTACT_INFO } from '@/utils/constants';

const FloatingContact = () => {
  const phoneNumber = CONTACT_INFO.primaryContact.phone;
  const phoneRaw = CONTACT_INFO.primaryContact.phoneRaw;
  const mapUrl = CONTACT_INFO.address.mapUrl;

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneRaw}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDirections = () => {
    window.open(mapUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3 md:gap-4">
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center w-14 h-14 md:w-14 md:h-14 bg-card text-primary ring-1 ring-border rounded-full shadow-lg shadow-border/50 active:bg-accent transition-all duration-300 hover:shadow-xl hover:shadow-border/70 hover:scale-105 group relative md:hover:w-auto md:hover:px-8"
        aria-label="Call us"
      >
        <AppIcon
          icon="lucide:phone"
          className="w-6 h-6 md:w-6 md:h-6"
          style={{ animation: 'pulse 2s ease-in-out infinite' }}
        />
        <span className="absolute left-16 text-base font-medium whitespace-nowrap bg-card text-primary px-3 py-2 rounded-lg opacity-0 invisible -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 md:static md:bg-transparent md:p-0 md:text-inherit md:opacity-0 md:visible md:translate-x-0 md:max-w-0 md:overflow-hidden md:group-hover:max-w-xs md:group-hover:opacity-100 md:group-hover:ml-3">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="flex items-center justify-center w-14 h-14 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/20 active:bg-[#128C7E] transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 hover:scale-105 group relative md:hover:w-auto md:hover:px-8"
        aria-label="WhatsApp chat"
      >
        <AppIcon
          icon="lucide:message-circle"
          className="w-6 h-6 md:w-6 md:h-6"
          style={{ animation: 'pulse 2s ease-in-out infinite' }}
        />
        <span className="absolute left-16 text-base font-medium whitespace-nowrap bg-[#25D366] text-white px-3 py-2 rounded-lg opacity-0 invisible -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 md:static md:bg-transparent md:p-0 md:text-inherit md:opacity-0 md:visible md:translate-x-0 md:max-w-0 md:overflow-hidden md:group-hover:max-w-xs md:group-hover:opacity-100 md:group-hover:ml-3">
          WhatsApp
        </span>
      </button>

      {/* Directions Button */}
      <button
        onClick={handleDirections}
        className="flex items-center justify-center w-14 h-14 md:w-14 md:h-14 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/20 active:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 group relative md:hover:w-auto md:hover:px-8"
        aria-label="Get directions"
      >
        <AppIcon
          icon="lucide:map-pin"
          className="w-6 h-6 md:w-6 md:h-6"
          style={{ animation: 'pulse 2s ease-in-out infinite' }}
        />
        <span className="absolute left-16 text-base font-medium whitespace-nowrap bg-primary text-primary-foreground px-3 py-2 rounded-lg opacity-0 invisible -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 md:static md:bg-transparent md:p-0 md:text-inherit md:opacity-0 md:visible md:translate-x-0 md:max-w-0 md:overflow-hidden md:group-hover:max-w-xs md:group-hover:opacity-100 md:group-hover:ml-3">
          Get Directions
        </span>
      </button>
    </div>
  );
};

export default FloatingContact;