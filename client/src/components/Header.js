"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppIcon } from '@/lib/icon';
import AlgoliaSearchBar from '@/components/AlgoliaSearchBar';
import { COMPANY_INFO, CONTACT_INFO, TYRE_CATEGORIES, NAV_ITEMS } from '@/utils/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [tyresDropdownOpen, setTyresDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setTyresDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setTyresDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Get tyres dropdown items from constants
  const tyreCategories = TYRE_CATEGORIES.map(category => ({
    name: category.name,
    icon: category.icon,
    description: category.description,
    href: category.href
  }));

  // Get navigation items from constants (excluding tyres as it has special dropdown)
  const navItems = NAV_ITEMS.filter(item => item.id !== 'tyres' && item.id !== 'home');

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mobile-header
          ${scrolled ? 'shadow-sm' : ''}`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 mobile-compact mobile-ultra-compact">
          <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between w-full max-w-7xl mx-auto">

            {/* Section 1: Logo - Left Edge */}
            <div className="flex items-center flex-shrink-0 min-w-0">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-90">
                <div className={`relative flex-shrink-0 mobile-logo-small ${scrolled ? 'w-10 h-10 sm:w-10 sm:h-10' : 'w-12 h-12 sm:w-12 sm:h-12'}`}>
                  <Image
                    src="/vt_logo.png"
                    alt="Shree Caar Wind - Tyres Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="hidden xs:flex sm:flex flex-col min-w-0">
                  <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-foreground leading-tight mobile-text-ultra-small">
                    {COMPANY_INFO.name}
                  </h1>
                  <p className="text-xs text-muted-foreground font-medium hidden sm:block mobile-text-adjust">
                    {COMPANY_INFO.tagline}
                  </p>
                </div>
              </Link>
            </div>

            {/* Section 2: Navigation & Search - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1 max-w-4xl mx-8">
              <div className="flex items-center space-x-8 xl:space-x-12">
                {/* Navigation */}
                <nav className="flex items-center space-x-6 xl:space-x-8" role="navigation">
                  <Link
                    href="/"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground
                      focus:outline-none focus:underline focus:underline-offset-4 whitespace-nowrap"
                  >
                    Home
                  </Link>

                  {/* Tyres Dropdown */}
                  <div className="relative">
                    <button
                      ref={buttonRef}
                      onClick={() => setTyresDropdownOpen(!tyresDropdownOpen)}
                      className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground
                        focus:outline-none focus:underline focus:underline-offset-4 whitespace-nowrap"
                      aria-expanded={tyresDropdownOpen}
                      aria-haspopup="true"
                    >
                      Tyres
                      <AppIcon
                        icon="lucide:chevron-down"
                        className={`ml-1 h-4 w-4 ${tyresDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {tyresDropdownOpen && (
                      <div
                        ref={dropdownRef}
                        className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 rounded-md border bg-popover p-1 text-popover-foreground shadow-md z-50"
                      >
                        {tyreCategories.map((category) => (
                          <Link
                            key={category.name}
                            href={`/tyres${category.href}`}
                            className="flex items-start rounded-sm px-3 py-3 text-sm hover:bg-accent hover:text-accent-foreground
                              focus:bg-accent focus:text-accent-foreground focus:outline-none"
                            onClick={() => setTyresDropdownOpen(false)}
                          >
                            <AppIcon
                              icon={category.icon}
                              className="mr-3 h-5 w-5 mt-0.5 flex-shrink-0"
                            />
                            <div className="min-w-0">
                              <div className="font-medium text-sm">{category.name}</div>
                              <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                {category.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground
                        focus:outline-none focus:underline focus:underline-offset-4 whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Search Bar */}
                <div className="w-full max-w-sm">
                  <div className="relative">
                    <AlgoliaSearchBar
                      width="w-full"
                      containerClass="relative"
                      mobileFullWidth={false}
                    />

                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: CTA - Right Edge */}
            <div className="flex items-center justify-end space-x-2 sm:space-x-3 flex-shrink-0">
              {/* Book Now Button - Desktop */}
              <div className="hidden md:block">
                <a href={`tel:${CONTACT_INFO.primaryContact.phone}`}>
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium
                    bg-primary text-primary-foreground hover:bg-primary/90
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                    px-3 lg:px-4 xl:px-6 py-2 h-9 lg:h-10 whitespace-nowrap shadow-sm mobile-text-adjust">
                    Book Now
                  </button>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="inline-flex items-center justify-center rounded-md p-2 lg:hidden
                  bg-card border border-border hover:bg-accent hover:text-accent-foreground
                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary
                  mobile-touch-target shadow-sm"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setTyresDropdownOpen(false);
                }}
                aria-expanded={isMenuOpen}
                aria-label="Toggle mobile menu"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <AppIcon icon="lucide:x" className="w-5 h-5" />
                ) : (
                  <AppIcon icon="lucide:menu" className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background w-full mobile-menu-content">
            <div className="w-full px-4 sm:px-6 py-4 mobile-compact mobile-ultra-compact">
              <div className="space-y-4 w-full max-w-md mx-auto">
                {/* Enhanced Search Bar - Mobile - Centered */}
                <div className="w-full">
                  <div className="relative">
                    <AlgoliaSearchBar
                      width="w-full"
                      containerClass="relative"
                      mobileFullWidth={true}
                    />
                  </div>
                </div>

                {/* Navigation Links - Centered */}
                <nav className="space-y-3 text-center" role="navigation">
                  <Link
                    href="/"
                    className="block text-base font-medium text-foreground hover:text-primary
                      focus:outline-none focus:text-primary py-2 mobile-touch-target mobile-menu-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>

                  {/* Tyre Categories - Centered */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 text-center mobile-text-adjust">
                      Tyre Categories
                    </h3>
                    <div className="space-y-1">
                      {tyreCategories.map((category) => (
                        <Link
                          key={category.name}
                          href={`/tyres${category.href}`}
                          className="flex items-center rounded-md p-3 hover:bg-accent hover:text-accent-foreground
                            focus:bg-accent focus:text-accent-foreground focus:outline-none
                            mobile-touch-target mobile-menu-item w-full text-left"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <AppIcon
                            icon={category.icon}
                            className="mr-3 h-4 w-4 flex-shrink-0"
                          />
                          <div className="min-w-0">
                            <div className="font-medium text-sm mobile-text-adjust">{category.name}</div>
                            <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1 mobile-text-adjust">
                              {category.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Other Navigation Items - Centered */}
                  <div className="space-y-1 text-center pt-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-base font-medium text-foreground hover:text-primary
                          focus:outline-none focus:text-primary py-2 mobile-touch-target mobile-menu-item"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Mobile Section 3: CTA - Centered */}
                <div className="pt-3 border-t">
                  <a href={`tel:${CONTACT_INFO.primaryContact.phone}`} className="block">
                    <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-semibold
                      bg-primary text-primary-foreground hover:bg-primary/90
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                      px-4 py-3 mobile-touch-target mobile-menu-item shadow-sm">
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className={`${scrolled ? 'h-14 sm:h-16 lg:h-20' : 'h-14 sm:h-16 lg:h-20'}`} />
    </>
  );
};

export default Header;
