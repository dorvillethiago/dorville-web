'use client'
import Image from 'next/image'
import { MotionH4 } from './components/framer-motion/motion-h4'
import { MotionButton } from './components/framer-motion/motion-button'
import Link from 'next/link'
import { useDialogsStore } from './state/dialogs'

export default function Cta() {
	const setContactDialog = useDialogsStore((state) => state.setContactDialog)
	return (
		<section className="mt-32 px-10 py-20 flex flex-col justify-center items-center gap-16 relative">
			<Image
				width={1440}
				height={245}
				priority
				blurDataURL="/alternative-tech-background-sm.jpg"
				placeholder="blur"
				className="absolute object-cover h-full w-full"
				src="/alternative-tech-background.jpg"
				alt="Tech Background"
			/>
			<div className="mix-blend-multiply w-full h-full absolute bg-gradient-to-r from-light-primary to-accent" />
			<MotionH4
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="text-4xl text-background z-10 text-center"
			>
				Não fique no passado, venha conosco para o futuro.
			</MotionH4>
			<MotionButton
				onClick={() => setContactDialog(true)}
				className="bg-background text-primary py-4 px-8 rounded-xl z-20"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				Conecte-se ao futuro
			</MotionButton>
		</section>
	)
}
