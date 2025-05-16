"use server"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // For now, we'll just log the data and simulate a successful email send

    console.log("Sending email with data:", {
      to: "amnotpissed@gmail.com",
      from: formData.email,
      subject: `Portfolio Contact: ${formData.subject}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        
        Message:
        ${formData.message}
      `,
    })

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success
    return { success: true }
  } catch (error) {
    console.error("Failed to send email:", error)
    throw new Error("Failed to send email. Please try again later.")
  }
}
