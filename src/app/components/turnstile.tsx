'use client'
import Turnstile, { useTurnstile } from 'react-turnstile'

interface WidgetProps {
    onVerify: (token: string) => void
}

export default function TurnstileWidget({ onVerify }: WidgetProps) {
    const turnstile = useTurnstile()
    return (
        <Turnstile
            theme="light"
            sitekey={process.env.NEXT_PUBLIC_CLIENT_KEY || ''}
            onVerify={onVerify}
        />
    )
}
