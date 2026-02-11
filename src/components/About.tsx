"use client";

import { User } from "lucide-react";

export function About() {
  const badges = [
    "African / Type 4",
    "Caucasian / European",
    "South Asian",
    "Middle Eastern",
    "Curly / Mixed",
    "Braids & Locs",
    "Colour & Balayage",
    "Beard Design",
  ];

  return (
    <section className="py-22.5 px-5 md:px-12 bg-dark-darker">
      <div className="max-w-300 mx-auto" id="about">
        <p className="section-label">About Me</p>
        <h2>
          13 Years. Every Texture.
          <br />
          One Standard.
        </h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-15 items-start">
          {/* Profile Image */}
          <div className="relative aspect-3/4 bg-dark-card border border-border flex items-center justify-center rounded-sm overflow-hidden">
            <div className="text-center text-muted">
              <User className="w-11 h-11 mx-auto opacity-30" strokeWidth={1} />
              <p className="text-sm tracking-wide mt-2">Profile Photo</p>
            </div>
          </div>

          {/* About Text */}
          <div>
            <p className="mb-3">
              I&apos;m <strong className="text-white">Isaac Mayiaka</strong> —
              known in the chair and online as{" "}
              <strong className="text-gold">Izoh the Barber</strong>. With 13
              years of professional experience in barbering and hair styling,
              I&apos;ve built a career on one principle:{" "}
              <em>never settle for less than the best result possible.</em>
            </p>

            <div className="border-l-2 border-gold pl-5 py-3 my-5 bg-gold/5">
              <p className="text-gold italic text-sm leading-[1.6] m-0">
                &ldquo;100% hard work. Never settling for less.&rdquo; —
                @izohthebarber
              </p>
            </div>

            <p className="mb-3">
              What sets me apart is my ability to work confidently and deliver
              exceptional results across{" "}
              <strong className="text-white">
                every hair texture and ethnicity
              </strong>
              . From sharp skin fades and head shaves on African hair, to
              precision scissor cuts on fine Caucasian hair, structured
              pompadours on thick South Asian hair, and curl-defined taper fades
              on mixed textures — every client gets the same level of craft and
              care.
            </p>

            <p className="mb-5">
              Based at{" "}
              <strong className="text-white">
                Spritz Hair Studio, Runda Mall
              </strong>{" "}
              — one of Nairobi&apos;s most respected premium salon destinations
              — I&apos;ve served a genuinely multicultural clientele and
              developed expertise that translates powerfully across cultures.
              I&apos;m open to new opportunities and collaborations.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 border border-border text-muted text-sm tracking-normal uppercase rounded-sm transition-all hover:border-gold hover:text-gold cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
