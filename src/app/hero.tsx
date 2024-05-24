import Image from 'next/image'
import { MotionH1 } from './components/framer-motion/motion-h1'
import { MotionButton } from './components/framer-motion/motion-button'
import { MotionDiv } from './components/framer-motion/motion-div'
import { MotionH2 } from './components/framer-motion/motion-h2'
import Link from 'next/link'
import { getBase64 } from './lib'

const Content = () => (
    <div className="flex max-w-[510px] xl:max-w-[560px] flex-col gap-8 lg:gap-16">
        <MotionH1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-semibold leading-[1.2em] text-5xl xl:text-6xl 2xl:text-7xl"
        >
            <strong className="font-semibold text-primary">Seu Software</strong>{' '}
            seguro, ágil e acessível.
        </MotionH1>
        <MotionH2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="leading-5"
        >
            As três principais virtudes da Dorville. Soluções tecnológicas para
            a sua empresa com garantia de qualidade, segurança e agilidade.
        </MotionH2>
        <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4 lg:flex-row"
        >
            <Link href="#contact">
                <MotionButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    className="px-5 py-3 rounded-lg bg-primary text-background w-fit"
                >
                    Fazer Pedido
                </MotionButton>
            </Link>
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

async function Hero() {

    const HeroImagePlaceholder = await getBase64(`${process.env.URL}/programming-girl-sm.jpg`)
    console.log(HeroImagePlaceholder)

    return (
        <section className="max-w-screen-2xl mx-auto px-10 pt-8 lg:pt-16 pb-16 overflow-x-hidden flex relative flex-col gap-12 lg:flex-row lg:justify-between lg:items-center">
            <Content />
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
                    src="/programming-girl.jpg"
                    className="rounded-lg min-w-[527px] shadow-2xl shadow-black/45"
                    priority
                />
            </MotionDiv>
        </section>
    )
}

export default Hero;