"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(formData: ContactFormData) {
  const { name, email, subject, message } = formData

  try {
    const response = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // ✅ this must stay static
      to: process.env.EMAIL_TO || "amnotpissed@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    })

    console.log("Resend response:", response)
    return { success: true }
  } catch (error) {
    console.error("Resend failed:", error)
    throw new Error("Failed to send message. Please try again later.")
  }
}
