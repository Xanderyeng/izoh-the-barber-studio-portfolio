"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center text-center relative overflow-hidden hero-gradient"
    >
      {/* Background Text */}
      <div
        className="absolute text-[clamp(80px,15vw,200px)] font-black text-gold/4 tracking-[0.15em] select-none top-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        IZOH
      </div>

      {/* Content */}
      <div className="relative z-10 px-5">
        <p className="text-xs tracking-widest text-gold uppercase mb-5">
          Senior Stylist &amp; Barber &nbsp;·&nbsp; All Hair Textures
          &nbsp;·&nbsp; Nairobi, Kenya
        </p>

        <h1>
          ISAAC
          <br />
          <span className="text-gold">MAYIAKA</span>
        </h1>

        <p className="text-base text-muted mt-3 tracking-wider uppercase">
          @izohthebarber
        </p>

        <p className="text-sm text-gold-muted mt-2 italic tracking-tight">
          &ldquo;100% hard work. Never settling for less.&rdquo;
        </p>

        {/* Stats */}
        <div className="flex gap-10 mt-11 justify-center flex-wrap">
          <div className="text-center">
            <div className="text-5xl font-extrabold text-gold">13</div>
            <span className="text-[10px] text-muted tracking-wide uppercase mt-1 block">
              Years Experience
            </span>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-gold">4</div>
            <span className="text-[10px] text-muted tracking-wide uppercase mt-1 block">
              Hair Textures
            </span>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-gold">1</div>
            <span className="text-[10px] text-muted tracking-wide uppercase mt-1 block">
              Standard: Excellence
            </span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-4 mt-11 justify-center flex-wrap">
          <Button
            asChild
            variant="gold"
            className="px-8 text-xs tracking-wide uppercase"
          >
            <Link href="#gallery">View My Work</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="px-8 text-xs tracking-wide uppercase"
          >
            <Link href="#contact">Book / Enquire</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
