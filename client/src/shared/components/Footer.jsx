import React from 'react';
import Link from 'next/link';
import { AppIcon } from '@/shared/utils/icon';
import {
  COMPANY_INFO,
  CONTACT_INFO,
  SOCIAL_MEDIA,
  QUICK_LINKS,
  SERVICES
} from '@/shared/utils/constants';

const Footer = () => {
  const quickLinks = QUICK_LINKS;

  const services = SERVICES.all.slice(0, 5); // Take first 5 services

  const contactInfo = [
    {
      icon: 'lucide:phone',
      text: CONTACT_INFO.primaryContact.phoneFormatted,
      href: `tel:${CONTACT_INFO.primaryContact.phone}`
    },
    {
      icon: 'lucide:mail',
      text: CONTACT_INFO.primaryContact.email,
      href: `mailto:${CONTACT_INFO.primaryContact.email}`
    },
    {
      icon: 'lucide:map-pin',
      text: CONTACT_INFO.address.display,
      href: CONTACT_INFO.address.mapUrl
    },
  ];

  const socialLinks = SOCIAL_MEDIA;

  return (
    <footer className="bg-gradient-to-b from-muted to-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300">
              {COMPANY_INFO.name}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted multi-brand tyre dealer in {COMPANY_INFO.location.city}, offering premium tyres from Goodyear, Michelin, Bridgestone, JK Tyre & more since {COMPANY_INFO.yearEstablished}.
            </p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                >
                  <AppIcon
                    icon={social.icon}
                    className="w-5 h-5 transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact) => (
                <li key={contact.text}>
                  <a
                    href={contact.href}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <AppIcon
                      icon={contact.icon}
                      className="w-4.5 h-4.5 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span>{contact.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;