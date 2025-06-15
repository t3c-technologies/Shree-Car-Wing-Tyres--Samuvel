"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AppIcon } from '@/shared/utils/icon';
import AlgoliaSearchBar from '@/shared/components/AlgoliaSearchBar';
import { ThemeControllerBtn } from '@/shared/components/ThemeControllerBtn';
import { COMPANY_INFO, CONTACT_INFO, TYRE_CATEGORIES, NAV_ITEMS } from '@/shared/utils/constants';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
  const [tyresDropdownOpen, setTyresDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

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
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setTyresDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Get navigation items from constants (excluding tyres and home)
  const navItems = NAV_ITEMS.filter(item => !['tyres', 'home'].includes(item.id));

  const closeMenus = () => {
    setShowMenu(false);
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 300);
    setTyresDropdownOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
    setTyresDropdownOpen(false);
    // Small delay to ensure DOM is ready for animation
    setTimeout(() => {
      setShowMenu(true);
    }, 10);
  };

  return (
    <>
      <nav className="w-full sticky top-0 z-50 border-b bg-background mobile-header shadow-md transition-all duration-300">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 mobile-compact mobile-ultra-compact">
          <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between w-full max-w-7xl mx-auto">

            {/* Logo */}
            <div className="flex items-center flex-shrink-0 min-w-0">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-90">
                <div className="relative flex-shrink-0 mobile-logo-small w-12 h-12 sm:w-12 sm:h-12">
                  <Image
                    src="/vt_logo.png"
                    alt="Shree Caar Wind - Tyres Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground leading-tight">
                    {COMPANY_INFO.name}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium hidden sm:block">
                    {COMPANY_INFO.tagline}
                  </p>
                </div>
              </Link>
            </div>

            {/* Navigation & Search */}
            <div className="hidden lg:flex items-center justify-center flex-1 max-w-4xl mx-8">
              <div className="flex items-center space-x-8 xl:space-x-12">
                <nav className="flex items-center space-x-6 xl:space-x-8">
                  <Link href="/" className="text-sm sm:text-base md:text-lg font-medium text-muted-foreground hover:text-foreground focus:outline-none focus:underline focus:underline-offset-4 whitespace-nowrap">
                    Home
                  </Link>

                  {/* Tyres Dropdown */}
                  <div className="relative">
                    <button
                      ref={buttonRef}
                      onClick={() => setTyresDropdownOpen(!tyresDropdownOpen)}
                      className="flex items-center text-sm sm:text-base md:text-lg font-medium text-muted-foreground hover:text-foreground focus:outline-none focus:underline focus:underline-offset-4 whitespace-nowrap"
                      aria-expanded={tyresDropdownOpen}
                    >
                      Tyres
                      <AppIcon icon="lucide:chevron-down" className={`ml-1 h-4 w-4 ${tyresDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {tyresDropdownOpen && (
                      <div ref={dropdownRef} className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 rounded-md premium-dropdown p-1 text-popover-foreground shadow-md z-50">
                        {TYRE_CATEGORIES.map((category) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            className="flex items-start rounded-sm px-3 py-3 text-sm sm:text-base premium-dropdown-item focus:outline-none"
                            onClick={() => setTyresDropdownOpen(false)}
                          >
                            <AppIcon icon={category.icon} className="mr-3 h-5 w-5 mt-0.5 flex-shrink-0 premium-dropdown-icon" />
                            <div className="min-w-0">
                              <div className="font-medium text-sm sm:text-base premium-dropdown-title">{category.name}</div>
                              <div className="text-xs sm:text-sm mt-1 line-clamp-2 premium-dropdown-description">
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
                      className="text-sm sm:text-base md:text-lg font-medium text-muted-foreground hover:text-foreground focus:outline-none focus:underline focus:underline-offset-4 whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Search Bar */}
                <div className="min-w-0 flex-1 max-w-sm">
                  <AlgoliaSearchBar width="w-full" containerClass="relative" mobileFullWidth={false} />
                </div>
              </div>
            </div>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center justify-end space-x-2 sm:space-x-3 flex-shrink-0">
              <ThemeControllerBtn />

              {/* Book Now Button - Desktop */}
              <div className="hidden md:block">
                <a href={`tel:${CONTACT_INFO.primaryContact.phone}`}>
                  <button className="inline-flex items-center justify-center rounded-md text-sm sm:text-base md:text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring px-3 lg:px-4 xl:px-6 py-2 h-10 whitespace-nowrap shadow-sm">
                    Book Now
                  </button>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="inline-flex items-center justify-center rounded-md lg:hidden bg-card border border-border hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary h-10 w-10 shadow-sm"
                onClick={() => {
                  isMenuOpen ? closeMenus() : openMenu();
                }}
                aria-expanded={isMenuOpen}
                aria-label="Toggle mobile menu"
              >
                <span className="sr-only">Open main menu</span>
                <AppIcon icon={isMenuOpen ? "lucide:x" : "lucide:menu"} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
            <div
              className={`mobile-menu-backdrop lg:hidden transition-opacity duration-300 ${showMenu ? 'opacity-100' : 'opacity-0'
                }`}
              onClick={closeMenus}
              aria-hidden="true"
            />

            <div className={`lg:hidden mobile-menu-content bg-background flex flex-col h-full transform transition-transform duration-300 ease-out ${showMenu ? 'translate-x-0' : 'translate-x-full'
              }`}>
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex-shrink-0">
                <Link href="/" className="flex items-center space-x-2" onClick={closeMenus}>
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <Image src="/vt_logo.png" alt="Shree Caar Wind - Tyres Logo" fill className="object-contain" priority />
                  </div>
                  <h1 className="text-base sm:text-lg md:text-xl font-bold text-foreground leading-tight">{COMPANY_INFO.name}</h1>
                </Link>
                <div className="flex items-center space-x-2">
                  <ThemeControllerBtn />
                  <button
                    className="rounded-md border flex items-center justify-center border-border hover:bg-accent hover:text-accent-foreground mobile-touch-target"
                    onClick={closeMenus}
                    aria-label="Close mobile menu"
                  >
                    <AppIcon icon="lucide:x" className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 mobile-compact mobile-ultra-compact">
                <div className="space-y-3 w-full max-w-md mx-auto">
                  <AlgoliaSearchBar width="w-full" containerClass="relative" mobileFullWidth={true} />

                  <nav className="space-y-2 text-center">
                    <Link href="/" className="block text-base sm:text-lg md:text-xl font-medium text-foreground hover:text-primary focus:outline-none focus:text-primary py-2 mobile-touch-target mobile-menu-item" onClick={closeMenus}>
                      Home
                    </Link>

                    {/* Tyre Categories */}
                    <div className="text-left">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        Tyre Categories
                      </h3>
                      <div className="space-y-1">
                        {TYRE_CATEGORIES.map((category) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            className="flex items-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none mobile-touch-target mobile-menu-item w-full text-left"
                            onClick={closeMenus}
                          >
                            <AppIcon icon={category.icon} className="mr-3 h-5 w-5 flex-shrink-0" />
                            <div className="font-medium text-sm sm:text-base md:text-lg">{category.name}</div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Other Navigation Items */}
                    <div className="space-y-1 text-center pt-1">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-base sm:text-lg md:text-xl font-medium text-foreground hover:text-primary focus:outline-none focus:text-primary py-2 mobile-touch-target mobile-menu-item"
                          onClick={closeMenus}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>

              {/* Fixed CTA Section */}
              <div className="flex-shrink-0 p-4 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="w-full max-w-md mx-auto">
                  <a href={`tel:${CONTACT_INFO.primaryContact.phone}`}>
                    <button className="w-full inline-flex items-center justify-center rounded-md text-base sm:text-lg md:text-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 px-4 py-4 mobile-touch-target mobile-menu-item shadow-sm">
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Header;
