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
    <div>
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ease-in-out
          ${scrolled ? 'bg-background/95 backdrop-blur-sm shadow-md py-1 md:py-2' : 'bg-background py-2 md:py-3'}
          before:absolute before:inset-0 before:z-[-1] before:opacity-0 before:bg-gradient-to-b before:from-background/80 before:to-background/40
          before:transition-opacity before:duration-500 ${scrolled ? 'before:opacity-100' : ''}
          border-b border-border`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className={`flex items-center gap-2 transition-all duration-500
                  group hover:opacity-90 cursor-pointer
                  ${scrolled ? 'scale-90' : 'scale-100'}`}
              >
                <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-300">
                  <Image
                    src="/vt_logo.png"
                    alt="Shree Caar Wind - Tyres Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg md:text-2xl font-bold text-foreground leading-tight tracking-tight">
                    {COMPANY_INFO.name}
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide">
                    {COMPANY_INFO.tagline}
                  </span>
                </div>
              </div>
            </Link>

            <button
              className="md:hidden p-2 bg-card text-foreground rounded-lg transition-all duration-300
                hover:bg-muted active:scale-95 border border-border
                flex items-center justify-center w-10 h-10"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setTyresDropdownOpen(false);
              }}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <AppIcon icon="lucide:x" className="w-6 h-6 transition-transform duration-300" />
              ) : (
                <AppIcon icon="lucide:menu" className="w-6 h-6 transition-transform duration-300" />
              )}
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-all duration-300 
                  hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                  after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
                Home
              </Link>

              <div className="relative">
                <button
                  ref={buttonRef}
                  onClick={() => setTyresDropdownOpen(!tyresDropdownOpen)}
                  className="flex items-center text-muted-foreground hover:text-primary transition-all duration-300
                    relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                    after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
                  aria-expanded={tyresDropdownOpen}
                  aria-haspopup="true"
                >
                  Tyres
                  <AppIcon
                    icon="lucide:chevron-down"
                    size={16}
                    className={`ml-1 transform transition-transform duration-300 ${tyresDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  ref={dropdownRef}
                  className={`absolute left-0 mt-2 w-64 bg-card rounded-lg shadow-lg py-2 border border-border
                    transform transition-all duration-300 ease-out z-50
                    ${tyresDropdownOpen
                      ? 'opacity-100 translate-y-0 visible'
                      : 'opacity-0 -translate-y-4 invisible'}`}
                >
                  {tyreCategories.map((category, index) => (
                    <Link
                      key={category.name}
                      href={`/tyres${category.href}`}
                      className="flex items-center px-4 py-3 text-muted-foreground hover:text-primary 
                          hover:bg-muted/50 transition-all duration-300 group"
                      onClick={() => setTyresDropdownOpen(false)}
                      style={{
                        transitionDelay: `${index * 50}ms`
                      }}
                    >
                      <AppIcon
                        icon={category.icon}
                        size={20}
                        className="mr-3 flex-shrink-0 transition-transform duration-300 
                            group-hover:scale-110 group-hover:rotate-12"
                      />
                      <div>
                        <div className="font-medium">{category.name}</div>
                        <div className="text-sm text-muted-foreground/70 transition-all duration-300 
                            group-hover:text-primary/80">{category.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 
                    hover:scale-105 relative after:absolute after:bottom-0 after:left-0 
                    after:h-0.5 after:w-0 hover:after:w-full after:bg-primary 
                    after:transition-all after:duration-300"
                >
                  {item.name}
                </Link>
              ))}

              <div className="relative w-64 lg:w-72">
                <AlgoliaSearchBar
                  width="w-64 lg:w-72"
                  containerClass="relative"
                  mobileFullWidth={false}
                />
              </div>

              <a href={`tel:${CONTACT_INFO.primaryContact.phone}`}>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg 
                  hover:bg-primary/90 transform transition-all duration-300 
                  hover:scale-105 hover:shadow-lg active:scale-95
                  relative overflow-hidden before:absolute before:inset-0 
                  before:bg-primary-foreground/20 before:translate-x-[-150%] hover:before:translate-x-[150%]
                  before:transition-transform before:duration-500">
                  Book Now
                </button>
              </a>
            </div>
          </div>

          <div
            className={`md:hidden transition-all duration-300 absolute top-full left-0 right-0 bg-primary
              ${isMenuOpen ? 'translate-y-0 opacity-100 visible shadow-lg' : '-translate-y-2 opacity-0 invisible'}`}
          >
            <div className="container mx-auto px-4 py-4 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <div className="bg-card rounded-xl shadow border border-border p-4">
                <div className="mb-4 transform transition-all duration-300">
                  <AlgoliaSearchBar
                    width="w-full"
                    containerClass="relative"
                    mobileFullWidth={true}
                  />
                </div>
                <Link href="/" className="block py-2 text-muted-foreground hover:text-primary 
                    transition-all duration-300 hover:translate-x-2">
                  Home
                </Link>

                <div className="space-y-1">
                  <div className="text-muted-foreground font-medium px-2 py-1">Tyres Categories</div>
                  {tyreCategories.map((category, index) => {
                    return (
                      <Link
                        key={category.name}
                        href={`/tyres${category.href}`}
                        className="flex items-center px-4 py-2 text-muted-foreground hover:text-primary 
                          transition-all duration-300 hover:translate-x-2 hover:bg-muted/50 
                          rounded-lg group"
                        style={{
                          transitionDelay: `${index * 50}ms`
                        }}
                      >
                        <AppIcon icon={category.icon} size={20} className="mr-3 transition-transform duration-300 
                          group-hover:scale-110 group-hover:rotate-12" />
                        <div>
                          <div className="font-medium">{category.name}</div>
                          <div className="text-sm text-muted-foreground/70 transition-colors duration-300 
                            group-hover:text-primary/80">{category.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-muted-foreground hover:text-primary 
                      transition-all duration-300 hover:translate-x-2"
                    style={{
                      transitionDelay: `${(index + tyreCategories.length) * 50}ms`
                    }}
                  >
                    {item.name}
                  </Link>
                ))}

                <a href={`tel:${CONTACT_INFO.primaryContact.phone}`}>
                  <button className="w-full bg-primary text-primary-foreground px-6 py-2 rounded-lg 
                    hover:bg-primary/90 transform transition-all duration-300 
                    hover:scale-105 hover:shadow-lg active:scale-95
                    relative overflow-hidden before:absolute before:inset-0 
                    before:bg-primary-foreground/20 before:translate-x-[-150%] hover:before:translate-x-[150%]
                    before:transition-transform before:duration-500">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={`${scrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'} transition-all duration-300`} />
    </div>
  );
};

export default Header;
