'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="w-4 h-4" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <polyline points="9 16 11 18 15 14"/>
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
  </svg>
);

const navLinks = [
  { href: '/',        label: 'Home'    },
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href) =>
    `text-sm font-semibold uppercase tracking-widest transition-colors duration-200 rounded
     focus-visible:outline-2 focus-visible:outline-cone focus-visible:outline-offset-2
     ${pathname === href ? 'text-cone-light' : 'text-white/80 hover:text-white'}`;

  return (
    <nav className="sticky top-0 z-50 bg-pine shadow-lg" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 rounded
            focus-visible:outline-2 focus-visible:outline-cone focus-visible:outline-offset-2">
            <Image
              src="/pineconeLogo.png"
              alt="Pinecone Education logo"
              width={36}
              height={36}
              className="rounded-sm"
            />
            <span className="font-heading font-bold text-xl text-white tracking-wide">
              Pinecone <span className="text-cone-light">Education</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={linkClass(href)}
                aria-current={pathname === href ? 'page' : undefined}>
                {label}
              </Link>
            ))}
            <Link href="/payment"
              className="inline-flex items-center gap-1.5 bg-cone hover:bg-cone-light text-white
                text-sm font-bold px-5 py-2 rounded-full transition-colors duration-200 cursor-pointer
                focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
              <CalendarIcon />
              Book a Session
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden text-white cursor-pointer p-2 rounded
              focus-visible:outline-2 focus-visible:outline-cone"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden pb-4 border-t border-white/10 mt-1">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-semibold uppercase tracking-wider px-2 py-2 rounded
                    hover:bg-white/10 transition-colors duration-200
                    ${pathname === href ? 'text-cone-light' : 'text-white/80 hover:text-white'}`}
                  aria-current={pathname === href ? 'page' : undefined}>
                  {label}
                </Link>
              ))}
              <Link href="/payment"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-1.5 bg-cone hover:bg-cone-light text-white
                  text-sm font-bold px-5 py-2 rounded-full mt-2 transition-colors duration-200
                  cursor-pointer w-fit">
                <CalendarIcon />
                Book a Session
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
