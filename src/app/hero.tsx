import Image from 'next/image'
import { MotionH1 } from './components/framer-motion/motion-h1'
import { MotionButton } from './components/framer-motion/motion-button'
import { MotionDiv } from './components/framer-motion/motion-div'
import { MotionH2 } from './components/framer-motion/motion-h2'

const Content = () => (
    <div className="flex max-w-[510px] xl:max-w-[560px] flex-col gap-8 lg:gap-16">
        <MotionH1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-semibold leading-[1.2em] text-5xl xl:text-6xl 2xl:text-7xl"
        >
            <strong className="font-semibold text-primary">Software</strong>{' '}
            seguro, ágil e acessível.
        </MotionH1>
        <MotionH2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="leading-5"
        >
            Desenvolvemos soluções tecnológicas para empresas de todos os tipos
            e portes de forma escalável.
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
                type="button"
                className="px-5 py-3 rounded-lg bg-primary text-background w-fit"
            >
                Entrar em Contato
            </MotionButton>
            <MotionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="px-5 py-3 rounded-lg bg-secondary w-fit"
            >
                Saber Mais
            </MotionButton>
        </MotionDiv>
    </div>
)

export default function Hero() {
    return (
        <section className="max-w-screen-2xl mx-auto px-10 pt-8 lg:pt-16 pb-16 overflow-x-hidden flex relative flex-col gap-12 lg:flex-row lg:justify-between lg:items-center">
            <Content />
            <MotionDiv
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <Image
                    blurDataURL="/programming-girl-sm.jpg"
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
