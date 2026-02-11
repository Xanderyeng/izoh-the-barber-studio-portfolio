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
      label: "Spritz Hair Studio, Runda Mall, Nairobi",
      href: "#",
    },
  ];

  return (
    <section className="py-22.5 px-5 md:px-12 bg-dark-darker">
      <div className="max-w-300 mx-auto" id="contact">
        <p className="section-label">Get In Touch</p>
        <h2>
          Book a Session
          <br />
          or Enquire
        </h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-15 items-start">
          {/* Contact Info */}
          <div>
            <p className="mb-5">
              Whether you want to book a session, discuss a collaboration, or
              you&apos;re an employer looking to connect — I&apos;d love to hear
              from you. Currently based at Spritz Hair Studio, Runda Mall,
              Nairobi and open to opportunities.
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
                    className="flex items-center gap-3 text-muted no-underline text-sm transition-colors hover:text-gold group"
                  >
                    <div className="w-9 h-9 border border-border rounded-sm flex items-center justify-center transition-colors group-hover:border-gold shrink-0">
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
              className="min-h-27.5"
            />
            <Button
              type="submit"
              variant="gold"
              className="text-sm tracking-wide uppercase"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
