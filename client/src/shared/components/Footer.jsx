import React from 'react';
import Link from 'next/link';
import { AppIcon } from '@/shared/utils/icon';
import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Separator } from '@/shared/components/ui/separator';
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
    <footer className="bg-gradient-to-b from-muted/30 to-muted border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300">
              {COMPANY_INFO.name}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted multi-brand tyre dealer in {COMPANY_INFO.location.city}, offering premium tyres from top brands since {COMPANY_INFO.yearEstablished}.
            </p>
            <div className="flex space-x-3 pt-4">
              {socialLinks.filter(social => social.url).map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full border-muted-foreground/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <Link href={social.url} aria-label={social.name}>
                    <AppIcon icon={social.icon} className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.filter(link => link.href).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <AppIcon icon="lucide:chevron-right" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full" />
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.filter(contact => contact.href).map((contact, index) => (
                <li key={index}>
                  <Link
                    href={contact.href}
                    className="flex items-start space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <AppIcon
                        icon={contact.icon}
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm leading-relaxed">{contact.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Badge variant="outline" className="text-xs">
                <AppIcon icon="lucide:clock" className="w-3 h-3 mr-1" />
                Mon-Sun: 9AM-8PM
              </Badge>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Badge variant="secondary" className="text-xs">
              <AppIcon icon="lucide:shield-check" className="w-3 h-3 mr-1" />
              Secure & Trusted
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
