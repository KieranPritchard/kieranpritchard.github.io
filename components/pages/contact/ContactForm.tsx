"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"

export default function ContactForm({ toEmail }: { toEmail: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(toEmail)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="rounded-2xl border border-border bg-muted/20 p-8 h-fit">
      <h3 className="text-xl font-bold tracking-tight">Send a message</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill this in and I'll get back to you.
      </p>

      {/* Changed form to a simple div wrapper since we aren't submitting via POST anymore */}
      <div className="mt-8 space-y-5">
        <div className="space-y-1.5">
          <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">YOUR NAME</label>
          <Input placeholder="Jane Doe" className="bg-muted border-border" />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">SUBJECT</label>
          <Select>
            <SelectTrigger className="w-full bg-muted border-border">
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent className="bg-muted border-border">
              <SelectItem value="general">General enquiry</SelectItem>
              <SelectItem value="collaboration">Collaboration</SelectItem>
              <SelectItem value="placement">Placement</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">MESSAGE</label>
          <Textarea
            placeholder="Tell me what you're working on..."
            rows={5}
            className="bg-muted border-border resize-none"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[10px] font-mono text-muted-foreground">// End-to-end encrypted in transit</p>
          
          <Button 
            type="button" 
            onClick={copyEmail}
            className={`gap-2 rounded-lg transition-all ${isCopied ? "bg-green-600 hover:bg-green-600" : ""}`}
          >
            {isCopied ? "Copied!" : "Copy email"} 
            {isCopied ? <Check className="size-4" /> : <Copy className="size-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}