import Image from 'next/image'
import { MotionDiv } from './components/framer-motion/motion-div'
import HeroImage from '@/../public/programming-girl.jpg'
import { getBase64 } from './lib'
import HeroContent from './components/hero-content'

async function Hero() {
	const HeroImagePlaceholder = await getBase64(
		`${process.env.URL}/programming-girl-sm.jpg`
	)

	return (
		<section className="max-w-screen-2xl mx-auto px-10 pt-8 lg:pt-16 pb-16 overflow-x-hidden flex relative flex-col gap-12 lg:flex-row lg:justify-between lg:items-center">
			<HeroContent />
			<MotionDiv
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
			>
				<Image
					blurDataURL={HeroImagePlaceholder}
					placeholder="blur"
					width={783}
					height={458}
					alt="Girl programming picture"
					src={HeroImage}
					className="rounded-lg min-w-[527px] shadow-2xl shadow-black/45"
					priority
				/>
			</MotionDiv>
		</section>
	)
}

export default Hero
