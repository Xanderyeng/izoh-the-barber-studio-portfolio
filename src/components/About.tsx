/** biome-ignore-all lint/a11y/useButtonType: button type not needed for upload trigger */
"use client";

import { User } from "lucide-react";
import { useRef, useState } from "react";

export function About() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setProfileImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

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
    <div className="py-[90px] px-5 md:px-12 bg-[#080808]">
      <div className="max-w-[1200px] mx-auto" id="about">
        <p className="text-[11px] tracking-[4px] text-[#c9a84c] uppercase mb-2">
          About Me
        </p>
        <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold text-white mb-3">
          13 Years. Every Texture.
          <br />
          One Standard.
        </h2>
        <div className="w-[50px] h-[2px] bg-[#c9a84c] mb-9" />

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-[60px] items-start">
          {/* Profile Image */}
          <div className="relative aspect-[3/4] bg-[#161616] border border-[#2a2a2a] flex items-center justify-center rounded-sm overflow-hidden cursor-pointer group">
            {!profileImage ? (
              <div className="text-center text-[#888]">
                <User
                  className="w-11 h-11 mx-auto opacity-30"
                  strokeWidth={1}
                />
                <p className="text-[11px] tracking-wide mt-2">
                  Add Profile Photo
                </p>
              </div>
            ) : (
              // biome-ignore lint/performance/noImgElement: user uploaded image from FileReader
              <img
                src={profileImage}
                alt="Isaac Mayiaka"
                className="w-full h-full object-cover"
              />
            )}

            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-[#c9a84c] tracking-[2px] uppercase bg-black/75 px-3 py-1 rounded-sm whitespace-nowrap hover:bg-black/90 transition-colors"
            >
              + Upload Photo
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleProfileUpload}
              className="hidden"
            />
          </div>

          {/* About Text */}
          <div>
            <p className="text-[#888] leading-[1.85] mb-3 text-[14.5px]">
              I&apos;m <strong className="text-white">Isaac Mayiaka</strong> —
              known in the chair and online as{" "}
              <strong className="text-[#c9a84c]">Izoh the Barber</strong>. With
              13 years of professional experience in barbering and hair styling,
              I&apos;ve built a career on one principle:{" "}
              <em>never settle for less than the best result possible.</em>
            </p>

            <div className="border-l-2 border-[#c9a84c] pl-5 py-3 my-5 bg-[#c9a84c]/5">
              <p className="text-[#c9a84c] italic text-[14px] leading-[1.6] m-0">
                &ldquo;100% hard work. Never settling for less.&rdquo; —
                @izohthebarber
              </p>
            </div>

            <p className="text-[#888] leading-[1.85] mb-3 text-[14.5px]">
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

            <p className="text-[#888] leading-[1.85] mb-5 text-[14.5px]">
              Based at{" "}
              <strong className="text-white">Leos Salon, Garden City</strong> —
              one of Nairobi&apos;s most respected premium salon destinations —
              I&apos;ve served a genuinely multicultural clientele and developed
              expertise that translates powerfully across cultures. I&apos;m now
              bringing that 13-year journey to{" "}
              <strong className="text-white">
                Stefan Hair, Cairns, Australia
              </strong>
              .
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 border border-[#2a2a2a] text-[#888] text-[10px] tracking-[1.5px] uppercase rounded-sm transition-all hover:border-[#c9a84c] hover:text-[#c9a84c] cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
