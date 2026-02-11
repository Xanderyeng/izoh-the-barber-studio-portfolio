"use client";

import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! Isaac will be in touch shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactLinks = [
    {
      icon: Instagram,
      label: "@izohthebarber",
      href: "https://instagram.com/izohthebarber",
    },
    {
      icon: Phone,
      label: "+254 724 336 408",
      href: "tel:+254724336408",
    },
    {
      icon: Mail,
      label: "Izohthebarber",
      href: "mailto:frizakenya@gmail.com",
    },
    {
      icon: MapPin,
      label: "Leos Salon, Garden City Mall, Nairobi",
      href: "#",
    },
  ];

  return (
    <div className="py-[90px] px-5 md:px-12 bg-[#080808]">
      <div className="max-w-[1200px] mx-auto" id="contact">
        <p className="text-[11px] tracking-[4px] text-[#c9a84c] uppercase mb-2">
          Get In Touch
        </p>
        <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold text-white mb-3">
          Book a Session
          <br />
          or Enquire
        </h2>
        <div className="w-[50px] h-[2px] bg-[#c9a84c] mb-9" />

        <div className="grid md:grid-cols-2 gap-[60px] items-start">
          {/* Contact Info */}
          <div>
            <p className="text-[#888] leading-[1.8] mb-5 text-sm">
              Whether you want to book a session, discuss a collaboration, or
              you&apos;re an employer looking to connect — I&apos;d love to hear
              from you. Currently based at Leos Salon, Garden City, Nairobi and
              open to opportunities in Cairns, Australia.
            </p>

            <div className="space-y-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 text-[#888] no-underline text-sm transition-colors hover:text-[#c9a84c] group"
                  >
                    <div className="w-9 h-9 border border-[#2a2a2a] rounded-sm flex items-center justify-center text-[17px] transition-colors group-hover:border-[#c9a84c] shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <Input
              type="text"
              placeholder="Subject (e.g. Booking, Job Offer, Collab)"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              required
            />
            <Textarea
              placeholder="Your message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="min-h-[110px]"
            />
            <Button
              type="submit"
              variant="gold"
              className="text-xs tracking-[2px] uppercase"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
