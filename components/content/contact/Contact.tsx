import { Mail } from "lucide-react"
import ContactForm from "@/components/content/contact/ContactForm"

export default function Contact() {
  // NOTE: Replace this with your real email address when ready.
  const toEmail = "kieran.pritchard@example.com"

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Contact
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Have a project in mind or want to chat about collaboration? Send a
            message and I’ll get back to you.
          </p>

          <div className="space-y-4 rounded-2xl border bg-muted/20 p-6">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 size-5 text-primary" aria-hidden />
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  className="font-medium text-primary hover:underline"
                  href={`mailto:${toEmail}`}
                >
                  {toEmail}
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Prefer email? Copy your message from the form and paste it into an email.
            </p>
          </div>
        </div>

        <div>
          <ContactForm toEmail={toEmail} />
        </div>
      </div>
    </section>
  )
}

