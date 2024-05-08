import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/header'

const poppins = Poppins( {
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	style: ["normal", "italic"],
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: 'Dorville Software',
	description: 'Software and IT Company'
}

const headerSections = [
	{ displayName: 'Início', href: '/' },
	{ displayName: 'Serviços', href: '/' }
]

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Header sections={headerSections} />
				{children}
			</body>
		</html>
	)
}
