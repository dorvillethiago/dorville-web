'use server'
import nodemailer from 'nodemailer'

interface Email {
    email: string
    phone: string
    message: string
}

type EmailResponse = {
    sent: boolean
}

export async function send({
    email,
    phone,
    message,
}: Email): Promise<EmailResponse> {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: true,
        auth: {
            user: process.env.CLIENT_EMAIL,
            pass: process.env.CLIENT_PASSWORD,
        },
    })
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: 'dorville.dev@gmail.com',
            subject: 'NOVA MENSAGEM DE POSSÍVEL CLIENTE',
            text: `Email: ${email}\nWhatsApp: ${phone}\nMessage: ${message}`,
        })
        if (info.rejected) {
            console.error(info.rejected)
            return { sent: false }
        }
        return { sent: true }
    } catch (error) {
        console.error(error)
        return { sent: false }
    }
}
