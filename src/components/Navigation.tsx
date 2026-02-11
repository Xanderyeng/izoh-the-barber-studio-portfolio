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
        className={`fixed top-0 w-full z-[100] flex justify-between items-center px-5 md:px-12 bg-[#080808]/88 backdrop-blur-xl border-b border-[#2a2a2a] transition-all duration-300 ${
          scrolled ? "py-3" : "py-4 md:py-[18px]"
        }`}
      >
        <Link
          href="#"
          className="text-[22px] font-extrabold tracking-[4px] text-[#c9a84c] no-underline"
        >
          IZOH
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <Link
              href="#about"
              className="text-[#888] no-underline text-xs tracking-[1.5px] uppercase transition-colors hover:text-[#c9a84c]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#gallery"
              className="text-[#888] no-underline text-xs tracking-[1.5px] uppercase transition-colors hover:text-[#c9a84c]"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-[#888] no-underline text-xs tracking-[1.5px] uppercase transition-colors hover:text-[#c9a84c]"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://instagram.com/izohthebarber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] no-underline text-xs tracking-[1.5px] uppercase transition-colors hover:text-[#c9a84c]"
            >
              Instagram
            </a>
          </li>
        </ul>

        {/* Mobile Burger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-0"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[2px] bg-[#c9a84c] rounded-sm transition-all" />
          <span className="w-6 h-[2px] bg-[#c9a84c] rounded-sm transition-all" />
          <span className="w-6 h-[2px] bg-[#c9a84c] rounded-sm transition-all" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-[230px] bg-[#080808] z-[90] flex flex-col gap-6 px-7 pt-[70px] transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link
          href="#about"
          onClick={closeMenu}
          className="text-[#888] no-underline text-xs tracking-[1.5px] uppercase transition-colors hover:text-[#c9a84c]"
        >
          About
        </Link>
        <Link
          href="#gallery"
          onClick={closeMenu}
          className="text-[#888] no-underline text-xs tracking-[1.5px] uppercase transition-colors hover:text-[#c9a84c]"
        >
          Gallery
        </Link>
        <Link
          href="#contact"
          onClick={closeMenu}
          className="text-[#888] no-underline text-xs tracking-[1.5px] uppercase transition-colors hover:text-[#c9a84c]"
        >
          Contact
        </Link>
        <a
          href="https://instagram.com/izohthebarber"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888] no-underline text-xs tracking-[1.5px] uppercase transition-colors hover:text-[#c9a84c]"
        >
          Instagram
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-[80]"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
