"use client"

import { Mail, MapPin, Clock } from "lucide-react"
import { IconBrandLinkedin, IconBrandGithub, IconBrandDiscord } from "@tabler/icons-react"
import ContactForm from "@/components/pages/contact/ContactForm"

export default function Contact() {
  const toEmail = "KieranPritchard06@gmail.com"

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-primary">— CONTACT</p>
            <h2 className="text-5xl font-bold tracking-tight">Get in touch.</h2>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Placements, CTF invites, collaborations, or just a hello — I reply to everything reasonable. Usually within a day.
            </p>
          </div>

          {/* This is the rounded square card container */}
          <div className="rounded-2xl border bg-muted/20 border-border overflow-hidden">
            {/* Info Items */}
            <div className="divide-y divide-border">
              {[
                { icon: Mail, label: "EMAIL", value: toEmail, href: `mailto:${toEmail}` },
                { icon: MapPin, label: "BASED IN", value: "Bournemouth, England" },
                { icon: Clock, label: "RESPONSE TIME", value: "Usually < 24h" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6">
                  <div className="p-2 rounded-lg bg-muted/30 text-primary"><item.icon className="size-5" /></div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Buttons Grid */}
            <div className="grid grid-cols-2 gap-px bg-muted/20 border-t border-border">
              {[
                { icon: Mail, label: "Email", href: `mailto:${toEmail}` },
                { icon: IconBrandGithub, label: "GitHub", href: "#" },
                { icon: IconBrandLinkedin, label: "LinkedIn", href: "#" },
                { icon: IconBrandDiscord, label: "Discord", href: "#" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  className="flex items-center gap-3 p-4 hover:bg-primary/30 transition-colors"
                >
                  <item.icon className="size-4 text-primary" />
                  <span className="text-sm font-semibold">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <ContactForm toEmail={toEmail} />
      </div>
    </section>
  )
}