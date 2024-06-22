'use client'

import { MotionButton } from './framer-motion/motion-button'
import { MotionDiv } from './framer-motion/motion-div'
import { MotionH1 } from './framer-motion/motion-h1'
import { MotionH2 } from './framer-motion/motion-h2'
import { useDialogsStore } from '../state/dialogs'
import Link from 'next/link'

const HeroContent = () => {
	const setContactDialog = useDialogsStore((state) => state.setContactDialog)
	return (
		<div className="flex max-w-[510px] xl:max-w-[560px] flex-col gap-8 lg:gap-16">
			<MotionH1
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				className="font-semibold leading-[1.2em] text-5xl xl:text-6xl 2xl:text-7xl"
			>
				<strong className="font-semibold text-primary">Seu Sistema</strong>{' '}
				seguro, ágil e acessível.
			</MotionH1>
			<MotionH2
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="leading-5"
			>
				As três principais virtudes da Dorville. Soluções tecnológicas para a
				sua empresa com garantia de qualidade, segurança e agilidade.
			</MotionH2>
			<MotionDiv
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				className="flex flex-col gap-4 lg:flex-row"
			>
				<MotionButton
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => setContactDialog(true)}
					type="button"
					className="px-5 py-3 rounded-lg bg-primary text-background w-fit"
				>
					Fazer Pedido
				</MotionButton>
				<Link href="#services">
					<MotionButton
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						type="button"
						className="px-5 py-3 rounded-lg bg-secondary w-fit"
					>
						Saber Mais
					</MotionButton>
				</Link>
			</MotionDiv>
		</div>
	)
}
export default HeroContent
