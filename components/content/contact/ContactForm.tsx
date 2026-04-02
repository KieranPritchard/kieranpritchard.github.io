"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactForm({ toEmail }: Readonly<{ toEmail: string }>) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<string | null>(null)
  const [manualBody, setManualBody] = useState<string | null>(null)

  return (
    <div className="rounded-2xl border bg-card p-6 md:p-8">
      <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
        Copy message to clipboard
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill out the form and I’ll format your message for you. Paste it into an email to{" "}
        <span className="font-medium text-foreground">{toEmail}</span>.
      </p>

      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          setIsSubmitting(true)
          setStatus(null)
          setManualBody(null)

          const body = [
            `To: ${toEmail}`,
            `Name: ${name || "-"}`,
            `Email: ${email || "-"}`,
            "",
            message || "-",
          ].join("\n")

          const finish = () => {
            setIsSubmitting(false)
          }

          if (typeof navigator !== "undefined" && "clipboard" in navigator) {
            navigator.clipboard
              .writeText(body)
              .then(() => {
                setStatus("Copied! Paste the message into your email client.")
              })
              .catch(() => {
                setStatus("Copy failed. You can still copy the message manually below.")
                setManualBody(body)
              })
              .finally(() => {
                finish()
              })

            return
          }

          // Fallback for browsers without clipboard access
          setStatus("Clipboard unavailable. Copy the message from the box below.")
          setManualBody(body)
          finish()
        }}
      >
        <div className="space-y-1.5">
          <label className="text-sm font-medium" htmlFor="contact-name">
            Name
          </label>
          <Input
            id="contact-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium" htmlFor="contact-email">
            Email
          </label>
          <Input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project..."
            required
            rows={7}
            className="min-h-[180px] w-full resize-none rounded-3xl border border-transparent bg-input/50 px-3 py-2 text-base outline-none transition-[color,box-shadow,background-color] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div className="pt-2">
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Copying..." : "Copy message"}
          </Button>
        </div>
      </form>

      {status ? (
        <p className="mt-4 text-sm text-muted-foreground" role="status" aria-live="polite">
          {status}
        </p>
      ) : null}

      {manualBody ? (
        <div className="mt-4 space-y-2 rounded-2xl border bg-muted/20 p-4">
          <p className="text-sm font-medium">Manual copy</p>
          <textarea
            value={manualBody}
            readOnly
            rows={8}
            className="w-full resize-none rounded-3xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none"
          />
        </div>
      ) : null}
    </div>
  )
}

