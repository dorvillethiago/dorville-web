'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Content = () => (
    <motion.div
        initial={{
            x: -50,
            opacity: 0,
        }}
        animate={{
            x: 0,
            opacity: 1,
        }}
        className="flex max-w-[510px] xl:max-w-[560px] flex-col gap-8 lg:gap-16"
    >
        <h1 className="font-semibold text-5xl xl:text-6xl 2xl:text-7xl">
            <strong className="font-semibold bg-gradient-to-r from-light-primary to-accent inline-block text-transparent bg-clip-text bg-300% animate-gradient">
                Software
            </strong>{' '}
            seguro, ágil e acessível.
        </h1>
        <h2 className="leading-5">
            Desenvolvemos soluções tecnológicas para empresas de todos os tipos
            e portes de forma escalável.
        </h2>
        <div className="flex flex-col gap-4 lg:flex-row">
            <motion.button
                whileHover={{
                    scale: 1.05,
                }}
                whileTap={{
                    scale: 0.95,
                }}
                className="px-5 py-3 rounded-lg bg-primary text-background w-fit"
            >
                Entrar em Contato
            </motion.button>
            <motion.button
                whileHover={{
                    scale: 1.05,
                }}
                whileTap={{
                    scale: 0.95,
                }}
                className="px-5 py-3 rounded-lg bg-secondary w-fit"
            >
                Saber Mais
            </motion.button>
        </div>
    </motion.div>
)

export default function Hero() {
    return (
        <div className="max-w-screen-2xl mx-auto px-10 pt-8 lg:pt-16 pb-16 overflow-x-hidden flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-center">
            <Content />
            <motion.div
                initial={{
                    opacity: 0,
                    x: 50,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                }}
            >
                <Image
                    width={783}
                    height={458}
                    alt="Girl programming picture"
                    src="/programming-girl.jpg"
                    className="rounded-lg min-w-[527px] shadow-2xl shadow-black/45"
                    priority
                />
            </motion.div>
        </div>
    )
}
