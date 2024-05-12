'use client'
import { motion } from 'framer-motion'

export default function Cta() {
    return (
        <section className="my-32 bg-cover bg-[url('/alternative-tech-background.jpg')] px-10 py-20 flex flex-col justify-center items-center gap-10 relative">
            <div className="mix-blend-multiply w-full h-full absolute bg-gradient-to-r from-light-primary to-accent" />
            <motion.h4
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                className="text-4xl text-background z-10 text-center"
            >
                Não fique no passado, venha conosco para o futuro.
            </motion.h4>
            <motion.button
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                whileTap={{
                    scale: 0.95,
                }}
                whileHover={{
                    scale: 1.05,
                }}
                className="bg-background text-primary py-4 px-8 rounded-xl z-10"
                type="button"
            >
                Conecte-se ao futuro
            </motion.button>
        </section>
    )
}
