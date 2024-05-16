import nodemailer from 'nodemailer'

const idToRequestCount = new Map<string, number>() // keeps track of individual users

const rateLimiter = {
    windowStart: Date.now(),
    windowSize: 300000,
    maxRequests: 1,
}

const limit = (ip: string) => {
    // Check and update current window
    const now = Date.now()
    const isNewWindow = now - rateLimiter.windowStart > rateLimiter.windowSize
    if (isNewWindow) {
        rateLimiter.windowStart = now
        idToRequestCount.set(ip, 0)
    }
    // Check and update current request limits
    const currentRequestCount = idToRequestCount.get(ip) ?? 0
    if (currentRequestCount >= rateLimiter.maxRequests) return true
    idToRequestCount.set(ip, currentRequestCount + 1)
    return false
}

export async function GET(request: Request) {
    const ip = request.headers.get('cf-connecting-ip')
    const isRateLimited = limit(ip as string)
    if (isRateLimited)
        return new Response('Rate limit exceeded', { status: 429 })
    // Captcha Validation
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')
    const formData = new FormData()
    formData.append('secret', process.env.SERVER_KEY as string)
    formData.append('response', token as string)
    formData.append('remoteip', ip as string)
    const result = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
            body: formData,
            method: 'POST',
        }
    )
    const outcome = await result.json()
    if (!outcome.success) {
        return new Response('Invalid token', { status: 400 })
    }
    // Params Validation
    const email = searchParams.get('email')
    const phone = searchParams.get('phone')
    const message = searchParams.get('message')
    if (!email || !phone || !message) {
        return new Response('Missing parameters', { status: 400 })
    }
    // Email Sending
    const transporter = nodemailer.createTransport({
        host: 'smtp.dorville.com.br',
        port: 465,
        secure: true,
        auth: {
            user: process.env.CLIENT_EMAIL,
            pass: process.env.CLIENT_PASSWORD,
        },
    })
    try {
        const info = await transporter.sendMail({
            from: process.env.CLIENT_EMAIL,
            to: 'dorville.dev@gmail.com',
            subject: 'NOVA MENSAGEM DE POSSÍVEL CLIENTE',
            text: `Email: ${email}\nWhatsApp: ${phone}\nMessage: ${message}`,
        })
        if (info.rejected.length === 1) {
            console.error(info.rejected)
            return new Response('Email has not been sent', { status: 500 })
        }
        return new Response('Email has been sent', { status: 200 })
    } catch (error) {
        console.error(error)
        return new Response('Email has not been sent', { status: 500 })
    }
}
