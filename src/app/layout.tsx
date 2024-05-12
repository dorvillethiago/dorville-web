import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/app/components/header'
import '@/globals.css'

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Dorville - Desenvolvimento de Software',
    description:
        'Compania de desenvolvimento de software e consultoria em tecnologia da informação.',
}

const headerSections = [
    { displayName: 'Início', href: '/' },
    { displayName: 'Serviços', href: '/' },
]

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body className={poppins.className}>
                <Header sections={headerSections} />
                {children}
            </body>
        </html>
    )
}
