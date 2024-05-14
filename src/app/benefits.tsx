import Image from 'next/image'
import { MotionDiv } from './components/framer-motion/motion-div'
import { MotionH3 } from './components/framer-motion/motion-h3'
import { MotionP } from './components/framer-motion/motion-p'

const Benefit = ({ text }: { text: string }) => (
    <MotionDiv
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex gap-5 items-center"
    >
        <svg
            className="min-w-[27px] min-h-[25px]"
            width="27"
            height="25"
            viewBox="0 0 31 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Checked Icon</title>
            <path
                d="M5.16667 3.21875C5.16667 1.82129 6.32378 0.6875 7.75 0.6875H23.25C24.6762 0.6875 25.8333 1.82129 25.8333 3.21875V19.25H5.16667V3.21875ZM22.0122 5.69727C21.5062 5.20156 20.6882 5.20156 20.1877 5.69727L14.2137 11.5508L11.6842 9.07227C11.1783 8.57656 10.3602 8.57656 9.85972 9.07227C9.3592 9.56797 9.35382 10.3695 9.85972 10.86L13.3042 14.235C13.8101 14.7307 14.6281 14.7307 15.1286 14.235L22.0122 7.49023C22.5181 6.99453 22.5181 6.19297 22.0122 5.70254V5.69727ZM0 16.7188C0 15.3213 1.15712 14.1875 2.58333 14.1875H3.44444V20.9375H27.5556V14.1875H28.4167C29.8429 14.1875 31 15.3213 31 16.7188V21.7812C31 23.1787 29.8429 24.3125 28.4167 24.3125H2.58333C1.15712 24.3125 0 23.1787 0 21.7812V16.7188Z"
                fill="url(#paint0_linear_105_4)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_105_4"
                    x1="15.5"
                    y1="0.6875"
                    x2="15.5"
                    y2="24.3125"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#07AAEF" />
                    <stop offset="1" stopColor="#3561EC" />
                </linearGradient>
            </defs>
        </svg>
        <p className="font-semibold">{text}</p>
    </MotionDiv>
)

export default function Benefits() {
    return (
        <section className="my-24 py-20 lg:py-28">
            <div className="max-w-screen-2xl mx-auto flex flex-col gap-12 lg:gap-20 lg:flex-row lg:justify-between xl:items-center px-10 overflow-hidden">
                <MotionDiv
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="w-3/5"
                >
                    <Image
                        className="rounded-lg w-full min-w-[500px] xl:min-w-[600px]"
                        src="/dashboard-tablet.png"
                        alt="Dashboard tablet"
                        width={558}
                        height={372}
                    />
                </MotionDiv>
                <div className="flex flex-col gap-8 max-w-[750px]">
                    <MotionH3
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-medium text-4xl"
                    >
                        Por que seu negócio precisa de um software
                        personalizado?
                    </MotionH3>
                    <MotionP
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Um software customizado é projetado para automatizar
                        tarefas específicas e simplificar processos complexos.
                    </MotionP>
                    <div className="flex flex-col gap-3">
                        <Benefit text="Aderência á especificidade do seu negócio" />
                        <Benefit text="Maior segurança e conformidade" />
                        <Benefit text="Integração perfeita com sistemas existentes" />
                    </div>
                </div>
            </div>
        </section>
    )
}
