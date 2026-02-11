/** biome-ignore-all lint/a11y/noStaticElementInteractions: 'okay' */
/** biome-ignore-all lint/a11y/useButtonType: 'okay' */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: 'okay' */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-100 flex justify-between items-center px-5 md:px-12 bg-dark-darker/88 backdrop-blur-xl border-b border-border transition-all duration-300 ${
          scrolled ? "py-3" : "py-4 md:py-4.5"
        }`}
      >
        <Link
          href="#"
          className="text-2xl font-extrabold tracking-wider text-gold no-underline"
        >
          IZOH
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <Link
              href="#about"
              className="text-muted no-underline text-xs tracking-normal uppercase transition-colors hover:text-gold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#gallery"
              className="text-muted no-underline text-xs tracking-normal uppercase transition-colors hover:text-gold"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-muted no-underline text-xs tracking-normal uppercase transition-colors hover:text-gold"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://instagram.com/izohthebarber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted no-underline text-xs tracking-normal uppercase transition-colors hover:text-gold"
            >
              Instagram
            </a>
          </li>
        </ul>

        {/* Mobile Burger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.25 cursor-pointer bg-transparent border-none p-0"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-gold rounded-sm transition-all" />
          <span className="w-6 h-0.5 bg-gold rounded-sm transition-all" />
          <span className="w-6 h-0.5 bg-gold rounded-sm transition-all" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-57.5 bg-dark-darker z-90 flex flex-col gap-6 px-7 pt-17.5 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link
          href="#about"
          onClick={closeMenu}
          className="text-muted no-underline text-xs tracking-normal uppercase transition-colors hover:text-gold"
        >
          About
        </Link>
        <Link
          href="#gallery"
          onClick={closeMenu}
          className="text-muted no-underline text-xs tracking-normal uppercase transition-colors hover:text-gold"
        >
          Gallery
        </Link>
        <Link
          href="#contact"
          onClick={closeMenu}
          className="text-muted no-underline text-xs tracking-normal uppercase transition-colors hover:text-gold"
        >
          Contact
        </Link>
        <a
          href="https://instagram.com/izohthebarber"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted no-underline text-xs tracking-normal uppercase transition-colors hover:text-gold"
        >
          Instagram
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-80"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
