"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center text-center relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 60%, #1a1200 0%, #080808 70%)",
      }}
    >
      {/* Background Text */}
      <div
        className="absolute text-[clamp(80px,18vw,220px)] font-black text-[#c9a84c]/[0.04] tracking-[20px] select-none top-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        IZOH
      </div>

      {/* Content */}
      <div className="relative z-10 px-5">
        <p className="text-xs tracking-[4px] text-[#c9a84c] uppercase mb-5">
          Senior Stylist &amp; Barber &nbsp;·&nbsp; All Hair Textures
          &nbsp;·&nbsp; Nairobi, Kenya
        </p>

        <h1 className="text-[clamp(52px,10vw,110px)] font-black tracking-[6px] leading-none text-white">
          ISAAC
          <br />
          <span className="text-[#c9a84c]">MAYIAKA</span>
        </h1>

        <p className="text-[clamp(13px,1.8vw,17px)] text-[#888] mt-3 tracking-[3px] uppercase">
          @izohthebarber
        </p>

        <p className="text-[13px] text-[#c9a84c]/70 mt-2 italic tracking-wide">
          &ldquo;100% hard work. Never settling for less.&rdquo;
        </p>

        {/* Stats */}
        <div className="flex gap-10 mt-11 justify-center flex-wrap">
          <div className="text-center">
            <div className="text-[34px] font-extrabold text-[#c9a84c]">13</div>
            <div className="text-[10px] text-[#888] tracking-[2px] uppercase mt-1">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-[34px] font-extrabold text-[#c9a84c]">4+</div>
            <div className="text-[10px] text-[#888] tracking-[2px] uppercase mt-1">
              Hair Textures
            </div>
          </div>
          <div className="text-center">
            <div className="text-[34px] font-extrabold text-[#c9a84c]">1</div>
            <div className="text-[10px] text-[#888] tracking-[2px] uppercase mt-1">
              Standard: Excellence
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-4 mt-11 justify-center flex-wrap">
          <Button
            asChild
            variant="gold"
            className="px-8 text-xs tracking-[2px] uppercase"
          >
            <Link href="#gallery">View My Work</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="px-8 text-xs tracking-[2px] uppercase"
          >
            <Link href="#contact">Book / Enquire</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
