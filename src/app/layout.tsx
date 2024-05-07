import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Dorville Software',
	description: 'Software and IT Company'
}

const headerSections = [
	{ displayName: 'Início', href: '/' },
	{ displayName: 'Serviços', href: '/about' }
]

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header sections={headerSections} />
				{children}
			</body>
		</html>
	)
}
