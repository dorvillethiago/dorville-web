import { MotionH4 } from './components/framer-motion/motion-h4'
import { MotionUl } from './components/framer-motion/motion-ul'

const ServiceList = [
    'Desenvolvimento Web',
    'Consultoria de TI',
    'Aplicativos Mobile',
    'Dashboards Interativos',
    'Integração de Sistemas',
    'Aplicações Desktop',
]

const Service = ({ text }: { text: string }) => (
    <li className="p-7 rounded-xl bg-secondary hover:bg-gradient-to-tr from-light-primary to-accent hover:text-background hover:scale-105 transition-all cursor-pointer">
        {text}
    </li>
)

export default function Services() {
    return (
        <section id="services" className="max-w-screen-2xl mx-auto px-10 pt-8">
            <MotionH4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-medium text-4xl"
            >
                Possuímos uma variedade extensa de serviços em tecnologia.
            </MotionH4>
            <MotionUl
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="gap-4 flex flex-wrap mt-16"
            >
                {ServiceList.map((service) => (
                    <Service key={service} text={service} />
                ))}
            </MotionUl>
        </section>
    )
}
