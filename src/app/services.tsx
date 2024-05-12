'use client'
import { motion } from 'framer-motion'

const Service = ({ text }: { text: string }) => (
    <motion.li className="p-7 rounded-xl bg-secondary hover:bg-gradient-to-tr from-light-primary to-accent hover:text-background hover:scale-105 transition-all cursor-pointer">
        {text}
    </motion.li>
)

export default function Services() {
    return (
        <section className="max-w-screen-2xl mx-auto px-10 pt-8">
            <motion.h4
                initial={{
                    x: -50,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                className="font-medium text-4xl"
            >
                Possuímos uma variedade extensa de serviços em tecnologia.
            </motion.h4>
            <motion.ul
                initial={{
                    x: -50,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                className="gap-4 flex flex-wrap mt-16"
            >
                <Service text="Desenvolvimento Web" />
                <Service text="Consultoria de TI" />
                <Service text="Aplicativos Mobile" />
                <Service text="Dashboards Interativos" />
                <Service text="Integração de Sistemas" />
                <Service text="Aplicações Desktop" />
            </motion.ul>
        </section>
    )
}
