import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/app/components/header'
import '@/globals.css'

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Dorville - Desenvolvimento de Software',
	description:
		'Compania de desenvolvimento de software e consultoria em tecnologia da informação.'
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
		<html lang="pt-BR">
			<body className={poppins.className}>
				<div className="flex flex-col h-full">
					<Header sections={headerSections} />
					<main className="flex-1 overflow-y-auto overflow-x-hidden">
						{children}
					</main>
				</div>
			</body>
		</html>
	)
}
