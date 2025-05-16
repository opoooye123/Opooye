"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactEmail } from "@/app/actions"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await sendContactEmail(formData)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative overflow-hidden">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="bg-zinc-800 border-zinc-700 focus-visible:ring-emerald-400 transition-all duration-300 focus:border-emerald-400"
          />
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-focus-within:w-full"></div>
        </div>
        <div className="relative overflow-hidden">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="bg-zinc-800 border-zinc-700 focus-visible:ring-emerald-400 transition-all duration-300 focus:border-emerald-400"
          />
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-focus-within:w-full"></div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can I help you?"
          required
          className="bg-zinc-800 border-zinc-700 focus-visible:ring-emerald-400 transition-all duration-300 focus:border-emerald-400"
        />
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-focus-within:w-full"></div>
      </div>
      <div className="relative overflow-hidden">
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          rows={5}
          required
          className="bg-zinc-800 border-zinc-700 focus-visible:ring-emerald-400 transition-all duration-300 focus:border-emerald-400"
        />
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-focus-within:w-full"></div>
      </div>

      {submitStatus === "success" && (
        <div className="p-3 bg-emerald-400/20 border border-emerald-400 rounded-md text-emerald-400 animate-fadeIn">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-3 bg-red-400/20 border border-red-400 rounded-md text-red-400 animate-fadeIn">
          Something went wrong. Please try again later.
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 transform hover:scale-[1.02]"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
